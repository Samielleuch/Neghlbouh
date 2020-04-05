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
              :layer="getGeoJsonLayer(opacity[index].number)"
            >
            </MglGeojsonLayer>
          </MglMap>
        </div>
      </v-col>
    </v-row>
    <v-row class="mr-12 ml-12">
      <v-col cols="4">
        <div class="text-center">
          <v-sheet color="red lighten-5"> moin de 20 personne </v-sheet>
        </div>
      </v-col>
      <v-col cols="4">
        <div class="text-center">
          <v-sheet color="red lighten-4"> entre 20 et 50 personne</v-sheet>
        </div>
      </v-col>
      <v-col cols="4">
        <div class="text-center">
          <v-sheet color="red lighten-2"> +50 personne</v-sheet>
        </div>
      </v-col>
    </v-row>
  </div></template
>

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
      Zones: sfax.Zones,
      opacity: [
        { name: "ساقية الزيت", number: 0 },
        { name: "ساقية الدائر", number: 0 },
        { name: "العين صفاقس", number: 0 },
        { name: "قرمدة", number: 0 },
        { name: "طينة", number: 0 },
        { name: "الشيحية", number: 0 },
        { name: "المحرس", number: 0 },
        { name: "قرقنة", number: 0 },
        { name: "الصخيرة", number: 0 },
        { name: "عقارب", number: 0 },
        { name: "الحنشة", number: 0 },
        { name: "جبنيانة", number: 0 },
        { name: "بئر علي صفاقس", number: 0 },
        { name: "الغريبة", number: 0 },
        { name: "العامرة", number: 0 },
        { name: "العوابد - الخزانات", number: 0 },
        { name: "الناظور", number: 0 },
        { name: "الحاجب", number: 0 },
        { name: "حزق", number: 0 },
        { name: "الأعشاش", number: 0 },
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
              properties: {
                description: "Ford's Theater",
                id: "value0"
              }
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
  },
  mounted() {
    //every 10 second request the api !
    this.interval = setInterval(() => {
      //  this.getJoke();
      // gps.requestGPS();
      // this.opacity[0].number += 10 ;
      // this.opacity[1].number += 10 ;
      // this.opacity[2].number += 10 ;
    }, 5000);
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
