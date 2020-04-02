<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-sheet class="mt-0 pt-0" color="#d41b45" height="550">
          <HomePageBanner />
        </v-sheet>
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
