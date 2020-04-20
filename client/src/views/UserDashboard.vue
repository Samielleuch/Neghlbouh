<template>
  <div class="background">
    <v-row justify="center">
      <v-col class="pr-lg-0" cols="12" lg="5" md="6">
        <UserCard :user="user"></UserCard>
      </v-col>
      <v-col class="pr-lg-0 pl-lg-12" cols="12" lg="5" md="6">
        <MapInfoCard></MapInfoCard>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="mt-5" cols="12">
        <ApplicationCard></ApplicationCard>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import MapInfoCard from "../components/MapInfoCard.vue";
import UserCard from "../components/UserCard.vue";
import ApplicationCard from "../components/ApplicationCard";

export default {
  name: "UserDashboard",
  data() {
    return {
      user: this.$store.state.currentUser
    };
  },
  components: {
    ApplicationCard,
    MapInfoCard,
    UserCard
  },
  created() {}
};
</script>
<style>
.background {
  background-color: #e5dddd;
  height: 100%;
}
</style>
