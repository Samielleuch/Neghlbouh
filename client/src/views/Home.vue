<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-sheet class="mt-0 pt-0" color="#d41b45" height="550">
          <HomePageBanner />
        </v-sheet>
      </v-col>
    </v-row>
    <v-row class=" mt-0 mb-5 text-center">
      <v-col class="stepsHeader">
        <h1 style="text-decoration: black underline">{{ Steps.intro }}</h1>
      </v-col>
    </v-row>
    <v-row class=" mt-0 text-center">
      <v-col cols=" 12 " md="4" class="mt-0 pt-0 ">
        <div class="step1">
          <v-img src="@/assets/step1.png" max-height="100" contain class="pt-0">
          </v-img>
          <h1>
            {{ Steps.step1.Title }}
          </h1>
          <h3>
            {{ Steps.step1.subTitle }}
          </h3>
        </div>
      </v-col>
      <v-col cols=" 12 " md="4" class="mt-0 pt-0">
        <div class="step2">
          <v-img src="@/assets/step2.png" max-height="100" contain class="pt-0">
          </v-img>
          <h1>
            {{ Steps.step2.Title }}
          </h1>
          <h3>
            {{ Steps.step2.subTitle }}
          </h3>
        </div>
      </v-col>
      <v-col cols=" 12 " md="4" class="mt-0 pt-0">
        <div class="step3">
          <v-img src="@/assets/step3.png" max-height="100" contain class="pt-0">
          </v-img>
          <h1>
            {{ Steps.step3.Title }}
          </h1>
          <h3>
            {{ Steps.step3.subTitle }}
          </h3>
        </div>
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
    return {
      Steps: this.$store.state.langPack.Steps
    };
  }
};
</script>
<style scoped>
.stepsHeader {
  font-family: Cairo;
}
.step1 {
  font-family: Cairo;

  margin-right: 50%;
}
.step2 {
  font-family: Cairo;
}
.step3 {
  font-family: Cairo;

  margin-left: 50%;
}
@media only screen and (max-width: 958px) {
  .step1 {
    margin-right: 0%;
    margin-bottom: 20px;
  }
  .step3 {
    font-family: Cairo;
    margin-left: 0%;
    margin-top: 20px;
  }
}
</style>
