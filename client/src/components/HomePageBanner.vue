<template>
  <v-row justify="center" align-content="center" class="fill-height">
    <v-col cols=" 12 " md="6" class="text-center">
      <h1 class=" Hometext mt-12" v-if="this.$store.state.currentUser !== undefined">
        {{ this.$store.state.langPack.HeaderMenu.Userwelcome }}
        {{ this.$store.state.currentUser.name }} !
      </h1>
      <h1 class=" Hometext mt-8">
        {{ HomePageBanner.title1 }}
      </h1>
      <h1 class="Subtext">
        {{ HomePageBanner.title2 }}
      </h1>
      <v-row justify="center">
        <v-btn class="btnHome ml-4" dark rounded>
          {{ HomePageBanner.btn1 }}
        </v-btn>
        <v-btn class="btnHome mr-4" dark rounded>
          {{ HomePageBanner.btn2 }}
        </v-btn>
      </v-row>
    </v-col>
    <v-col
      cols=" 12 "
      md="6"
      align-self="center"
      class="text-center  d-none d-md-flex "
    >
      <v-img
        contain
        class=" text-center imgCenter"
        src="@/assets/HomePage.png"
        max-width="600"
        aspect-ratio="1.129"
      ></v-img>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "HomePageBanner",
  data() {
    return {
      HomePageBanner: this.$store.state.langPack.HomePageBanner
    };
  }
};
</script>

<style scoped>
.imgCenter {
  margin-right: 2vw !important;
}
.Hometext {
  font-family: Cairo;
  color: white;
  font-weight: bold !important;
  font-size: 2.4vw !important;
  margin-top: 5vw !important;
}
.Subtext {
  font-family: Cairo;

  font-weight: bold !important;
  font-size: 1.5vw !important;
  margin-top: 3vw !important;
}

.btnHome {
  font-family: Cairo;

  margin-top: 50px;
  font-size: 20px;
  font-weight: bold !important;
  font-family: Cairo;
}
@media only screen and (max-width: 958px) {
  .Hometext {
    color: white;
    font-weight: bold !important;
    font-size: 40px !important;
    margin-top: 7vw !important;
    font-family: Cairo;
  }
  .Subtext {
    font-weight: bold !important;
    font-size: 20px !important;
    margin-top: 4vw !important;
    font-family: Cairo;
  }
  .btnHome {
    margin-top: 20px;
    font-weight: bold !important;
    font-family: Cairo;
  }
}
</style>
