<template>
  <v-hover v-slot:default="{ hover }">
    <v-card
      :elevation="hover ? 16 : 2"
      class="mx-auto mt-12 "
      dir="rtl"
      height="360px"
      max-width="700"
    >
      <div align="center">
        <v-avatar class="avatar" size="80">
          <img alt="" src="../assets/infomap.png" />
        </v-avatar>
      </div>
      <v-row align="center">
        <v-col align="center" class="pb-3 pt-1 font">
          <span class="font"> معلومات حول منطقتي </span>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col align="center" class="pt-0 pb-0 ">
          <v-sheet class="fill-height mx-2" color="#d41b45">
            <v-sparkline
              :labels="label"
              :value="value"
              auto-draw
              color="rgba(255, 255, 255, .97)"
              height="95%"
              padding="5"
              smooth
              stroke-linecap="round"
            >
              <template v-slot:label="item"> {{ item.value }}</template>
            </v-sparkline>
          </v-sheet>
        </v-col>
      </v-row>
    </v-card>
  </v-hover>
</template>
<script>
export default {
  name: "MapInfoCard",
  data() {
    return {
      value: [423, 446, 675, 510, 590, 610, 760],
      label: ["12am", "3am", "6am", "9am", "12pm", "3pm", "6pm"]
    };
  }
};
</script>

<style scoped>
.font {
  color: #6b2028 !important;
  font-weight: bolder;
  font-size: 14px !important;
  font-family: Cairo;
}
</style>
