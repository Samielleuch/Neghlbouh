<template>
  <div class="background">
    <div class="app page">
      <v-row dense>
        <v-col :key="i" cols="12" v-for="(item, i) in applications">
          <v-card class="appcard">
            <div class="d-flex flex-no-wrap">
              <div class="row">
                <v-col cols="5">
                  <div class="app font" style="margin-top: 1px">
                    سبب الخروج : {{ item.destination }}
                  </div>
                </v-col>
                <v-divider inset vertical></v-divider>
                <div class="app font" style="margin-top: 10px">
                  وقت العودة : {{ item.time }}
                </div>
                <v-divider
                  inset
                  style="margin-right: 80px"
                  vertical
                ></v-divider>
                <div class="app font" style="margin-top: 10px; width: 280px">
                  الوجهة : {{ item.state }}
                </div>
                <div class="app1 font">
                  <v-alert
                    dense
                    text
                    type="success"
                    v-if="item.state == 'Supermodel'"
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
    </div>
  </div>
</template>
<script>
export default {
  name: "AllApplicationsPage",
  data: () => ({
    applications: [
      {
        destination: "Supermodel",
        time: "15:00",
        state: "Supermodel",
        score: "75%"
      },
      {
        destination: "Super",
        time: "15:00",
        state: "Super",
        score: "50%"
      },
      {
        destination: "Supermodel",
        time: "15:00",
        state: "Seeyou",
        score: "90%"
      }
    ]
  })
};
</script>
<style>
.appcard {
  height: 100px;
  width: 1000px;
  margin-bottom: 30px;
}

.background {
  background-color: #e5dddd;
}

.page {
  margin-top: 17px;
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
