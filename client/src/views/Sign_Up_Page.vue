<template>
  <div>
    <v-row justify="center">
      <v-col cols="12" md="11" sm="11">
        <SignUpForm />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import SignUpForm from "@/components/SignUpForm";

export default {
  name: "Sign_Up_Page",
  components: {
    SignUpForm
  },
  created() {
    if (this.$store.state.currentUser !== undefined) {
      this.$router.replace({ name: "Home" });
    }
  }
};
</script>

<style scoped></style>
