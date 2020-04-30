<template>
  <div>
    <v-row justify="center">
      <v-col cols="12" md="7" sm="11">
        <SignInForm />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import SignInForm from "../components/SignInForm";

export default {
  name: "Sign_In_Page",
  components: {
    SignInForm
  }
};
</script>

<style scoped></style>
