<template>
  <div>
    <MainBanner />
    <Steps />
  </div>
</template>

<script>
// @ is an alias to /src
import MainBanner from "@/components/MainBanner.vue";
import Steps from "@/components/Steps.vue";
export default {
  name: "Home",
  components: {
    MainBanner,
    Steps
  }
};
</script>
