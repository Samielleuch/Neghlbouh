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
        <h4>الطلبات</h4>
      </div>
      <div v-if="applications.length == 0">you don't have any request</div>
      <div v-else>
        <v-row dense>
          <v-col v-for="(item, i) in applications" :key="i" cols="12">
            <v-card class="appcard">
              <div class="d-flex flex-no-wrap">
                <div class="row">
                  <v-col>
                    <div class="app font" style="margin-top: 1px">
                      طلب الخروج إلى : {{ item.destination }}
                    </div>
                  </v-col>
                  <v-divider vertical inset></v-divider>
                  <div class="app font" style="margin-top: 10px">
                    الوقت : {{ item.time }}
                  </div>
                  <v-divider
                    vertical
                    inset
                    style="margin-right: 80px"
                  ></v-divider>
                  <div class="app font" style="margin-top: 10px">
                    وضعية الطلب : {{ item.state }}
                  </div>
                  <v-col class="text-left">
                    <v-btn
                      class="title font"
                      dark
                      height="25px"
                      color="#D41B45"
                      rounded
                      style="margin-top: 1px"
                    >
                      المزيد
                    </v-btn></v-col
                  >
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <div class="text-center">
          <v-btn class="title " dark rounded color="#D41B45" height="28px">
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
        state: "مقبول"
      },
      {
        destination: "Supermodel",
        time: "15:00",
        state: "مقبول"
      },
      {
        destination: "Supermodel",
        time: "15:00",
        state: "مقبول"
      }
    ]
  })
};
</script>
<style>
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
.font {
  font-family: Cairo;
}
</style>
