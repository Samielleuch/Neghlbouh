<template>
  <div>
    <div style="height: 464px; background-color:#E45E54;"
    >
      <div class="row">
        <v-row class="col-sm-6 photo-banner" align="right" justify="center">
          <v-col cols="12" class="text-right">
          </v-col>
        </v-row>
        <v-row class="col-sm-6 text-banner" align="right" justify="center">
          <v-col cols="12" class="text-right">
            <div class="mt-sm-12 mr-sm-6 title">
              <h1 class="display-1 font-weight-thin mb-4 computer-title">
                الي تنجم تعاونك بش تخرج وقتلي تحب<span class="application-text">
                  Application </span
                >ال
              </h1>
              <h1 class="display-1 font-weight-thin mb-4 mobile-title">
                <span class="application-text"> Applicationال </span><br />
                الي تنجم تعاونك بش تخرج وقتلي تحب
              </h1>
              <h4
                class="subheading mt-sm-12 grey--text text--darken-4 subtitle"
              >
                شوف الخريطة و عمر الفرمولار توا
              </h4>
            </div>
            <v-row align="right" justify="center">
              <div class="text-center mt-sm-12 col-sm-6">
                <v-btn
                  class="col-sm-7 buttons"
                  x-large
                  rounded
                  color="#222222"
                  dark
                  >شوف الخريطة</v-btn
                >
              </div>
              <div
                class="text-center mt-sm-12 col-sm-6"
                align="right"
                justify="center"
              >
                <v-btn
                  class="col-sm-7 buttons"
                  x-large
                  rounded
                  color="#222222"
                  dark
                >
                  عمر مطلب</v-btn
                >
              </div>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<style scoped>
body * {
  font-family: Tajawal;
}
.title h1{
  color: white;
}
.application-text {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.subtitle {
  font-size: 24px;
}
.buttons {
  font-size: 20px !important;
}
.computer-title {
  display: block;
}
.mobile-title {
  display: none;
}
/* mobile css */
@media only screen and (max-width: 600px) {
  .text-banner{
    margin: 0 10px 0 10px;
  }
  .photo-banner {
    display: none !important;
  }
  .subtitle {
    font-size: 21px;
  }
  .buttons {
    margin-top: 25px;
    font-size: 20px !important;
  }
  .mobile-title {
    display: block;
  }
  .computer-title {
    display: none;
  }
}
@media only screen and (max-width: 1100px) and (min-width: 600px) {
  .subtitle {
    font-size: 21px;
  }
  .buttons {
    margin-top: 25px;
    font-size: 16px !important;
  }
}
@media only screen and (max-width: 1600px) {
  .mobile-title {
    display: block;
  }
  .computer-title {
    display: none;
  }
}
</style>

<script>
export default {
  name: "MainBanner",

  components: {},

  data: () => ({
    //
  })
};
</script>
