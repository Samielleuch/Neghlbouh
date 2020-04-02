<template>
  <v-hover v-slot:default="{ hover }" open-delay="200">
    <v-card
      dir="rtl"
      class="mx-auto cardc"
      max-width="700"
      :elevation="hover ? 16 : 2"
    >
      <br />
      <div>
        <v-form ref="form" class="form">
          <div class="row">
            <div class="col-md-6">
              <v-label><h2>الإسم و اللقب</h2></v-label>
              <v-text-field
                color="red"
                v-model="user.name"
                :rules="rules"
                placeholder="الإسم و اللقب"
              ></v-text-field>
            </div>
            <div class="col-md-6">
              <v-label><h2>بطاقة التعريف الوطنية</h2></v-label>
              <v-text-field
                color="red"
                v-model="user.cin"
                placeholder="بطاقة التعريف الوطنية"
                :rules="rules"
              ></v-text-field>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <v-label><h2>رقم الهاتف</h2></v-label>
              <v-text-field
                color="red"
                v-model="user.phone"
                :rules="rules"
                placeholder="رقم الهاتف"
              ></v-text-field>
            </div>
            <div class="col-md-6">
              <v-label><h2>مكان السكن</h2></v-label>
              <v-text-field
                color="red"
                v-model="user.adress"
                placeholder="مكان السكن"
                :rules="rules"
              ></v-text-field>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <v-label class="title"><h2>البريد الالكتروني</h2></v-label>
              <v-text-field
                color="red"
                v-model="user.email"
                :rules="rules"
                placeholder="البريد الالكتروني"
              ></v-text-field>
            </div>
            <div class="col-md-6">
              <v-label><h2>كلمة السر</h2></v-label>
              <v-text-field
                color="red"
                type="password"
                v-model="user.cin"
                placeholder="كلمة السر"
                :rules="rules"
              ></v-text-field>
            </div>
          </div>
        </v-form>
        <br />
        <div class="text-center">
          <v-btn class="title" style="background-color: #d41b45">
            تعديل حسابي
          </v-btn>
        </div>
        <div class="clearfix"></div>
      </div>
    </v-card>
  </v-hover>
</template>
<script>
export default {
  props: {
    user: {
      cin: "string",
      name: "string",
      adress: "string",
      phone: "integer",
      email: "string",
      mdp: "string"
    }
  }
};
</script>
<style>
.form {
  padding-right: 20px;
  padding-left: 20px;
}
.cardc {
  padding-bottom: 20px;
  height: 500px;
}
h2 {
  color: #d41b45;
}
</style>
