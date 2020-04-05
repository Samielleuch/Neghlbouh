<template>
  <div>
    <v-row>
      <v-col cols="12" sm="6" class="">
        <v-form
          ref="form"
          :class="$vuetify.breakpoint.xs ? '' : 'form '"
          v-model="valid"
        >
          <!-- exit button  -->

          <!---->
          <!-- icon -->
          <!--
          <v-row justify="center">
            <v-col cols="12" align="center">
              <v-img
                src="../assets/logo.png"
                width="400"
                :class="$vuetify.breakpoint.xs ? 'd-none' : ''"
                aspect-ratio="3"
              ></v-img>
            </v-col>
          </v-row>
          -->
          <!---->
          <v-row align="center">
            <v-col
              cols="12"
              align="center"
              :class="$vuetify.breakpoint.xs ? 'mt-5' : 'mt-7'"
            >
              <span class="text-center  font-login-popup2">
                {{ text.popup_text2 }}
              </span>
              <v-alert
                dense
                outlined
                type="error"
                class="mt-10"
                width="80%"
                v-if="error !== ''"
              >
                {{ error }}
              </v-alert>
            </v-col>
          </v-row>
          <v-card-text>
            <v-form v-model="valid" ref="form">
              <!-- Name -->
              <v-row class="mb-0 pb-0" justify="center">
                <v-col cols="10" class="mb-0 pb-0">
                  <v-text-field
                    v-model="name"
                    outlined
                    rounded
                    prepend-inner-icon="fas fa-user"
                    filled
                    clearable
                    :rules="nameRules"
                    :label="text.nameField"
                    required
                    color="black"
                    class="mb-0 pb-0"
                  ></v-text-field>
                </v-col>
              </v-row>
              <!-- City  -->
              <v-row class="mb-0 pb-0" justify="center">
                <v-col cols="10" class="mb-0 pb-0">
                  <v-select
                    v-model="city"
                    outlined
                    rounded
                    prepend-inner-icon="fas fa-thumbtack"
                    filled
                    clearable
                    :label="text.cityField"
                    required
                    color="black"
                    class="mb-0 pb-0"
                    :items="cities"
                  ></v-select>
                </v-col>
              </v-row>
              <!-- Area  -->
              <v-row class="mb-0 pb-0" justify="center">
                <v-col cols="10" class="mb-0 pb-0">
                  <v-select
                    v-model="city"
                    outlined
                    rounded
                    prepend-inner-icon="fas fa-thumbtack"
                    filled
                    clearable
                    :label="text.areaField"
                    required
                    color="black"
                    class="mb-0 pb-0"
                    :items="areas"
                  ></v-select>
                </v-col>
              </v-row>
              <!-- Phone  -->
              <v-row class="mb-0 pb-0" justify="center">
                <v-col cols="10" class="mb-0 pb-0">
                  <v-text-field
                    v-model="phone"
                    outlined
                    rounded
                    prepend-inner-icon="fas fa-phone"
                    type="integer"
                    clearable
                    :rules="phoneRules"
                    :label="text.phoneField"
                    required
                    color="black"
                    class="mb-0 pb-0"
                  ></v-text-field>
                </v-col>
              </v-row>
              <!-- Email  -->
              <v-row class="mb-0 pb-0" justify="center">
                <v-col cols="10" class="mb-0 pb-0">
                  <v-text-field
                    v-model="email"
                    outlined
                    rounded
                    prepend-inner-icon="far fa-envelope"
                    filledv
                    clearable
                    :rules="emailRules"
                    :label="text.emailField"
                    color="black"
                    class="mb-0 pb-0"
                  ></v-text-field>
                </v-col>
              </v-row>
              <!-- CIN  -->
              <v-row class="mb-0 pb-0" justify="center">
                <v-col cols="10" class="mb-0 pb-0">
                  <v-text-field
                    v-model="CIN"
                    outlined
                    rounded
                    prepend-inner-icon="far fa-address-card"
                    filled
                    clearable
                    :rules="cinRules"
                    :label="text.cinField"
                    required
                    color="black"
                    class="mb-0 pb-0"
                  ></v-text-field>
                </v-col>
              </v-row>
              <!-- Password  -->
              <v-row class="mb-0 pb-0" justify="center">
                <v-col cols="10">
                  <v-text-field
                    v-model="password"
                    :append-icon="show1 ? 'fas fa-eye' : 'fas fa-eye-slash'"
                    :type="show1 ? 'text' : 'password'"
                    :label="text.passWordField"
                    rounded
                    outlined
                    prepend-inner-icon="fas fa-lock"
                    clearable
                    filled
                    @click:append="show1 = !show1"
                    required
                    color="black"
                    class="mt-0 pb-0"
                  >
                  </v-text-field>
                </v-col>
              </v-row>
            </v-form>
            <!-- submit Button  -->
            <v-row justify="center">
              <v-col cols="10" align="center">
                <v-hover v-slot:default="{ hover }">
                  <!-- when the button gets hovered hover becomes true so we switch the class -->
                  <v-btn
                    :class="hover ? 'mt--10 glowing-border' : 'mt--10'"
                    :disabled="!valid"
                    color="#df0100"
                    @click="validate"
                    rounded
                    :ripple="{ class: 'red--text' }"
                    height="225%"
                    width="100%"
                    :loading="loading"
                  >
                    <span class="font-login-white">
                      {{ text.submitField }}
                    </span>
                  </v-btn>
                </v-hover>
              </v-col>
            </v-row>
          </v-card-text>
        </v-form>
      </v-col>
      <v-col :class="$vuetify.breakpoint.xs ? 'd-none' : ''" sm="6">
        <v-img
          src="@/assets/SignUpPic.png"
          class="d-flex align-end pb-12 mt-12 side-image"
        >
          <v-row>
            <v-col class="text-center" cols="12">
              <span class="text-photo">{{ text.text_photo }}</span>
            </v-col>
          </v-row>
        </v-img>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import authController from "@/services/AuthenticationService";
