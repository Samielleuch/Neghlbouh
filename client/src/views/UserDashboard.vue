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
      user: {
        cin: "022",
        name: "مهدي",
        adress: "بن عروس ",
        phone: "28034483",
        email: "mehdi@yahoo.com",
        mdp: "root"
      }
    };
  },
  components: {
    ApplicationCard,
    MapInfoCard,
    UserCard
  }
};
</script>
<style>
.background {
  background-color: #e5dddd;
  height: 100%;
}
</style>
