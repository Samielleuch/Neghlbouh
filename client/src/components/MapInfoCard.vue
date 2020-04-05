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
    </v-card>
  </v-hover>
</template>
<script>
export default {
  name: "MapInfoCard"
};
</script>

<style>
.cardc {
  padding-right: 20px;
  padding-left: 20px;
}
</style>
