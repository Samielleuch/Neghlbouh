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
            <MglMarker :coordinates.sync="markerCoordinates" color="red" />
            <MglGeojsonLayer
              :sourceId="geoJsonSource.data.id"
              :source="geoJsonSource"
              layerId="somethingSomething"
              :layer="geoJsonLayer"
            />
          </MglMap>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <div>
          hi
        </div>
      </v-col>
    </v-row>
  </div></template
>

<script>
import Mapbox from "mapbox-gl";
import { MglMap, MglMarker, MglGeojsonLayer } from "vue-mapbox";

export default {
  name: "LiveMap",
  components: { MglMap, MglMarker, MglGeojsonLayer },
  data() {
    return {
      myCoordinate: [10.4, 35.8],
      accessToken:
        "pk.eyJ1Ijoic2FtaWVsbGV1Y2giLCJhIjoiY2s4ZmYxanp5MDA5MDNmcWowY3FuZm1tbSJ9.neFuBaRgOGr8khOj2FGweA",
      mapStyle: "mapbox://styles/mapbox/light-v10",
      center: [10.5375, 35.2],
      markerCoordinates: [10.5375, 36.8],
      zoom: 6,
      minZoom: 0,
      maxBounds: [
        [6.5, 28.8869],
        [12.5375, 38.1]
      ],
      geoJsonLayer: {
        type: "circle",
        paint: {
          "circle-color": "red",
          "circle-radius": {
            stops: [
              [0, 0],
              [20, 100000]
              //distance here
            ],
            base: 2
          },
          "circle-stroke-color": "white",
          "circle-opacity": 0.3,
          "circle-pitch-scale": "viewport"
        }
      }
    };
  },
  computed: {
    geoJsonSource() {
      return {
        type: "geojson",
        data: {
          id: "thisIsMySource",
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              minFeatureSize: 5000,
              geometry: {
                type: "Point",
                coordinates: this.myCoordinate
              },
              properties: {
                id: "value0",
                minFeatureSize: 1000
              }
            }
          ]
        }
      };
    }
  },
  created() {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox;
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
