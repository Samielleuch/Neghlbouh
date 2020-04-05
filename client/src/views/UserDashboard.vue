<template>
  <div class="background">
    <div class="row edit" dir="rtl">
      <div class="col-xl-6 col-lg-5 col-md-4">
        <UserCard :user="user"> </UserCard>
      </div>
      <div class="col-xl-7 col-lg-7 col-md-8">
        <MapInfoCard> </MapInfoCard>
      </div>
      <div class="w-100"></div>
      <div class="col-xl-12 col-lg-12 col-md-12 row">
        <ApplicationCard> </ApplicationCard>
      </div>
    </div>
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
.edit {
  margin-top: fill;
}
.background {
  background-color: #e5dddd;
}
</style>
