<template dir="rtl">
  <div class="background">
    <v-hover v-slot:default="{ hover }">
      <v-card
        :elevation="hover ? 16 : 2"
        class="mx-auto"
        dir="rtl"
        height="840"
        width="900"
      >
        <v-form class="form" ref="form">
          <v-label><h3>سبب الخروج</h3></v-label>
          <v-text-field
            :counter="10"
            :rules="reasonRules"
            color="#d41b45"
            required
            v-model="reason"
          ></v-text-field>
          <div class="col-md-4 ">
            <v-label><h3>وقت العودة</h3></v-label>
          </div>
          <v-row justify="center" align="center">
            <v-col md="6" align="center" justify="center">
              <v-time-picker
                @click:hour="HandleHours"
                color="#d41b45"
                v-model="tempsRetour"
                width="250px"
                format="24hr"
                :allowed-hours="getAllowedHours"
                :allowed-minutes="getAllowedMinutes"
              ></v-time-picker>
            </v-col>
          </v-row>
          <v-label><h3>الوجهة</h3></v-label>
          <v-select
            :items="areaCal"
            :rules="[v => !!v || 'الرجاء اختيار الوجهة']"
            class="txt"
            color="#d41b45"
            required
            v-model="zone"
          ></v-select>

          <div class="text-center">
            <v-btn
              @click="isClicked = !isClicked"
              :class="
                hover && !fieldControl ? 'mt--10 glowing-border' : 'mt--10'
              "
              :ripple="{ class: 'red--text' }"
              class="title "
              :disabled="fieldControl"
              color="#D41B45"
              height="30px"
              rounded
              width="100px"
            >
              <span class="fontwhite">
                تقييم
              </span>
            </v-btn>
          </div>
          <div class="mt-5" v-if="isClicked">
            <v-row align="center" justify="center">
              <v-col align-self="center" cols="4" justify="center">
                <v-alert
                  border="left"
                  color="red"
                  colored-border
                  elevation="2"
                  icon="fas fa-lungs-virus"
                >
                  عدد المصابين : 5
                </v-alert>
              </v-col>
              <v-col align-self="center" cols="4" justify="center">
                <v-alert
                  border="left"
                  color="red"
                  colored-border
                  elevation="2"
                  icon="fas fa-head-side-mask"
                >
                  عدد المواطنين 16
                </v-alert>
              </v-col>
              <v-col align-self="center" cols="4" justify="center">
                <v-alert
                  border="left"
                  color="red"
                  colored-border
                  elevation="2"
                  icon="fas fa-house-user"
                >
                  عدد حاملي سوار الحماية: 0
                </v-alert>
              </v-col>
            </v-row>
            <v-row
              align="center"
              justify="center"
              v-if="error !== ''"
              class="my-0 py-0"
            >
              <v-col align="center" cols="5" justify="center" class="my-0 py-0">
                <v-alert dense text type="error" class="my-0 py-2">
                  {{ error }}
                </v-alert>
              </v-col>
            </v-row>

            <div class="text-center pt-5">
              <v-btn
                @click="verify"
                class="title ml-3"
                color="#D41B45"
                dark
                height="40px"
                rounded
                width="120px"
              >
                تثبيت الخروج
              </v-btn>
              <v-btn
                @click="reject"
                class="title mr-3"
                color="#D41B45"
                dark
                height="40px"
                rounded
                width="120px"
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
import DemandesService from "@/services/DemandesService";
import data from "../store/data.json";

export default {
  name: "FormPage",
  data() {
    return {
      user: this.$store.state.currentUser,
      valid: false,
      error: "",
      reason: "",
      isClicked: false,
      isMinutesAllowed: true,
      zone: "",
      tempsRetour: "",
      reasonRules: [v => !!v || "الرجاء ادخال سبب الخروج"],
      select: null
    };
  },
  computed: {
    areaCal() {
      if (!this.user) {
        return data.allAreas;
      } else {
        return data.areas[this.user.city];
      }
    },
    getAllowedMinutes() {
      let allowed = [];
      if (this.isMinutesAllowed) {
        allowed = [];
        for (let i = 0; i < 60; i += 5) {
          allowed.push(i);
        }
      } else {
        let mins = new Date().getMinutes();
        for (let i = 0; i < 60; i += 5) {
          if (i >= mins) {
            mins = i;
            break;
          }
        }
        allowed = [];
        for (let i = mins; i < 60; i += 5) {
          allowed.push(i);
        }
      }
      return allowed;
    },
    fieldControl() {
      if (this.tempsRetour === "" || this.zone === "" || this.reason === "") {
        return true;
      } else {
        let currH = new Date().getHours();
        let currM = new Date().getMinutes();
        let time = this.tempsRetour.split(":");
        if (time[0] == currH && time[1] <= currM) return true;
        return false;
      }
    }
  },
  methods: {
    async verify() {
      try {
        await DemandesService.addDemandes({
          cin: this.$store.state.currentUser.cin,
          zone: this.zone,
          where: "sfax",
          tempsRetour: this.tempsRetour,
          reason: this.reason
        }).then(() => {
          this.$router.replace({ name: "UserDashboard" });
        });
      } catch (e) {
        this.error = e.response.data.err;
      }
    },
    reject() {
      this.$router.replace({ name: "UserDashboard" });
    },
    getAllowedHours: v => v >= new Date().getHours(),
    HandleHours(payload) {
      let date = new Date().getHours();
      if (payload.toString() == date) {
        this.isMinutesAllowed = false;
      } else {
        this.isMinutesAllowed = true;
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
.fontwhite {
  color: white !important;
}

h3 {
  color: #d41b45;
}
>>> .glowing-border {
  box-shadow: 0px 0 10px 1px #df0100, /* inner white */ 0px 0 10px 1px #770000,
    /* middle magenta */ 0 0 10px 1px #6b2028 !important;
}
</style>
