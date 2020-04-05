<template>
  <v-hover v-slot:default="{ hover }" open-delay="200">
    <v-card
      dir="rtl"
      class="mx-auto cardc"
      width="1300"
      :elevation="hover ? 16 : 2"
    >
      <div align="center">
        <v-avatar size="50" class="avatar">
          <img src="../assets/appcard.png" alt="" />
        </v-avatar>
        <h4>خرجاتي</h4>
      </div>
      <div v-if="applications.length == 0">you don't have any request</div>
      <div v-else>
        <v-row dense>
          <v-col v-for="(item, i) in applications" :key="i" cols="12">
            <v-card class="appcard">
              <div class="d-flex flex-no-wrap">
                <div class="row">
                  <v-col cols="5">
                    <div class="app font" style="margin-top: 1px">
                      سبب الخروج : {{ item.destination }}
                    </div>
                  </v-col>
                  <v-divider vertical inset></v-divider>
                  <div class="app font" style="margin-top: 10px">
                    وقت العودة : {{ item.time }}
                  </div>
                  <v-divider
                    vertical
                    inset
                    style="margin-right: 80px"
                  ></v-divider>
                  <div class="app font" style="margin-top: 10px; width: 280px">
                    الوجهة : {{ item.state }}
                  </div>
                  <div class="app1 font">
                    <v-alert
                      v-if="item.state == 'Supermodel'"
                      dense
                      text
                      width="170px"
                      type="success"
                    >
                      الخطر :{{ item.score }}</v-alert
                    >
                    <v-alert
                      v-else-if="item.state == 'Super'"
                      dense
                      text
                      width="170px"
                      type="warning"
                    >
                      الخطر :{{ item.score }}</v-alert
                    >
                    <v-alert v-else dense outlined type="error" width="170px">
                      الخطر :{{ item.score }}</v-alert
                    >
                  </div>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <div class="text-center">
          <v-btn
            class="title "
            dark
            rounded
            color="#D41B45"
            height="28px"
            :to="AllApplicationsPage"
          >
            المزيد
          </v-btn>
        </div>
      </div>
    </v-card>
  </v-hover>
</template>
<script>
export default {
  name: "ApplicationCard",
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
