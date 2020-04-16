<template>
  <v-hover open-delay="200" v-slot:default="{ hover }">
    <v-card
      :elevation="hover ? 16 : 2"
      class="mx-auto cardc"
      dir="rtl"
      max-width="700"
      style="height: 270px"
    >
      <div align="center">
        <v-avatar class="avatar" size="80">
          <img alt="" src="../assets/infomap.png" />
        </v-avatar>
      </div>

      <v-sheet color="rgba(230, 45, 45, 0.6)">
        <v-sparkline
          auto-draw
          :labels="label"
          :value="value"
          color="rgba(255, 255, 255, .97)"
          height="100"
          padding="5"
          stroke-linecap="round"
          smooth
        >
          <template v-slot:label="item"> {{ item.value }} </template>
        </v-sparkline>
      </v-sheet>
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

<style>
.cardc {
  padding-right: 20px;
  padding-left: 20px;
  margin-top: 20px;
  width: 400px;
}
</style>
