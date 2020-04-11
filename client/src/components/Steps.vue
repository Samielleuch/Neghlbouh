<template>
  <div dir="rtl">
    <v-row class="mt-sm-6">
      <v-col class="text-center" cols="12" md="4">
        <h1 class="display-1 font-weight-thin mb-4">
          خطوة <span class="application-text">1</span>
        </h1>
        <div class="content">
          <v-container>
            <v-row dense>
              <v-col class="text-right" cols="12">
                <v-hover open-delay="60" v-slot:default="{ hover }">
                  <v-card
                    :elevation="hover ? 16 : 2"
                    class="card"
                    color="#E45E54"
                    dark
                  >
                    <v-card-title class="headline">تسجيل الدخول</v-card-title>

                    <v-card-title
                      >حط المعطيات متاعك و أدخل كان عندك حساب أو اسعمل زر
                      التسجيل بش تصنع حساب
                    </v-card-title>

                    <v-card-actions>
                      <v-btn text x-large>تسجيل</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-hover>
              </v-col>

              <v-col :key="i" cols="12" v-for="(item, i) in items">
                <v-card :color="item.color" dark>
                  <div class="d-flex flex-no-wrap justify-space-between">
                    <div>
                      <v-card-title
                        class="headline"
                        v-text="item.title"
                      ></v-card-title>

                      <v-card-subtitle v-text="item.artist"></v-card-subtitle>
                    </div>

                    <v-avatar class="ma-3" size="125" tile>
                      <v-img :src="item.src"></v-img>
                    </v-avatar>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-col>
      <v-col class="text-center" cols="12" md="4">
        <h1 class="display-1 font-weight-thin mb-4">
          خطوة <span class="application-text">2</span>
        </h1>
        <div class="content">
          <v-container>
            <v-row dense>
              <v-col class="text-right" cols="12">
                <v-hover open-delay="60" v-slot:default="{ hover }">
                  <v-card
                    :elevation="hover ? 16 : 2"
                    class="card"
                    color="#E45E54"
                    dark
                  >
                    <v-card-title class="headline">شوف العباد وين</v-card-title>

                    <v-card-title
                      >حل الخريطة و شوف لعباد الي عملو مطلب قبلك وينهم. اذا
                      البلاصة الي ماشلها مش معبية عمر مطلب
                    </v-card-title>

                    <v-card-actions>
                      <v-btn text x-large>حل الخريطة</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-hover>
              </v-col>

              <v-col :key="i" cols="12" v-for="(item, i) in items">
                <v-card :color="item.color" dark>
                  <div class="d-flex flex-no-wrap justify-space-between">
                    <div>
                      <v-card-title
                        class="headline"
                        v-text="item.title"
                      ></v-card-title>

                      <v-card-subtitle v-text="item.artist"></v-card-subtitle>
                    </div>

                    <v-avatar class="ma-3" size="125" tile>
                      <v-img :src="item.src"></v-img>
                    </v-avatar>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-col>
      <v-col class="text-center" cols="12" md="4">
        <h1 class="display-1 font-weight-thin mb-4">
          خطوة <span class="application-text">3</span>
        </h1>
        <div class="content">
          <v-container>
            <v-row dense>
              <v-col class="text-right" cols="12">
                <v-hover open-delay="60" v-slot:default="{ hover }">
                  <v-card
                    :elevation="hover ? 16 : 2"
                    class="card"
                    color="#E45E54"
                    dark
                  >
                    <v-card-title class="headline"
                      >عمر مطلب بش تخرج
                    </v-card-title>

                    <v-card-title
                      >باش أنظموا رواحنا كل عبد يعمر مطلب يحط فيه وين ماشي و
                      قداه وقت بش يقعد. ياخو إذن صالح في الوقت المحدد في البلاصة
                      المحددة
                    </v-card-title>

                    <v-card-actions>
                      <v-btn text x-large>عمر مطلب خروج</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-hover>
              </v-col>

              <v-col :key="i" cols="12" v-for="(item, i) in items">
                <v-card :color="item.color" dark>
                  <div class="d-flex flex-no-wrap justify-space-between">
                    <div>
                      <v-card-title
                        class="headline"
                        v-text="item.title"
                      ></v-card-title>

                      <v-card-subtitle v-text="item.artist"></v-card-subtitle>
                    </div>

                    <v-avatar class="ma-3" size="125" tile>
                      <v-img :src="item.src"></v-img>
                    </v-avatar>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-col>
    </v-row>
  </div>
  <!-- useless comment -->
</template>
<style scoped>
body * {
  font-family: Tajawal;
}

.card {
  height: 300px;
}

.application-text {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
</style>
<script>
export default {
  name: "Steps",

  components: {},

  data: () => ({
    //
  })
};
</script>
