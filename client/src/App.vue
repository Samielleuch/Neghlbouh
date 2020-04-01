<template>
  <div>
    <v-app>
      <Header />
      <!--the button to show the Sign in modal -->
      <div>
        <v-btn @click="pressLogin(true)">
          <span class="mr-2">LOGIN</span>
          <v-icon>mdi-open-in-new</v-icon>
        </v-btn>
      </div>
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
import { mapActions, mapState } from "vuex";
export default {
  name: "App",
  components: {
    Sign_In,
    Header,
    Footer
  },
  data: () => ({
    //
  }),
  computed: {
    ...mapState(["isLoginPressed"])
  },
  methods: {
    ...mapActions(["pressLogin"])
  }
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Cairo|Tajawal&display=swap");
</style>
