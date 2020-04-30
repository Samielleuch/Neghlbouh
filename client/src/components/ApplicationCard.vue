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
          <span v-if="loaded && Demandes.length == 0"> ليس لديك طلبات </span>
        </v-col>
      </v-row>
      <v-row v-if="!loaded">
        <v-col align="center">
          <v-row>
            <v-col>
              <v-progress-circular :width="3" color="red" indeterminate>
              </v-progress-circular>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <span class="font" color="red">
                لحظة برك
              </span>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <div>
        <v-row align="center" dense justify="center">
          <v-col
            :key="i"
            align="center"
            cols="12"
            justify="center"
            v-for="(item, i) in applications"
          >
            <v-card class="appcard pb-0 ">
              <v-row align="center" justify="center">
                <v-col
                  align-self="center"
                  class="pb-0 mb-0"
                  cols="12"
                  justify="center"
                  md="3"
                >
                  <div class="mb-0 font">
                    <span> سبب الخروج : {{ item.reason }} </span>
                  </div>
                  <v-divider inset vertical></v-divider>
                </v-col>
                <v-col
                  align="center"
                  class="pb-0 mb-0"
                  cols="12"
                  justify="center"
                  md="3"
                >
                  <div class="mb-0 font">
                    وقت العودة : {{ item.tempsRetour }}
                  </div>
                  <v-divider inset vertical></v-divider>
                </v-col>
                <v-col
                  align="center"
                  class="pb-0 mb-0"
                  cols="12"
                  justify="center"
                  md="3"
                >
                  <div class="mb-0 font">الوجهة : {{ item.zone }}</div>
                  <v-divider inset vertical></v-divider>
                </v-col>
                <!-- buttons Cancel -->
                <v-col
                  align="center"
                  class="pb-0 mb-0"
                  cols="12"
                  justify="center"
                  md="3"
                >
                  <v-row align="center" justify="center">
                    <v-col
                      :md="item.state === 1 ? 5 : 5"
                      align="center"
                      class="pb-0 mb-0"
                      cols="12"
                      justify="center"
                    >
                      <div class="mb-0 font">
                        <v-alert
                          :color="getColorState(item.state)"
                          width="90%"
                          dense
                          outlined
                        >
                          {{ states[item.state] }}
                        </v-alert>
                      </div>
                    </v-col>
                    <v-col
                      align="center"
                      class="pb-0 mb-0"
                      cols="12"
                      justify="center"
                      md="5"
                    >
                      <div v-if="item.state === 1">
                        <v-btn
                          class="mb-5  "
                          color="error"
                          fab
                          icon
                          @click="cancelDemande(item._id)"
                          :loading="trashLoading"
                        >
                          <v-icon>fas fa-trash-alt</v-icon>
                        </v-btn>
                      </div>
                      <div v-else>
                        <v-spacer></v-spacer>
                      </div>
                    </v-col>
                  </v-row>
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
                height="28px"
                large
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
              height="28px"
              large
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
    applications: [],
    states: ["إكتمل", "جاري", "ملغى"],
    loaded: false,
    trashLoading: false
  }),
  created() {
    DemandesService.getDemandes({ demandTotal: 3 })
      .then(resp => {
        this.loaded = true;
        this.Demandes = resp.data.status;
        this.applications = this.Demandes;
      })
      .catch(err => {
      });
  },
  methods: {
    getColorState(itemState) {
      if (itemState === 0) {
        return "teal";
      } else if (itemState === 1) {
        return "orange";
      } else {
        return "red";
      }
    },
    cancelDemande(_id) {
      this.trashLoading = true;
      DemandesService.cancelDemande({
        id: _id,
        state: 2
      }).then(() => {
        this.trashLoading = false;
        this.$router.go();
      });
    }
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
