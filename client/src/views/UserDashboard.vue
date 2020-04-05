<template>
  <div class="background">

    <v-row>
      <v-col class="col-md-4">
        <UserCard :user="user"> </UserCard>
      </v-col>
      <v-col class="col-md-8">
        <MapInfoCard> </MapInfoCard>
      </v-col>
    </v-row>
    <v-row>
      <div class="col-md-12">
        <ApplicationCard> </ApplicationCard>
      </div>
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
