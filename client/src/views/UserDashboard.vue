<template>
  <div class="background">
    <div class="row edit " dir="rtl">
      <div class=" col-md-5 mt-10 ">
        <UserCard :user="user"></UserCard>
      </div>
      <div class="col-md-7 mt-10">
        <MapInfoCard></MapInfoCard>
      </div>
      <div class="w-100"></div>
      <div class=" col-md-12 row">
        <ApplicationCard></ApplicationCard>
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
.edit {
  margin-top: fill;
}

.background {
  background-color: #e5dddd;
  height: 100%;
}
</style>
