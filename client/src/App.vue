<template>
  <v-app>
    <!-- navbar here-->
    <div style="height:56px; background:white;"></div>
    <!-- Home Page
    <Home />
    -->
    <FAQ />
  </v-app>
</template>
<style>
@import url("https://fonts.googleapis.com/css?family=Cairo|Tajawal&display=swap");
/* [DEL] to be deleted, just for testing */
body {
  height: 100%;
}
</style>
<script>
/*import Home from "@/views/Home.vue";*/
import FAQ from "@/views/FAQ.vue";

export default {
  name: "App",

  components: {
    FAQ
  },

  data: () => ({
    //
  })
};
</script>
