<template>
  <div>
    <div v-if="this.tokenValid == true">
      <v-form ref="form" v-model="valid">
        <!-- icon -->
        <v-row justify="center">
          <v-col align="center" cols="12">
            <v-img
              aspect-ratio="3"
              src="../assets/logo.png"
              width="400"
            ></v-img>
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
            <!-- New Password  -->
            <v-row class="mt--5">
              <v-col cols="12">
                <v-text-field
                  :append-icon="show1 ? 'fas fa-eye' : 'fas fa-eye-slash'"
                  :label="text.newPasswordField"
                  :type="show1 ? 'text' : 'password'"
                  @click:append="show1 = !show1"
                  class="mt-0 pb-0"
                  clearable
                  color="black"
                  filled
                  outlined
                  prepend-inner-icon="fas fa-lock"
                  required
                  rounded
                  name="password"
                  v-model="newPassword"
                >
                </v-text-field>
              </v-col>
            </v-row>
            <!-- COnfirm new Password  -->
            <v-row class="mt--5">
              <v-col cols="12">
                <v-text-field
                  :append-icon="show1 ? 'fas fa-eye' : 'fas fa-eye-slash'"
                  :label="text.confirmNewPasswordField"
                  :type="show1 ? 'text' : 'password'"
                  @click:append="show1 = !show1"
                  :rules="[passwordConfirmationRule]"
                  class="mt-0 pb-0"
                  clearable
                  color="black"
                  filled
                  outlined
                  prepend-inner-icon="fas fa-lock"
                  required
                  rounded
                  name="password_confirmation"
                  v-model="confirmNewPassword"
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
        </v-card-text>
      </v-form>
    </div>
    <div v-else>
      <v-alert prominent type="error" class="mt-12">
        <v-row align="center">
          <v-col class="grow">{{ error }}</v-col>
        </v-row>
      </v-alert>
    </div>
  </div>
</template>

<script>
import authController from "@/services/AuthenticationService";
import { mapState } from "vuex";

export default {
  name: "ResetForm",
  data() {
    return {
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: "",
      tokenValid: true,
      valid: false,
      show1: false,
      error: ""
    };
  },
  // verifyToken must be implemented
  created() {
    authController.verifyToken(this.$route.params.auth).then(resp => {
      console.log(resp);
    });
  },
  computed: {
    ...mapState(["langPack"]),
    text() {
      return this.langPack.Reset;
    },
    passwordConfirmationRule() {
      return () =>
        this.newPassword === this.confirmNewPassword ||
        "يجب أن تكون كلمة السر مطابقة";
    }
  },
  methods: {
    async validate() {
      this.$refs.form.validate();
      if (this.valid) {
        this.loading = true;
        try {
          let resp = await authController.reset({
            token: this.$route.params.token,
            userId: this.$route.params.id,
            //cin: this.$store.state.currentUser.cin,
            password: this.newPassword
          });
          console.log(resp);
          if (this.$route.name !== "SignIn") {
            this.$router.replace({ name: "SignIn" });
          }
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
