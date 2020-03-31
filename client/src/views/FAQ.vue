<template>
  <div dir="rtl">
    <v-row style="height:252px" align="center" justify="center">
      <v-col
        cols="12"
        :class="
          $vuetify.breakpoint.xs
            ? 'text-center title-xs'
            : 'text-center title-sm'
        "
      >
        نحن هنا لمساعدتك

        <h4
          :class="
            $vuetify.breakpoint.xs
              ? 'mt-sm-12 grey--text text--lighten-1 subtitle mb-12 subtitle-xs'
              : 'mt-sm-12 grey--text text--lighten-1 subtitle mb-12'
          "
        >
          تصفح الأسئلة الأكثر شيوعًا
        </h4>
      </v-col>
    </v-row>
    <v-row class="questions-body pt-12" align="center" justify="center">
      <v-col cols="12" class="text-center">
        <!-- Question 1 -->
        <div
          v-for="(item, index) in contentFAQ"
          :key="index"
          align="center"
          justify="center"
        >
          <v-col
            @click="current[index] = !current[index]"
            cols="10"
            md="4"
            :class="
              current[index]
                ? 'text-right question'
                : 'text-right question grey--text text--darken-1'
            "
            :style="$vuetify.breakpoint.xs ? 'font-size:7vw;' : ''"
          >
            {{ item.question }}
          </v-col>
          <v-col cols="10" md="4" class="text-right ">
            <v-expand-transition>
              <div
                v-show="current[index]"
                class="mx-auto answer"
                :style="$vuetify.breakpoint.xs ? 'font-size:4vw;' : ''"
              >
                {{ item.answer }}
              </div>
            </v-expand-transition>
          </v-col>
          <v-row align="center" justify="center">
            <v-col cols="6">
              <v-divider width="70%" class="mt-5 mb-5" />
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
    <!-- Can't find what you're looking for -->
    <v-row class="banner pt-12 pb-12" align="center" justify="center">
      <v-col cols="12" class="text-center mb-5">
        <div
          :class="
            $vuetify.breakpoint.xs
              ? 'banner-title-xs mb-10'
              : 'banner-title mb-10'
          "
        >
          ملقيتش الحاجة الي حاشتك باها؟
        </div>
        <div
          :class="
            $vuetify.breakpoint.xs ? 'banner-content-xs' : 'banner-content'
          "
        >
          ابعثلنا ميساج على موقعنا
        </div>
      </v-col>
    </v-row>
    <v-row class="footer" align="center" justify="center">
      <v-col cols="12" class="text-center">
        <v-row>
          <v-col cols="6">
            نغلبوه
          </v-col>
          <v-col cols="5">
            سياسة الخصوصية الأسئلة المتداولة
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Cairo|Tajawal&display=swap");

body * {
  font-family: Cairo;
}
.title-sm {
  font-size: 79px;
}
.title-xs {
  font-size: 12vw;
}
.subtitle-xs {
  font-size: 5vw !important;
}
.subtitle {
  font-size: 24px;
}
.questions-body {
  background: #f7f5f8;
  height: 100%;
}
.question {
  font-size: 40px;
  cursor: pointer;
}
.answer {
  font-size: 22px;
  color: #555555;
}
.sperate-line {
  width: 50%;
  text-align: center;
}
.banner {
  height: 300px;
  background: #e82618;
  color: white;
}
.banner-title {
  font-size: 45px;
}
.banner-title-xs {
  font-size: 8vw;
}
.banner-content {
  font-size: 25px;
}
.banner-content-xs {
  font-size: 5vw;
}
.footer {
  height: 100px;
  background: #f7f5f8;
}
</style>
<script>
// @ is an alias to /src
import contentFAQ from "../assets/contentFAQ.js";

export default {
  name: "Home",
  components: {},
  data: () => ({
    current: {
      "1": false,
      "2": false,
      "3": false,
      "4": false,
      "5": false
    },
    contentFAQ
  })
};
</script>
