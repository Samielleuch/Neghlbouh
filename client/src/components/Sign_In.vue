<template>
  <div>
    <v-overlay
      :value="isLoginPressed"
      :dark="false"
      :class="isLoginPressed ? 'background-img' : ''"
    >
      <v-card
        shaped
        elevation="10"
        width="650"
        color="rgba(250, 250, 250, 1 )"
        outlined
        :dark="false"
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
