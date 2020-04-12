<template>
  <div>
    <v-row justify="center">
      <v-col cols="12" md="7" sm="11">
        <ResetForm />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import ResetForm from "../components/ResetForm";

export default {
  name: "ResetPassword",
  components: {
    ResetForm
  },
 
};
</script>

<style scoped></style>
