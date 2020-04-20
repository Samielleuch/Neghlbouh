<template>
  <v-hover v-slot:default="{ hover }">
    <v-card
      :elevation="hover ? 16 : 2"
      class="mx-auto cardc"
      dir="rtl"
      max-width="700"
    >
      <div>
        <v-form class="form" ref="form" method="put">
          <v-row>
            <v-col md="6">
              <v-label><h3>الإسم و اللقب</h3></v-label>
              <v-text-field
                :rules="nameRules"
                color="#d41b45"
                v-model="name"
              ></v-text-field>
            </v-col>
            <v-col md="6">
              <v-label><h3>الإسم و اللقب</h3></v-label>
              <v-text-field
                :rules="nameRules"
                color="#d41b45"
                v-model="cin"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col md="6">
              <v-label><h3>مكان السكن</h3></v-label>
              <v-select :items="cities" v-model="city"></v-select>
            </v-col>
            <v-col md="6">
              <v-label><h3>المنطقة</h3></v-label>
              <v-select :items="items" v-model="area"></v-select>
            </v-col>
          </v-row>

          <v-row>
            <v-col md="6">
              <v-label><h3>البريد الالكتروني</h3></v-label>
              <v-text-field
                :rules="emailRules"
                color="#d41b45"
                v-model="email"
              ></v-text-field>
            </v-col>
            <v-col md="6">
              <v-label><h3>رقم الهاتف</h3></v-label>
              <v-text-field
                :rules="phoneRules"
                color="#d41b45"
                v-model="phone"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col justify="center" align="start">
              <v-btn
                @click="updatePass"
                class="title textwhite"
                color="#d41b45"
 tile
                rounded
              >
                تغيير كلمة السر
              </v-btn>
            </v-col>
          </v-row>

          <v-row v-if="isClicked" class="pb-0 mb-0">
            <v-col md="6">
              <v-label><h3>كلمة السر القديمة</h3></v-label>
              <v-text-field
                color="red"
                type="password"
                v-model="oldPassword"
              ></v-text-field>
            </v-col>

            <v-col md="6">
              <v-label><h3>كلمة السر الجديدة</h3></v-label>
              <v-text-field
                color="red"
                type="password"
                v-model="newPassword"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row justify="center" align="center" :class="isClicked? 'pt-0' :'pt-12'">
            <v-col justify="center" align="center" class="pt-0">
              <v-btn
                :disabled="button()"
                :loading="loading"
                @click="validate"
                class=" pt-0 pb-0"
                color="#d41b45"
                rounded
              >
                <span class="textwhite">
                  تعديل حسابي
                </span>
              </v-btn>
            </v-col>
          </v-row>
        </v-form>

        <div class="mt-5" v-if="done">تم تعديل المعطيات بنجاح</div>
      </div>
    </v-card>
  </v-hover>
</template>
<script>
import authController from "../services/AuthenticationService";

export default {
  name: "EditProfileForm",
  props: {
    user: {
      name: "",
      city: "",
      area: "",
      phone: "",
      email: "",
      cin: ""
    }
  },
  data() {
    return {
      loading: false,
      done: false,
      valid: true,
      isClicked: false,
      newPassword: "",
      oldPassword: "",
      name: this.user.name,
      city: this.user.city,
      area: this.user.area,
      cin: this.user.cin,
      phone: this.user.phone,
      email: this.user.email,
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
      phoneRules: [
        v => (!isNaN(parseFloat(v)) && !isNaN(v - 0)) || "يجب أن يكون رقم"
      ],
      nameRules: [
        v => (v && v.length <= 30) || "Name must be less than 30 characters"
      ],
      emailRules: [v => /.+@.+\..+/.test(v) || "E-mail must be valid"]
    };
  },
  computed: {},
  methods: {
    updatePass() {
      this.isClicked = !this.isClicked;
    },
    async validate() {
      this.$refs.form.validate();
      if (this.valid) {
        this.loading = true;
        try {
          let resp = await authController.update({
            oldPassword: this.oldPassword,
            newPassword: this.newPassword,
            name: this.name,
            email: this.email,
            city: this.city,
            cin: this.cin,
            area: this.area,
            phone: this.phone
          });
          this.loading = false;
          this.done = true;
          console.log(resp);
        } catch (e) {
          this.loading = false;
          console.log(e.response.data);
          this.error = e.response.data.err;
        }
      } else {
        //to implement notification v-if here
        console.log("validation failed");
      }
    },
    button() {
      if (
        this.name !== this.user.name ||
        this.city !== this.user.city ||
        this.cin !== this.user.cin ||
        this.phone !== this.user.phone ||
        this.area !== this.user.area ||
        this.email !== this.user.email ||
        (this.oldPassword !== "" && this.newPassword != "")
      ) {
        this.valid = true;
        return false;
      } else {
        return true;
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
.textwhite {
  color: white !important;
  font-weight: 900 !important;
    font-size: 20px;
}
</style>
