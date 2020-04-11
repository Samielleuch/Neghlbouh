<template>
  <div>
    <v-overlay
      :class="isLoginPressed ? 'background-img' : ''"
      :dark="false"
      :value="isLoginPressed"
    >
      <v-card
        :dark="false"
        color="rgba(250, 250, 250, 1 )"
        elevation="10"
        outlined
        shaped
        width="650"
      >
        <SignInForm isModal="true" />
      </v-card>
    </v-overlay>
  </div>
</template>

<script>
import SignInForm from "./SignInForm";
import { mapState } from "vuex";

export default {
  name: "Sign_In",
  components: {
    SignInForm
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["isLoginPressed"])
  },
  methods: {}
};
</script>

<style scoped>
>>> .background-img {
  background-image: url("../assets/Loginbackground.png");
}
</style>
