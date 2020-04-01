<template>
  <div>
    <!-- exit button  -->
    <v-row v-if="isModal">
      <v-spacer></v-spacer>
      <v-btn icon @click="pressLogin(false)" class=" mt-2 mr-5">
        <v-icon>far fa-times-circle</v-icon>
      </v-btn>
    </v-row>
    <!---->
    <v-row>
      <v-col cols="12" align="center">
        <span class="text-center font-login">
          {{ text.popup_text1 }}
        </span>
      </v-col>
    </v-row>
    <!-- icon -->
    <v-row justify="center">
      <v-col cols="12" align="center">
        <v-img src="../assets/logo.png" width="400" aspect-ratio="3"></v-img>
      </v-col>
    </v-row>
    <!---->
    <v-row align="center">
      <v-col cols="12" align="center">
        <span class="text-center  font-login-popup2 ">
          {{ text.popup_text2 }}
        </span>
      </v-col>
    </v-row>
    <v-card-text>
      <v-form v-model="valid" ref="form">
        <!-- Name -->
        <v-row class="mb-0 pb-0">
          <v-col cols="12" class="mb-0 pb-0">
            <v-text-field
              v-model="name"
              outlined
              rounded
              prepend-inner-icon="fas fa-user"
              filled
              clearable
              :label="text.nameField"
              required
              color="black"
              class="mb-0 pb-0"
            ></v-text-field>
          </v-col>
        </v-row>
        <!-- City  -->
        <v-row class="mb-0 pb-0">
          <v-col cols="12" class="mb-0 pb-0">
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
        <!-- Phone  -->
        <v-row class="mb-0 pb-0">
          <v-col cols="12" class="mb-0 pb-0">
            <v-text-field
              v-model="phone"
              outlined
              rounded
              prepend-inner-icon="fas fa-phone"
              type="integer"
              clearable
              :label="text.phoneField"
              required
              color="black"
              class="mb-0 pb-0"
            ></v-text-field>
          </v-col>
        </v-row>
        <!-- Email  -->
        <v-row class="mb-0 pb-0">
          <v-col cols="12" class="mb-0 pb-0">
            <v-text-field
              v-model="email"
              outlined
              rounded
              prepend-inner-icon="far fa-envelope"
              filled
              clearable
              :label="text.emailField"
              color="black"
              class="mb-0 pb-0"
            ></v-text-field>
          </v-col>
        </v-row>
        <!-- CIN  -->
        <v-row class="mb-0 pb-0">
          <v-col cols="12" class="mb-0 pb-0">
            <v-text-field
              v-model="CIN"
              outlined
              rounded
              prepend-inner-icon="far fa-address-card"
              filled
              clearable
              :label="text.cinField"
              required
              color="black"
              class="mb-0 pb-0"
            ></v-text-field>
          </v-col>
        </v-row>
        <!-- Password  -->
        <v-row class="mb-0 pb-0">
          <v-col cols="12">
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
      <v-row>
        <v-col cols="12" align="center">
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
            >
              <span class="font-login-white">
                {{ text.submitField }}
              </span>
            </v-btn>
          </v-hover>
        </v-col>
      </v-row>
    </v-card-text>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
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
      password: "",
      CIN: "",
      name:"",
      city:"",
      phone:"",
      email:"",
      valid: false,
      show1: false,
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
    validate() {
      this.valide = true;
    }
  }
};
</script>

<style scoped>
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
</style>
