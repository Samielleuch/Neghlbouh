<template>
  <div>
    <v-row justify="center">
      <v-col cols="12" sm="11" md="7">
        <SignInForm />
      </v-col>
    </v-row>
    <h1>hi</h1>
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
