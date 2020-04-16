<template>
  <div>
    <v-form ref="form" v-model="valid">
      <!-- exit button  -->
      <v-row v-if="isModal">
        <v-spacer></v-spacer>
        <v-btn @click="pressLogin(false)" class=" mt-2 ml-5" icon>
          <v-icon>far fa-times-circle</v-icon>
        </v-btn>
      </v-row>
      <!---->
      <v-row>
        <v-col align="center" cols="12">
          <span class="text-center font-login  ">
            {{ text.popup_text1 }}
          </span>
        </v-col>
      </v-row>
      <!-- icon -->
      <v-row justify="center">
        <v-col align="center" cols="12">
          <v-img aspect-ratio="3" src="../assets/logo.png" width="400"></v-img>
        </v-col>
      </v-row>
      <!---->
      <v-row align="center">
        <v-col align="center" cols="12">
          <span class="text-center  font-login-popup2 ">
            {{ text.popup_text2 }}
          </span>
          <v-alert
            class="mt-10"
            dense
            outlined
            type="error"
            v-if="error !== ''"
            width="80%"
          >
            {{ error }}
          </v-alert>
        </v-col>
      </v-row>
      <v-card-text>
        <v-form ref="form" v-model="valid">
          <!-- CIN  -->
          <v-row class="mb-0 pb-0">
            <v-col class="mb-0 pb-0" cols="12">
              <v-text-field
                :label="text.cinField"
                class="mb-5 pb-0"
                clearable
                :rules="notEmpty"
                color="black"
                filled
                outlined
                prepend-inner-icon="far fa-address-card"
                required
                rounded
                v-model="CIN"
              ></v-text-field>
            </v-col>
          </v-row>
          <!-- Password  -->
          <v-row class="mt--5">
            <v-col cols="12">
              <v-text-field
                :append-icon="show1 ? 'fas fa-eye' : 'fas fa-eye-slash'"
                :label="text.passWordField"
                :type="show1 ? 'text' : 'password'"
                @click:append="show1 = !show1"
                class="mt-0 pb-0 mb-5"
                clearable
                :rules="notEmpty"
                color="black"
                filled
                outlined
                prepend-inner-icon="fas fa-lock"
                required
                rounded
                v-model="password"
              >
              </v-text-field>
            </v-col>
          </v-row>
        </v-form>
        <!-- submit Button  -->
        <v-row>
          <v-col align="center" cols="12">
            <v-hover v-slot:default="{ hover }">
              <!-- when the button gets hovered hover becomes true so we switch the class -->
              <v-btn
                :class="hover ? 'mt--10 glowing-border' : 'mt--10'"
                :disabled="!valid"
                :ripple="{ class: 'red--text' }"
                @click="validate"
                color="#df0100"
                height="225%"
                rounded
                width="100%"
              >
                <span class="font-login-white">
                  {{ text.submitField }}
                </span>
              </v-btn>
            </v-hover>
          </v-col>
        </v-row>
        <!-- Create Account section -->
        <v-row justify="center">
          <v-col align="center" cols="9">
            <em>
              {{ text.noAcc }}
            </em>
            <a class=" font-weight-bold font-login-pass" href="#">
              {{ text.makeAccount }}
            </a>
          </v-col>
        </v-row>
        <!-- Forgot Password section -->
        <v-row justify="center">
          <v-col align="center" cols="9">
            <router-link to="/Reset">
              <a
                class=" font-weight-bold font-login-pass"
                href="#"
                @click="removeModal"
              >
                {{ text.noPass }}
              </a>
            </router-link>
          </v-col>
        </v-row>
      </v-card-text>
    </v-form>
  </div>
</template>

<script>
import authController from "@/services/AuthenticationService";
import { mapActions, mapState } from "vuex";

export default {
  name: "SignInForm",
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
      valid: false,
      show1: false,
      error: "",
      notEmpty: [v => !!v || " مطلوب"]
    };
  },
  computed: {
    ...mapState(["langPack"]),
    text() {
      return this.langPack.Sign_In;
    }
  },
  methods: {
    ...mapActions(["pressLogin", "loginUser"]),
    async validate() {
      this.$refs.form.validate();
      if (this.valid) {
        this.loading = true;
        try {
          let resp = await authController.signIn({
            cin: this.CIN,
            password: this.password
          });
          console.log(resp);
          this.pressLogin(false);
          if (this.$route.name !== "Home") {
            this.$router.replace({ name: "Home" });
          }
          this.loginUser(resp.data);
          this.loading = false;
        } catch (e) {
          this.loading = false;
          console.log(e.response.data.err);
          this.error = e.response.data;
        }
      } else {
        //to implement notification v-if here
        console.log("validation failed");
      }
    },
    removeModal() {
      alert("here");
      this.pressLogin(false);
    }
  }
};
</script>

<style scoped>
.mt--5 {
  margin-top: -25px;
}

>>> .mt--10 {
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

>>> .glowing-border {
  box-shadow: 0px 0 10px 1px #df0100, /* inner white */ 0px 0 10px 1px #770000,
    /* middle magenta */ 0 0 10px 1px #6b2028 !important;
}
</style>
