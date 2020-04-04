<template
  ><div class="background"><div class="app page">
    <v-col v-for="(item, i) in applications" :key="i" cols="12">
      <v-card class="app
      +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++card">
        <div class="d-flex flex-no-wrap">
          <div>
            <div class="app">{{ item.reason }}</div>

            <div class="app">{{ item.time }}</div>
            <div class="app">{{ item.timeestimated }}</div>
          </div>
        </div>
      </v-card>
    </v-col>
  </div>
</div>
</template>
<script>
export default {
  name: "AllApplicationsPage",
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
.appcard {
  height: 120px;
}
.background {
  background-color: #e5dddd;
}
.page {
  margin-top: 17px;
}
</style>
