<template>
  <v-hover open-delay="200" v-slot:default="{ hover }">
    <v-card
      :elevation="hover ? 16 : 2"
      class="mx-auto cardcc"
      dir="rtl"
      max-width="400"
    >
      <div align="center">
        <v-avatar class="avatar" size="130">
          <img alt="" src="../assets/user.png" />
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

          <div>{{ user.city }}</div>
        </div>
        <v-divider class="divider"></v-divider>
        <div class="row d">
          <div>المنطقة</div>

          <div>: {{ user.area }}</div>
        </div>
        <v-divider class="divider"></v-divider>
        <div class="row d">
          <div>رقم الهاتف :</div>

          <div>{{ user.phone }}</div>
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
      area : "string",
      name: "string",
      city: "string",
      phone: "integer",
      email: "string",
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
  background-color: #afa8a8;
}

.avatar {
  margin-top: 10px;
}
</style>
