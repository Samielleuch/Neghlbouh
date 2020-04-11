<template>
  <v-hover open-delay="200" v-slot:default="{ hover }">
    <v-card
      :elevation="hover ? 16 : 2"
      class="mx-auto cardc"
      dir="rtl"
      width="1300"
    >
      <div align="center">
        <v-avatar class="avatar" size="50">
          <img alt="" src="../assets/appcard.png" />
        </v-avatar>
        <h4>خرجاتي</h4>
      </div>
      <div v-if="Demandes.length == 0">you don't have any request</div>
      <div>
        <v-row dense justify="center" align="center">
          <v-col
            :key="i"
            cols="12"
            v-for="(item, i) in applications"
            justify="center"
            align="center"
          >
            <v-card class="appcard">
              <div class="d-flex flex-no-wrap">
                <div class="row">
                  <v-col cols="5">
                    <div class="app font" style="margin-top: 1px">
                      سبب الخروج : {{ item.reason }}
                    </div>
                  </v-col>
                  <v-divider inset vertical></v-divider>
                  <div class="app font" style="margin-top: 10px">
                    وقت العودة : {{ item.tempsRetour }}
                  </div>
                  <v-divider
                    inset
                    style="margin-right: 80px"
                    vertical
                  ></v-divider>
                  <div class="app font" style="margin-top: 10px; width: 280px">
                    الوجهة : {{ item.where }}
                  </div>
                  <div class="app1 font">
                    <v-alert
                      dense
                      text
                      type="success"
                      v-if="item.state == 1"
                      width="170px"
                    >
                      الخطر :{{ item.score }}
                    </v-alert>
                    <v-alert
                      dense
                      text
                      type="warning"
                      v-else-if="item.state == 'Super'"
                      width="170px"
                    >
                      الخطر :{{ item.score }}
                    </v-alert>
                    <v-alert dense outlined type="error" v-else width="170px">
                      الخطر :{{ item.score }}
                    </v-alert>
                  </div>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <div class="text-center">
              <v-btn
                :to="{ name: 'AllApplicationsPage' }"
                class="title "
                color="#D41B45"
                dark
                height="28px"
                rounded
                v-if="Demandes.length !== 0"
              >
                المزيد
              </v-btn>
            </div>
          </v-col>
          <v-col>
            <div class="text-center">
              <v-btn
                :to="{ name: 'FormPage' }"
                class="title "
                color="#D41B45"
                dark
                height="28px"
                rounded
              >
                طلب جديد
              </v-btn>
            </div>
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
  height: 250px;
}

.appcard {
  height: 40px;
}

.avatar {
  margin-top: 2px;
}

.app {
  padding-right: 15px;
}

.app1 {
  margin-right: 30px;
}

.font {
  font-family: Cairo;
}
</style>
