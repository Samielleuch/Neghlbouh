<template>
  <div>
    <v-row justify="center">
      <v-col cols="12" sm="11" md="11">
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
  }
};
</script>

<style scoped></style>
