<template>
  <v-hover v-slot:default="{ hover }" open-delay="200">
    <v-card
      dir="rtl"
      class="mx-auto cardc"
      max-width="700"
      :elevation="hover ? 16 : 2"
    >
      <br />
      <div>
        <v-form ref="form" class="form">
          <div class="row">
            <div class="col-md-6">
              <v-label><h3>الإسم و اللقب</h3></v-label>
              <v-text-field
                color="#d41b45"
                v-model="user.name"
                :rules="nameRules"
                placeholder="الإسم و اللقب"
              ></v-text-field>
            </div>
            <div class="col-md-6">
              <v-label><h3>بطاقة التعريف الوطنية</h3></v-label>
              <v-text-field
                color="#d41b45"
                v-model="user.cin"
                placeholder="بطاقة التعريف الوطنية"
                :rules="rules"
              ></v-text-field>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <v-label><h3>مكان السكن</h3></v-label>
              <v-select :items="cities" required></v-select>
            </div>
            <div class="col-md-6">
              <v-label><h3>المنطقة</h3></v-label>
              <v-select :items="items" required></v-select>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <v-label><h3>البريد الالكتروني</h3></v-label>
              <v-text-field
                color="#d41b45"
                v-model="user.email"
                :rules="emailRules"
                placeholder="البريد الالكتروني"
              ></v-text-field>
            </div>
            <div class="col-md-6">
              <v-label><h3>رقم الهاتف</h3></v-label>
              <v-text-field
                color="#d41b45"
                v-model="user.phone"
                :rules="rules"
                placeholder="رقم الهاتف"
              ></v-text-field>
            </div>
          </div>
          <v-btn
            class="title"
            color="#d41b45"
            dark
            height="25px"
            rounded
            @click="updatePass"
          >
            تغيير كلمة السر
          </v-btn>

          <div class="row" v-if="isClicked">
            <div class="col-md-6">
              <v-label><h3>كلمة السر</h3></v-label>
              <v-text-field
                color="red"
                type="password"
                v-model="user.cin"
                placeholder="كلمة السر"
                :rules="rules"
              ></v-text-field>
            </div>
            <div class="col-md-6">
              <v-label><h3>كلمة السر</h3></v-label>
              <v-text-field
                color="red"
                type="password"
                v-model="user.cin"
                placeholder="كلمة السر"
                :rules="rules"
              ></v-text-field>
            </div>
          </div>
        </v-form>
        <br />
        <div class="text-center">
          <v-btn
            class="title"
            color="#d41b45"
            dark
            style="margin-top: 0px;"
            rounded
          >
            تعديل حسابي
          </v-btn>
        </div>
        <div class="clearfix"></div>
      </div>
    </v-card>
  </v-hover>
</template>
<script>
export default {
  name: "EditProfileForm",
  props: {
    isClicked: {
      Boolean,
      default: false
    },
    user: {
      cin: "string",
      name: "string",
      adress: "string",
      phone: "integer",
      email: "string",
      mdp: "string"
    }
  },
  data: () => ({
    cities: [
      "أريانة",
      "باجة",
      "بنزرت",
      "بن عروس",
      "تطاوين",
      "توزر",
      "تونس",
      "جندوبة",
      "زغوان",
      "سليانة",
      "سوسة",
      "سيدي بوزيد",
      "صفاقس",
      "قابس",
      "قبلي",
      "القصرين",
      "قفصة",
      "القيروان",
      "الكاف",
      "مدنين",
      "المنستير",
      "منوبة",
      "المهدية",
      "نابل"
    ],
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
    ],
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ]
  }),
  methods: {
    updatePass() {
      if (!this.isClicked) {
        this.isClicked = true;
      } else {
        this.isClicked = false;
      }
    }
  }
};
</script>
<style>
.form {
  padding-right: 20px;
  padding-left: 20px;
}
.cardc {
  padding-bottom: 20px;
  height: 520px;
}
h3 {
  color: #d41b45;
  height: 3px;
  font-family: Cairo;
}
</style>