export default {
  name: "SignUpForm",
  props: {
    isModal: {
      Boolean,
      default: false
    }
  },
  data() {
    return {
      loading: false,
      error: "",
      password: "",
      CIN: "",
      cinRules: [
        v => !!v || "رقم بطاقة التعريف مطلوب",
        v => (!isNaN(parseFloat(v)) && !isNaN(v - 0)) || "يجب أن يكون رقم",
        v => (v && v.length <= 8) || "يجب أن يتكون من 8 أرقام"
      ],
      name: "",
      nameRules: [
        v => !!v || "الاسم مطلوب",
        v => (v && v.length <= 35) || "يجب أن يكون أقل من 35 حرف"
      ],
      city: "",
      phone: "",
      phoneRules: [
        v => !!v || "رقم الهاتف مطلوب",
        v => (!isNaN(parseFloat(v)) && !isNaN(v - 0)) || "يجب أن يكون رقم",
        v => (v && v.length == 8) || "يجب أن يتكون من 8 أرقام"
      ],
      email: "",
      emailRules: [
        v => !!v || "البريد الالكتروني مطلوب",
        v => /.+@.+\..+/.test(v) || "يجب ان يكون البريد الاكتروني صحيح"
      ],
      valid: false,
      show1: false,
      cities: [
        "أريانة",
        "تونس",
        "صفاقس",
        "باجة",
        "بنزرت",
        "بن عروس",
        "تطاوين",
        "توزر",
        "جندوبة",
        "زغوان",
        "سليانة",
        "سوسة",
        "سيدي بوزيد",
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
      areas: [
        "	ساقية الزيت",
        "ساقية الدائر",
        "	العين",
        "قرمدة",
        "	طينة",
        "	الشيحية",
        "المحرس",
        "	قرقنة",
        "	الصخيرة",
        "عقارب",
        "	الحنشة",
        "جبنيانة",
        "بئر علي",
        "الغريبة",
        "	العامرة",
        "العوابد - الخزانات",
        "الناظور - سيدي علي بن عابد",
        "الحاجب",
        "حزق - اللوزة",
        "الأعشاش",
        "النصر"
      ]
    };
  },
  computed: {
    ...mapState(["langPack"]),
    text() {
      return this.langPack.Sign_Up;
    }
  },
  methods: {
    ...mapActions(["pressLogin"]),
    async validate() {
      this.$refs.form.validate();
      if (this.valid) {
        this.loading = true;
        try {
          let resp = await authController.register({
            name: this.name,
            cin: this.CIN,
            email: this.email,
            city: this.city,
            phone: this.phone,
            password: this.password
          });
          this.loading = false;
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
    }
  }
};
</script>

<style scoped>
.form {
  /* This form has been down-scaled and the z-index is made 1
   with position relative so it doesn't collide with the nav bar */
  position: relative;
  z-index: 1 !important;
}
body * {
  font-family: Cairo;
}
.mt--5 {
  margin-top: -25px;
}
.mt--10 {
  margin-top: -50px !important;
}
.font-login {
  font-size: 2rem !important;
}
.font-login-popup2 {
  font-size: 1.4rem !important;
  background-color: rgba(255, 255, 255, 0);
  color: #616161;
}
.font-login-white {
  font-size: 1.5rem !important;
  background-color: rgba(255, 255, 255, 0);
  color: #ffffff;
}
.font-login-pass {
  font-size: 1rem !important;
  background-color: rgba(255, 255, 255, 0);
  color: #c70100;
}

.glowing-border {
  box-shadow: 0px 0 10px 1px #df0100, /* inner white */ 0px 0 10px 1px #770000,
    /* middle magenta */ 0 0 10px 1px #6b2028 !important ;
}
.side-image {
  height: 90vh;
  width: 70vw;
  padding-bottom: 120px !important;
}
.text-photo {
  font-size: 45px;
  color: white;
}
</style>
