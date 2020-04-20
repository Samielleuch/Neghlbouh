<template>
  <div>
    <v-row
      align="center"
      class="mt-10 text-center"
      justify="center"
      v-if="alertMe"
    >
      <v-col align-self="center" cols="4" justify="center">
        <v-alert dense text type="error"
          >خطر في منطقتك الرجاء إلتزام المنزل
        </v-alert>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="9">
        <div class="mapboxgl-map" id="map">
          <MglMap
            :accessToken="accessToken"
            :center.sync="center"
            :mapStyle.sync="mapStyle"
            :maxBounds="maxBounds"
            :zoom="zoom"
            container="map"
          >
            <MglGeolocateControl position="top-right" show="true" />
            <MglNavigationControl position="top-right" />
            <MglScaleControl />
            <MglMarker
              :coordinates="myCoordinate"
              :key="mykey"
              color="red"
              v-if="visible"
            />
            <MglGeojsonLayer
              :key="index + 30"
              :layer="getGeoJsonLayer(10)"
              :layerId="index.toString()"
              :source="getGeoJsonSource(index, zone)"
              :sourceId="index.toString()"
              v-for="(zone, index) in miniZones"
            >
            </MglGeojsonLayer>
            <MglGeojsonLayer
              :key="index + 500"
              :layer="getTextLayer()"
              :layerId="(index + 500).toString()"
              :source="getGeoJsonSource(index + 500, zone)"
              :sourceId="(index + 500).toString()"
              v-for="(zone, index) in miniZones"
            >
            </MglGeojsonLayer>
          </MglMap>
        </div>
      </v-col>
    </v-row>
    <v-row class="mr-12 ml-12">
      <v-col cols="4">
        <div class="text-center">
          <v-sheet color="red lighten-5"> اقل 20 مواطن</v-sheet>
        </div>
      </v-col>
      <v-col cols="4">
        <div class="text-center">
          <v-sheet color="red lighten-4"> بين 20 و 50 مواطن</v-sheet>
        </div>
      </v-col>
      <v-col cols="4">
        <div class="text-center">
          <v-sheet color="red lighten-2"> اكثر من 50</v-sheet>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Mapbox from "mapbox-gl";
//import gps from "@/services/GpsService";
import cord from "@/store/coordonnees.json";
import {
  MglMap,
  MglMarker,
  MglGeojsonLayer,
  MglNavigationControl,
  MglGeolocateControl,
  MglScaleControl
} from "vue-mapbox";

export default {
  name: "LiveMap",
  components: {
    MglMap,
    MglMarker,
    MglGeojsonLayer,
    MglNavigationControl,
    MglGeolocateControl,
    MglScaleControl
  },
  data() {
    return {
      geoJson: "",
      alertMe: false,
      visible: false,
      mykey: "100",
      numb: "0",
      myCoordinate: [10.5449929, 34.7267589],
      accessToken:
        "pk.eyJ1Ijoic2FtaWVsbGV1Y2giLCJhIjoiY2s4ZmYxanp5MDA5MDNmcWowY3FuZm1tbSJ9.neFuBaRgOGr8khOj2FGweA",
      mapStyle: "mapbox://styles/mapbox/light-v10",
      center: [10.5375, 35.2],
      zoom: 6,
      maxBounds: [
        [6.5, 28.8869],
        [12.5375, 38.1]
      ],
      Zones: cord.Zones,
      miniZones: [[], [], []]
    };
  },
  methods: {
    getGeoJsonSource(idd, cord) {
      let createdFeatures = [];
      for (let i = 0; i < cord.length; i++) {
        createdFeatures.push({
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: cord[i].cord
          },
          properties: { title: cord[i].nom }
        });
      }
      console.log(createdFeatures);
      return {
        type: "geojson",
        data: {
          id: idd.toString(),
          type: "FeatureCollection",
          features: createdFeatures
        }
      };
    },
    getGeoJsonLayer(nb) {
      let opacity = 0;
      if (nb < 15) {
        opacity = 0.1;
      } else if (nb < 30) {
        opacity = 0.3;
      } else {
        opacity = 0.5;
      }
      return {
        type: "circle",
        paint: {
          "circle-color": "red",
          "circle-radius": {
            stops: [
              [0, 0],
              [20, 18000]
              //distance here
            ],
            base: 2
          },
          "circle-stroke-color": "white",
          "circle-opacity": opacity,
          "circle-pitch-scale": "viewport"
        }
      };
    },
    getTextLayer() {
      return {
        type: "symbol",
        minzoom: 9,
        maxzoom: 0,
        layout: {
          "text-field": ["get", "title"],
          "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
          "text-size": 13
        }
      };
    }
  },
  created() {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox;
    //to be removed and changed to api call
    for (let i = 0; i < cord.Zones.length; i++) {
      this.miniZones[0].push({
        cord: cord.Zones[i].cord,
        nom: cord.Zones[i].nom
      });
    }
  },
  mounted() {
    if (this.mapbox.getRTLTextPluginStatus() !== "loaded") {
      this.mapbox.setRTLTextPlugin(
        "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js",
        null,
        true // Lazy load the plugin
      );
    }

    //every 10 second request the api !
  }
};
</script>
<style>
#map {
  border: 3px red solid;
  width: 100%;
  height: 900px;
}
</style>
