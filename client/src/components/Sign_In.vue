<template>
  <div>
    <v-overlay
      :class="isLoginPressed ? 'background-img' : ''"
      :dark="false"
      :value="isLoginPressed"
    >
      <v-row justify="center">
        <v-col justify="center">
          <v-card
            :dark="false"
            class="test"
            color="rgba(250, 250, 250, 1 )"
            elevation="10"
            outlined
            shaped
            width="600px"
          >
            <SignInForm isModal="true" />
          </v-card>
        </v-col>
      </v-row>
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

@media only screen and (max-width: 900px) {
  .test {
    margin-bottom: -20vh;

    transform: scale(0.7, 0.7) !important;
  }
}

@media only screen and (max-height: 550px) {
  .test {
    margin-bottom: -20vh;

    transform: scale(0.5, 0.5) !important;
  }
}

.test {
  margin-bottom: -20vh;
  transform: scale(0.84, 0.84);
}
</style>
