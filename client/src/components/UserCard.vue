<template>
  <v-hover v-slot:default="{ hover }" open-delay="200">
    <v-card
      class="mx-auto cardcc"
      max-width="520"
      dir="rtl"
      :elevation="hover ? 16 : 2"
    >
      <div align="center" style="margin-top: 2px">
        <v-avatar size="65">
          <img src="../assets/user.png" alt="" />
        </v-avatar>
      </div>
      <div class="text--primary ">
        <div class="row d">
          <h5>الإسم و اللقب :</h5>

          <h5>{{ user.name }}</h5>
        </div>
        <v-divider
          class="divider"
          style="background-color: #AFA8A8;"
        ></v-divider>
        <div class="row d">
          <h5>مكان السكن :</h5>

          <h5>{{ user.adress }}</h5>
        </div>
        <v-divider class="divider"></v-divider>
        <div class="row d">
          <h5>رقم الهاتف :</h5>

          <h5>{{ user.phone }}</h5>
        </div>
        <v-divider class="divider"></v-divider>
        <div class="row d">
          <h5>بطاقة التعريف الوطنية</h5>

          <h5>: {{ user.cin }}</h5>
        </div>
        <v-divider class="divider"></v-divider>
        <div class="row d">
          <h5>البريد الالكتروني</h5>

          <h5>: {{ user.email }}</h5>
        </div>
        <v-divider class="divider"></v-divider>
      </div>

      <div class="text-center" v-if="checkPage">
        <v-btn class="font title" dark rounded color="#d41b45" height="30">
          تعديل حسابي
        </v-btn>
      </div>
    </v-card>
  </v-hover>
</template>
<script>
export default {
  name: "UserCard",
  props: {
    user: {
      cin: "string",
      name: "string",
      lastName: "string",
      adress: "string",
      phone: "integer",
      email: "string",
      mdp: "string"
    }
  },
  methods: {
    checkPage() {
      if (this.$route.name === "UserDashboard") {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>
<style>
.cardcc {
  height: 270px;
  padding-right: 20px;
  padding-left: 20px;
}
.font {
  margin-top: 20px;
  font-family: Cairo;
}
h5 {
  font-family: Cairo;
  margin-top: 2px;
}

.d {
  margin-right: 85px;
}
.divider {
  background-color: #AFA8A8;
  margin-top: 8px;
  margin-right: 75px;
  width: 300px;
}
</style>
