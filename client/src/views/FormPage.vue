<template dir="rtl">
  <div class="background">
    <v-hover v-slot:default="{ hover }" open-delay="200">
      <v-card
        dir="rtl"
        class="mx-auto"
        width="900"
        height="840"
        :elevation="hover ? 16 : 2"
      >
        <v-form ref="form" class="form">
          <v-label><h3>سبب الخروج</h3></v-label>
          <v-text-field
            v-model="reason"
            color="#d41b45"
            :counter="10"
            :rules="reasonRules"
            required
          ></v-text-field>
          <v-row>
            <div class="col-md-4">
              <v-label><h3>وقت العودة</h3></v-label>
            </div>
            <div class="col-md-5" style="margin-right: 30px">
              <v-time-picker width="180px" color="#d41b45"></v-time-picker>
            </div>
          </v-row>
          <v-label><h3>الوجهة</h3></v-label>
          <v-select
            v-model="select"
            class="txt"
            color="#d41b45"
            :items="items"
            :rules="[v => !!v || 'الرجاء اختيار الوجهة']"
            required
          ></v-select>

          <div class="text-center">
            <v-btn
              class="title "
              dark
              rounded
              color="#D41B45"
              height="30px"
              width="100px"
              @click="verify"
            >
              تقييم
            </v-btn>
          </div>
          <div v-if="isClicked" style="margin-top: 5px">
            <div class="app1">
              <v-alert
                v-if="state == 'Supermodel'"
                dense
                text
                width="200px"
                height="70px"
                type="success"
              >
                الخطر :{{ score }}</v-alert
              >
              <v-alert
                v-else-if="state == 'Super'"
                dense
                text
                width="170px"
                type="warning"
              >
                الخطر :{{ score }}</v-alert
              >
              <v-alert v-else dense outlined type="error" width="170px">
                الخطر :{{ score }}</v-alert
              >
            </div>
            <div class="text-center">
              <v-btn
                class="title"
                dark
                rounded
                style="margin-top: 80px;margin-left: 15px"
                color="#D41B45"
                height="50px"
                width="120px"
                @click="updatePass"
              >
                تثبيت الخروج
              </v-btn>
              <v-btn
                class="title"
                dark
                rounded
                style="margin-top: 80px;margin-left: 15px"
                color="#D41B45"
                height="50px"
                width="120px"
                @click="updatePass"
              >
                الغاء الخروج
              </v-btn>
            </div>
          </div>
        </v-form>
      </v-card>
    </v-hover>
  </div>
</template>

<script>
export default {
  name: "FormPage",
  props: {
    isClicked: {
      Boolean,
      default: false
    }
  },
  data: () => ({
    valid: true,

    state: "Supermodel",
    score: "75%",
    reason: "",
    reasonRules: [v => !!v || "الرجاء ادخال سبب الخروج"],
    select: null,
    items: [
      "ساقية الزيت",
      "ساقية الدائر",
      "العين صفاقس",
      "قرمدة",
      "طينة",
      "الشيحية",
      "المحرس",
      "قرقنة",
      "الصخيرة",
      "عقارب",
      "الحنشة",
      "جبنيانة",
      "بئر علي صفاقس",
      "الغريبة",
      "العامرة",
      "العوابد - الخزانات",
      "الناظور",
      "الحاجب",
      "حزق",
      "الأعشاش",
      "النصر"
    ]
  }),
  methods: {
    verify() {
      if (!this.isClicked) {
        this.isClicked = true;
      } else {
        this.isClicked = false;
      }
    }
  }
};
</script>
<style scoped>
.form {
  padding: 30px 50px 50px 50px;
}
.background {
  background-color: #e5dddd;
  font-family: Cairo;
  margin-top: 15px;
  padding-top: 35px;
  padding-bottom: 100px;
}
h3 {
  color: #d41b45;
}
.txt {
  margin-bottom: 25px;
}
.app1 {
  margin-right: 300px;
  margin-top: 30px;
}
</style>
