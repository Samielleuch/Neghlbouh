<template>
  <div class="background">
    <div class="background">
      <v-row align="center" class="pt-12" dense justify="center">
        <v-row align="center" justify="center" v-if="!loaded">
          <v-col align="center" justify="center">
            <v-row>
              <v-col>
                <v-progress-circular
                  :width="5"
                  color="black"
                  indeterminate
                  size="50"
                >
                </v-progress-circular>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <span class="font">
                  لحظة برك
                </span>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
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
                <div class="mb-0 font">وقت العودة : {{ item.tempsRetour }}</div>
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
    </div>
  </div>
</template>
<script>
import DemandesService from "@/services/DemandesService";

export default {
  name: "AllApplicationsPage",
  data: () => ({
    applications: [],
    states: ["إكتمل", "جاري", "ملغى"],
    loaded: false,
    trashLoading: false
  }),
  created() {
    DemandesService.getDemandes(this.$store.state.currentUser)
      .then(resp => {
        this.loaded = true;
        this.applications = resp.data.status;
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
<style>
.background {
  background-color: #e5dddd;
  height: 100%;
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
