<template>
  <v-hover v-slot:default="{ hover }" open-delay="200">
    <v-card
      dir="rtl"
      class="mx-auto cardc"
      width="1200"
      :elevation="hover ? 16 : 2"
    >
      <div align="center">
        <v-avatar size="120" class="avatar">
          <img src="../assets/appcard.png" alt="" />
        </v-avatar>
        <h2>الطلبات</h2>
      </div>
      <v-row dense>
        <v-col v-for="(item, i) in applications" :key="i" cols="12">
          <v-card color="#385F73" dark class="appcard">
            <div class="d-flex flex-no-wrap">
              <div>
                <div class="app">{{ item.reason }}</div>

                <div class="app">{{ item.time }}</div>
                <div class="app">{{ item.timeestimated }}</div>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <div class="text-center">
        <v-btn class="title" style="background-color: #D41B45">
          المزيد
        </v-btn>
      </div>
    </v-card>
  </v-hover>
</template>
<script>
export default {
  data: () => ({
    applications: [
      {
        reason: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        destination: "Supermodel",
        time: "Foster the People",
        timeestimated: "Foster the People"
      },
      {
        reason: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        destination: "Supermodel",
        time: "Foster the People",
        timeestimated: "Foster the People"
      },
      {
        reason: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        destination: "Supermodel",
        time: "Foster the People",
        timeestimated: "Foster the People"
      }
    ]
  })
};
</script>
<style>
.cardc {
  height: 400px;
}
.appcard {
  height: 90px;
}
.avatar {
  margin-top: 10px;
}
.app {
  padding-right: 15px;
}
</style>
