<template>
  <v-hover  v-slot:default="{ hover }">
    <v-card
      :elevation="hover ? 16 : 2"
      class="mx-auto mt-12"
      max-width="520"
      dir="rtl"
      height="360px"

    >
      <div align="center" style="margin-top: 2px">
        <v-avatar size="80">
          <img alt="" src="../assets/user.png" />
        </v-avatar>
      </div>
      <v-row align="center">
        <v-col align="center" class="pt-0 pb-0">
          <h5 dir="ltr">{{ user.name }} <strong> : الإسم و اللقب </strong></h5>
        </v-col>
      </v-row>
      <!-- Divider-->
      <v-row justify="center" align="center" class="pt-0 pb-0">
        <v-col align="center" justify="center" class="pt-2 pb-2">
          <v-divider
            class="divider"
            style="background-color: #AFA8A8;"
          ></v-divider>
        </v-col>
      </v-row>
      <!-- -->
      <v-row justify="center" align="center">
        <v-col align="center" justify="center" class="pt-0 pb-0">
          <h5 dir="rtl"><strong> مكان السكن : </strong> {{ user.city }}</h5>
        </v-col>
      </v-row>
      <!-- Divider-->
      <v-row justify="center" align="center" class="mt-0 mb-0">
        <v-col align="center" justify="center" class="pt-2 pb-2">
          <v-divider
            class="divider"
            style="background-color: #AFA8A8;"
          ></v-divider>
        </v-col>
      </v-row>
      <!-- -->
      <v-row justify="center" align="center">
        <v-col align="center" justify="center" class="pt-0 pb-0">
          <h5 dir="ltr">{{ user.phone }} <strong> : رقم الهاتف </strong></h5>
        </v-col>
      </v-row>
      <!-- Divider-->
      <v-row justify="center" align="center" class="mt-0 mb-0">
        <v-col align="center" justify="center" class="pt-2 pb-2">
          <v-divider
            class="divider"
            style="background-color: #AFA8A8;"
          ></v-divider>
        </v-col>
      </v-row>
      <!-- -->
      <v-row justify="center" align="center">
        <v-col align="center" justify="center" class="pt-0 pb-0">
          <h5 dir="ltr">
            {{ user.cin }} <strong> : بطاقة التعريف الوطنية </strong>
          </h5>
        </v-col>
      </v-row>
      <!-- Divider-->
      <v-row justify="center" align="center" class="mt-0 mb-0">
        <v-col align="center" justify="center" class="pt-2 pb-2">
          <v-divider
            class="divider"
            style="background-color: #AFA8A8;"
          ></v-divider>
        </v-col>
      </v-row>
      <!-- -->
      <v-row justify="center" align="center">
        <v-col align="center" justify="center" class="pt-0 pb-0">
          <h5 dir="ltr">
            {{ user.email }} <strong> :البريد الالكتروني </strong>
          </h5>
        </v-col>
      </v-row>
      <v-row justify="center" align="center" class="mt-0 mb-0">
        <v-col align="center" justify="center" class="pt-2 pb-2">
          <v-divider
            class="divider"
            style="background-color: #AFA8A8;"
          ></v-divider>
        </v-col>
      </v-row>
      <!-- -->

      <v-row justify="center" align="center" class="mt-0 mb-0">
        <v-col align="center" justify="center" class="pt-6 pb-6">
          <v-btn
            class="font title"
            color="#d41b45"
            dark
            height="30"
            rounded
            large
            to="/EditProfilePage"
          >
            تعديل حسابي
          </v-btn>
        </v-col>
      </v-row>
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
  }
};
</script>
<style scoped>
.font {
  font-family: Cairo;
}

h5 {
  font-size: 16px;
  font-family: Cairo;
  margin-top: 2px;
}
strong {
  padding-left: 9px;
  color: #6b2028;
}
.divider {
  background-color: #afa8a8;
  width: 70%;
}
</style>
