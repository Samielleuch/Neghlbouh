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
          <v-row>
            <div class="col-md-4">
              <v-label><h3>وقت العودة</h3></v-label>
            </div>
            <div class="col-md-6 ">
              <v-time-picker
                @click:hour="HandleHours"
                color="#d41b45"
                v-model="tempsRetour"
                width="250px"
                format="24hr"
                :allowed-hours="getAllowedHours"
                :allowed-minutes="getAllowedMinutes"
              ></v-time-picker>
            </div>
          </v-row>
          <v-label><h3>الوجهة</h3></v-label>
          <v-select
            :items="items"
            :rules="[v => !!v || 'الرجاء اختيار الوجهة']"
            class="txt"
            color="#d41b45"
            required
            v-model="zone"
          ></v-select>

          <div class="text-center">
            <v-btn
              @click="verify"
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
            <v-row align="center" justify="center">
              <v-col align-self="center" cols="3" justify="center">
                <v-alert dense text type="success" v-if="state == 'Supermodel'">
                  الخطر ضعيف
                </v-alert>
              </v-col>
            </v-row>

            <div class="text-center">
              <v-btn
                @click="accept"
                class="title ml-3"
                color="#D41B45"
                dark
                height="50px"
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
                height="50px"
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
import { mapActions } from "vuex";

export default {
  name: "FormPage",
  props: {
    isClicked: {
      Boolean,
      default: false
    }
  },
  data: () => ({
    valid: false,
    reason: "",
    isMinutesAllowed: true,
    zone: "",
    tempsRetour: "",
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
  computed: {
    getAllowedMinutes() {
      let allowed = [];
      console.log(this.tempsRetour);
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
        console.log(time);
        if (time[0] == currH && time[1] <= currM) return true;
        return false;
      }
    }
  },
  methods: {
    ...mapActions(["addDemande"]),
    async verify() {
      if (!this.isClicked) {
        this.isClicked = true;
      } else {
        this.isClicked = false;
      }

      try {
        let resp = await DemandesService.addDemandes({
          cin: this.$store.state.currentUser.cin,
          zone: this.zone,
          where: "sfax",
          tempsRetour: this.tempsRetour,
          reason: this.reason
        });
        console.log(resp);
        this.addDemande(resp.data.status);
        this.score = resp.data.status.score;
      } catch (e) {
        console.log(e.response.data);
      }
    },
    accept() {
      this.$router.replace({ name: "UserDashboard" });
    },
    async reject() {
      try {
        let resp = await DemandesService.deleteDemande();
        console.log(resp);
      } catch (e) {
        console.log(e.response.data);
      }
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
