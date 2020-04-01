<template>
  <div>
    <v-app>


      <!--the button to show the Sign in modal -->

      <v-row justify="center">
        <v-col align="center">
          <v-btn @click="pressLogin(true)">
            <span class="mr-2">LOGIN</span>
            <v-icon>mdi-open-in-new</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      
      <v-content>
        <!-- the actual page that the router shows-->
        <router-view />
        <!-- my sign up modal that gets rendered on top of the page -->
        <Sign_In />
      </v-content>
      

      
    </v-app>
  </div>
</template>
<script>
import Sign_In from "./components/Sign_In";
import { mapActions, mapState } from "vuex";
export default {
  name: "App",
  components: {
    Sign_In
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
