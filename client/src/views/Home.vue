<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-sheet class="mt-0 pt-0" color="#d41b45" height="550">
          <HomePageBanner />
        </v-sheet>
      </v-col>
    </v-row>
    <v-row class=" mt-0 text-center">
      <v-col cols="4" class="mt-0 pt-0">
        <v-img src="@/assets/step1.png" max-height="100" contain class="pt-0">
        </v-img>
        <h1>
          Description
        </h1>
      </v-col>
      <v-col cols="4" class="mt-0 pt-0">
        <v-img src="@/assets/step2.png" max-height="100" contain class="pt-0">
        </v-img>
        <h1>
          Description
        </h1>
      </v-col>
      <v-col cols="4" class="mt-0 pt-0">
        <v-img src="@/assets/step3.png" max-height="100" contain class="pt-0">
        </v-img>
        <h1>
          Description
        </h1>
      </v-col>
    </v-row>
  </div>
</template>
<script>
// @ is an alias to /src
import HomePageBanner from "@/components/HomePageBanner";
export default {
  name: "Home",
  components: {
    HomePageBanner
  },
  data() {
    return {};
  }
};
</script>
<style scoped></style>
