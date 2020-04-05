<template dir="rtl">
  <div class="background">
    <v-hover open-delay="200" v-slot:default="{ hover }">
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
            <div class="col-md-5" style="margin-right: 30px">
              <v-time-picker
                color="#d41b45"
                width="180px"
                v-model="tempsRetour"
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
              class="title "
              color="#D41B45"
              dark
              height="30px"
              rounded
              width="100px"
            >
              تقييم
            </v-btn>
          </div>
          <div style="margin-top: 5px" v-if="isClicked">
            <div class="app1">
              <v-alert
                dense
                height="70px"
                text
                type="success"
                v-if="state == 'Supermodel'"
                width="200px"
              >
                الخطر :{{ score }}
              </v-alert>
              <v-alert
                dense
                text
                type="warning"
                v-else-if="state == 'Super'"
                width="170px"
              >
                الخطر :{{ score }}
              </v-alert>
              <v-alert dense outlined type="error" v-else width="170px">
                الخطر :{{ score }}
              </v-alert>
            </div>
            <div class="text-center">
              <v-btn
                @click="accept"
                class="title"
                color="#D41B45"
                dark
                height="50px"
                rounded
                style="margin-top: 80px;margin-left: 15px"
                width="120px"
              >
                تثبيت الخروج
              </v-btn>
              <v-btn
                @click="reject"
                class="title"
                color="#D41B45"
                dark
                height="50px"
                rounded
                style="margin-top: 80px;margin-left: 15px"
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
    valid: true,

    state: "Supermodel",
    score: "75%",
    reason: "",
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
