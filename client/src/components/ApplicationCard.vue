<template>
  <v-hover v-slot:default="{ hover }">
    <v-card :elevation="hover ? 16 : 2" class="mx-auto cardc" dir="rtl">
      <div align="center">
        <v-avatar class="avatar" size="80">
          <img alt="" src="../assets/appcard.png" />
        </v-avatar>
        <h4 class="font">خرجاتي</h4>
      </div>
      <v-row>
        <v-col align="center">
          <span v-if="Demandes.length == 0"> ليس لديك طلبات </span>
        </v-col>
      </v-row>
      <div>
        <v-row dense justify="center" align="center">
          <v-col
            :key="i"
            cols="12"
            v-for="(item, i) in applications"
            justify="center"
            align="center"
          >
            <v-card class="appcard pb-0 ">
              <v-row justify="center" align="center">
                <v-col
                  cols="12"
                  md="3"
                  justify="center"
                  align-self="center"
                  class="pb-0 mb-0"
                >
                  <div class="mb-0 font">
                    <span> سبب الخروج : {{ item.reason }} </span>
                  </div>
                  <v-divider inset vertical></v-divider>
                </v-col>
                <v-col
                  cols="12"
                  md="3"
                  justify="center"
                  align="center"
                  class="pb-0 mb-0"
                >
                  <div class="mb-0 font">
                    وقت العودة : {{ item.tempsRetour }}
                  </div>
                  <v-divider inset vertical></v-divider>
                </v-col>
                <v-col
                  cols="12"
                  md="3"
                  justify="center"
                  align="center"
                  class="pb-0 mb-0"
                >
                  <div class="mb-0 font">الوجهة : {{ item.where }}</div>
                  <v-divider inset vertical></v-divider>
                </v-col>
                <v-col
                  justify="center"
                  align="center"
                  class="pb-0 mb-0"
                  cols="12"
                  md="3"
                >
                  <div class="mb-0 font">
                    <v-alert
                      dense
                      type="success"
                      v-if="item.state == 1"
                      width="70%"
                    >
                      خطر ضعيف
                    </v-alert>
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
        <v-row class="py-5">
          <v-col align="center">
            <div class="text-center">
              <v-btn
                :to="{ name: 'AllApplicationsPage' }"
                class="title "
                color="#D41B45"
                dark
                large
                height="28px"
                rounded
                v-if="Demandes.length !== 0"
              >
                المزيد
              </v-btn>
            </div>
          </v-col>
          <v-col align="center">
            <v-btn
              :to="{ name: 'FormPage' }"
              class="title "
              color="#D41B45"
              dark
              large
              height="28px"
              rounded
            >
              طلب جديد
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </v-card>
  </v-hover>
</template>
<script>
import DemandesService from "@/services/DemandesService";
export default {
  name: "ApplicationCard",
  data: () => ({
    Demandes: [],
    applications: []
  }),
  created() {
    DemandesService.getDemandes(this.$store.state.currentUser)
      .then(resp => {
        console.log(resp.data.status);
        this.Demandes = resp.data.status;
        this.applications = this.Demandes;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
<style scoped>
.cardc {
  width: 85%;
}

.appcard {
  width: 90%;
}
.font {
  font-size: 1.2em;
  font-weight: bold;
  font-family: Cairo;
}
</style>
