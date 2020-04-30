<template>
  <div>
    <v-row justify="center">
      <v-col cols="12" md="7" sm="11">
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
              <!-- Email  -->
              <v-row class="mb-5 pb-0" justify="center">
                <v-col class="mb-0 pb-0" cols="12">
                  <v-text-field
                    :label="text.emailField"
                    :rules="emailRules"
                    class="mb-0 pb-0"
                    clearable
                    color="black"
                    filledv
                    outlined
                    prepend-inner-icon="far fa-envelope"
                    rounded
                    v-model="email"
                  ></v-text-field>
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
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import authController from "@/services/AuthenticationService";

export default {
  name: "Reset",
  components: {},
  data() {
    return {
      email: "",
      valid: false,
      show1: false,
      error: "",
      emailRules: [
        v => !!v || "البريد الالكتروني مطلوب",
        v => /.+@.+\..+/.test(v) || "يجب ان يكون البريد الاكتروني صحيح"
      ]
    };
  },
  computed: {
    ...mapState(["langPack"]),
    text() {
      return this.langPack.ResetEmail;
    }
  },
  methods: {
    ...mapActions(["pressLogin", "loginUser"]),
    async validate() {
      this.$refs.form.validate();
      if (this.valid) {
        this.loading = true;
        try {
          let resp = await authController.sendResetMail({
            email: this.email
          });

          this.pressLogin(false);
          if (this.$route.name !== "Home") {
            this.$router.replace({ name: "Home" });
          }
          this.loginUser(resp.data);
          this.loading = false;
        } catch (e) {
          this.loading = false;

          this.error = e.response.data;
        }
      } else {
        //to implement notification v-if here
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
