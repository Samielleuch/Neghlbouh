<template>
  <div class="row edit">
    <v-row justify="center">
      <v-col class="pr-lg-0" cols="12" lg="5" md="6">
        <UserCardEdit :user="user"></UserCardEdit>
      </v-col>
      <v-col class="pr-lg-0 pl-lg-12" cols="12" lg="5" md="6">
        <EditProfileForm :user="user"></EditProfileForm>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import EditProfileForm from "../components/EditProfileForm.vue";
import UserCardEdit from "../components/UserCardEdit.vue";

export default {
  name: "EditProfilePage",
  data() {
    return {
      user: this.$store.state.currentUser
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
  height: 100%;
  margin-top: 17px;
  background-color: #e5dddd;
}
</style>
