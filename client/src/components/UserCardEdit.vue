<template>
  <v-hover v-slot:default="{ hover }" open-delay="200">
    <v-card
      class="mx-auto cardcc"
      max-width="400"
      dir="rtl"
      :elevation="hover ? 16 : 2"
    >
      <div align="center">
        <v-avatar size="130" class="avatar">
          <img src="../assets/user.png" alt="" />
        </v-avatar>
      </div>
      <v-card-text class="text--primary title">
        <div class="row d">
          <div>الإسم و اللقب :</div>

          <div>{{ user.name }}</div>
        </div>
        <v-divider class="divider"></v-divider>
        <div class="row d">
          <div>مكان السكن :</div>

          <div>{{ user.adress }}</div>
        </div>
        <v-divider class="divider"></v-divider>
        <div class="row d">
          <div>رقم الهاتف :</div>

          <div>{{ user.phone }}</div>
        </div>
        <v-divider class="divider"></v-divider>
        <div class="row d">
          <div>بطاقة التعريف الوطنية</div>

          <div>: {{ user.cin }}</div>
        </div>
        <v-divider class="divider"></v-divider>
        <div class="row d">
          <div>البريد الالكتروني</div>

          <div>: {{ user.email }}</div>
        </div>
        <v-divider class="divider"></v-divider>
      </v-card-text>
    </v-card>
  </v-hover>
</template>
<script>
export default {
  name: "UserCardEdit",
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
  }
};
</script>
<style>
.cardcc {
  padding-right: 20px;
  padding-left: 20px;
  padding-bottom: 20px;
}
.d {
  margin-bottom: 8px;
  margin-top: 8px;
  font-family: Cairo;
}
.divider {
  background-color: #AFA8A8;
}
.avatar {
  margin-top: 10px;
}
</style>
