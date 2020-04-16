<template>
  <div class="row edit">
    <v-row justify="center">
      <v-col cols="12" md="6" lg="5" class="pr-lg-0">
        <UserCardEdit :user="user"></UserCardEdit>
      </v-col>
      <v-col cols="12" md="6" lg="5" class="pr-lg-0 pl-lg-12">
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
