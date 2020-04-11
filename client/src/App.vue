<template>
  <div>
    <v-app>


      <!--the button to show the Sign in modal -->

      <!-- Login button -->
      <!--
      <v-row justify="center">
        <v-col align="center">
          <v-btn @click="pressLogin(true)">
            <span class="mr-2">LOGIN</span>
            <v-icon>mdi-open-in-new</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      -->


      <v-content>
        <!-- the actual page that the router shows-->
        <router-view />
        <!-- my sign up modal that gets rendered on top of the page -->
        <Sign_In />
      </v-content>
      <Footer />
    </v-app>
  </div>
</template>
<script>
import Sign_In from "./components/Sign_In";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Sign_In,
    Header,
    Footer
  },
  data: () => ({
    //
  })
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Cairo|Tajawal&display=swap");
</style>
