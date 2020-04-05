<template>
  <v-hover v-slot:default="{ hover }" open-delay="200">
    <v-card
      style="height: 270px"
      dir="rtl"
      class="mx-auto cardc"
      max-width="700"
      :elevation="hover ? 16 : 2"
    >
      <div align="center">
        <v-avatar size="80" class="avatar">
          <img src="../assets/infomap.png" alt="" />
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
  margin-top: 20px;
}
</style>
