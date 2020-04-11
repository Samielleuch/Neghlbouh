<template>
  <div class="row edit">
    <div class="col-xl-6 col-lg-5 col-md-4">
      <UserCardEdit :user="user"></UserCardEdit>
    </div>
    <div class="col-xl-7 col-lg-7 col-md-8">
      <EditProfileForm :user="user"></EditProfileForm>
    </div>
  </div>
</template>
<script>
import EditProfileForm from "../components/EditProfileForm.vue";
import UserCardEdit from "../components/UserCardEdit.vue";

export default {
  name: "EditProfilePage",
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
    UserCardEdit,
    EditProfileForm
  }
};
</script>
<style>
.edit {
  height: 550px;
  margin-top: 17px;
  background-color: #e5dddd;
}
</style>
