<template>
  <v-app>
    <!-- navbar here-->
    <div style="height:56px; background:#E45E54;"></div>
    
    <Home />
  </v-app>
</template>
<style>
@import url("https://fonts.googleapis.com/css?family=Cairo|Tajawal&display=swap");
/* [DEL] to be deleted, just for testing */
body {
  height: 5000px;
}
/*@import 'src/assets/css/style.css';*/
</style>
<script>
import Home from "@/views/Home.vue";

export default {
  name: "App",

  components: {
    Home
  },

  data: () => ({
    //
  })
};
</script>
