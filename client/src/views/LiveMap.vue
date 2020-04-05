<template>
  <div>
    <v-row justify="center">
      <v-col cols="9">
        <div id="map" class="mapboxgl-map">
          <MglMap
            container="map"
            :center.sync="center"
            :accessToken="accessToken"
            :mapStyle.sync="mapStyle"
            :zoom="zoom"
            :minZoom="minZoom"
            :maxBounds="maxBounds"
          >
            <MglGeolocateControl position="top-right" />
            <MglNavigationControl position="top-right" />
            <MglGeolocateControl position="top-right" />
            <MglScaleControl />
            <MglMarker :coordinates.sync="myCoordinate" color="red">
            </MglMarker>

            <MglGeojsonLayer
              v-for="(city, index) in Zones"
              :key="index + 30"
              :sourceId="getGeoJsonSource(index, city.cord).data.id"
              :source="getGeoJsonSource(index, city.cord)"
              :layerId="index.toString()"
              :layer="getGeoJsonLayer(0.6)"
            >
            </MglGeojsonLayer>
          </MglMap>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <div></div>
      </v-col>
    </v-row></div
></template>

<script>
import Mapbox from "mapbox-gl";
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
    MglScaleControl,
  },
  data() {
    return {
      geoJson: "",
      myCoordinate: [10.4, 35.8],
      accessToken:
        "pk.eyJ1Ijoic2FtaWVsbGV1Y2giLCJhIjoiY2s4ZmYxanp5MDA5MDNmcWowY3FuZm1tbSJ9.neFuBaRgOGr8khOj2FGweA",
      mapStyle: "mapbox://styles/mapbox/light-v10",
      center: [10.5375, 35.2],
      markerCoordinates: [10.7659153, 34.805275],
      zoom: 6,
      minZoom: 0,
      maxBounds: [
        [6.5, 28.8869],
        [12.5375, 38.1]
      ],
      Zones: sfax.Zones
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
              properties: {
                description: "Ford's Theater",
                id: "value0"
              }
            }
          ]
        }
      };
    },
    getGeoJsonLayer(opacity) {
      return {
        type: "circle",
        paint: {
          "circle-color": "red",
          "circle-radius": {
            stops: [
              [0, 0],
              [20, 80000]
              //distance here
            ],
            base: 2
          },
          "circle-stroke-color": "white",
          "circle-opacity": opacity,
          "circle-pitch-scale": "viewport"
        }
      };
    }
  },
  created() {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox;
    console.log(this.getGeoJsonSource(0, this.Zones[0].cord));
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
