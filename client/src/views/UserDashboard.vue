<template>
  <div class="row background-image">
    <div class="col-xl-7 col-lg-7 col-md-8">
      <MapInfoCard> </MapInfoCard>
    </div>
    <div class="col-xl-6 col-lg-5 col-md-4">
      <UserCard :user="user"> </UserCard>
    </div>
    <div class="col-xl-12 col-lg-12 col-md-12">
      <ApplicationCard> </ApplicationCard>
    </div>
  </div>
</template>
<script>
import MapInfoCard from "../components/MapInfoCard.vue";
import UserCard from "../components/UserCard.vue";
import ApplicationCard from "../components/ApplicationCard";
export default {
  data() {
    return {
      user: {
        cin: "125665223",
        name: "اميرة دريدي",
        adress: "بنزرت ",
        phone: "21053262",
        email: "kdldj@djkd.com",
        mdp: "sghj"
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
.background-image {
  background-image: url("../assets/cc.png");
  height: 900px;
}
</style>
