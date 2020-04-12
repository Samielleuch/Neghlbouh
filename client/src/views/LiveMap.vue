<template>
  <div>
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
              v-if="visible"
              :coordinates="myCoordinate"
              color="red"
              :key="mykey"
            />
            <MglGeojsonLayer
              :key="index + 30"
              :layer="getGeoJsonLayer(opacity[index].number)"
              :layerId="index.toString()"
              :source="getGeoJsonSource(index, city.cord)"
              :sourceId="getGeoJsonSource(index, city.cord).data.id"
              v-for="(city, index) in Zones"
            >
            </MglGeojsonLayer>
            <MglGeojsonLayer
              :key="index + 500"
              :layer="getTextLayer(city.name + '\n' + opacity[index].number)"
              :layerId="(index + 500).toString()"
              :source="getGeoJsonSource(index + 500, city.cord)"
              :sourceId="getGeoJsonSource(index + 500, city.cord).data.id"
              v-for="(city, index) in Zones"
            >
            </MglGeojsonLayer>
          </MglMap>
        </div>
      </v-col>
    </v-row>
    <v-row class="mr-12 ml-12">
      <v-col cols="4">
        <div class="text-center">
          <v-sheet color="red lighten-5"> اقل 20 مواطن </v-sheet>
        </div>
      </v-col>
      <v-col cols="4">
        <div class="text-center">
          <v-sheet color="red lighten-4"> بين 20 و 50 مواطن </v-sheet>
        </div>
      </v-col>
      <v-col cols="4">
        <div class="text-center">
          <v-sheet color="red lighten-2"> اكثر من 50 </v-sheet>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Mapbox from "mapbox-gl";
//import gps from "@/services/GpsService";
import sfax from "@/store/sfaxx.json";
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
      visible: false,
      mykey: "100",
      numb: "0",
      myCoordinate: [10.5449929, 34.7267589],
      accessToken:
        "pk.eyJ1Ijoic2FtaWVsbGV1Y2giLCJhIjoiY2s4ZmYxanp5MDA5MDNmcWowY3FuZm1tbSJ9.neFuBaRgOGr8khOj2FGweA",
      mapStyle: "mapbox://styles/mapbox/light-v10",
      center: [10.5375, 35.2],
      markerCoordinates: [10.7659153, 34.805275],
      zoom: 6,
      maxBounds: [
        [6.5, 28.8869],
        [12.5375, 38.1]
      ],
      Zones: sfax.Zones,
      opacity: [
        { name: "ساقية الزيت", number: 50 },
        { name: "ساقية الدائر", number: 16 },
        { name: "العين صفاقس", number: 0 },
        { name: "قرمدة", number: 30 },
        { name: "طينة", number: 0 },
        { name: "الشيحية", number: 50 },
        { name: "المحرس", number: 16 },
        { name: "قرقنة", number: 20 },
        { name: "الصخيرة", number: 20 },
        { name: "عقارب", number: 0 },
        { name: "الحنشة", number: 16 },
        { name: "جبنيانة", number: 0 },
        { name: "بئر علي صفاقس", number: 0 },
        { name: "الغريبة", number: 0 },
        { name: "العامرة", number: 16 },
        { name: "العوابد - الخزانات", number: 0 },
        { name: "الناظور", number: 0 },
        { name: "الحاجب", number: 16 },
        { name: "حزق", number: 0 },
        { name: "الأعشاش", number: 9 },
        { name: "النصر", number: 0 }
      ]
    };
  },
  methods: {
    getGeoJsonSource(idd, cord) {
      return {
        type: "geojson",
        data: {
          id: idd.toString(),
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: cord
              },
              properties: {}
            }
          ]
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
    getTextLayer(text) {
      return {
        type: "symbol",
        layout: {
          "text-field": text,
          "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
          "text-size": 13
        }
      };
    }
  },
  created() {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox;
    this.mapbox.setRTLTextPlugin(
      "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js",
      null,
      true // Lazy load the plugin
    );
  },
  mounted() {
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
//TO DO ADD TEXT LAYER !
//https://stackoverflow.com/questions/56762563/how-to-add-a-text-inside-a-circle-in-mapbox-gl-js
//https://soal.github.io/vue-mapbox/api/controls.html#navigationcontrol
