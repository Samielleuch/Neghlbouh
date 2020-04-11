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
              <v-label><h3>الإسم و اللقب</h3></v-label>
              <v-text-field
                color="red"
                v-model="user.name"
                :rules="rules"
                placeholder="الإسم و اللقب"
              ></v-text-field>
            </div>
            <div class="col-md-6">
              <v-label><h3>بطاقة التعريف الوطنية</h3></v-label>
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
              <v-label><h3>رقم الهاتف</h3></v-label>
              <v-text-field
                color="red"
                v-model="user.phone"
                :rules="rules"
                placeholder="رقم الهاتف"
              ></v-text-field>
            </div>
            <div class="col-md-6">
              <v-label><h3>مكان السكن</h3></v-label>
              <v-text-field
                color="red"
                v-model="user.adress"
                placeholder="مكان السكن"
                :rules="rules"
              ></v-text-field>
            </div>
          </div>
          <div class="col-md-6">
            <v-label><h3>البريد الالكتروني</h3></v-label>
            <v-text-field
              color="red"
              v-model="user.email"
              :rules="rules"
              placeholder="البريد الالكتروني"
            ></v-text-field>
          </div>
          <v-btn
            class="title"
            color="#d41b45"
            dark
            height="25px"
            rounded
            @click="updatePass"
          >
            تغيير كلمة السر
          </v-btn>

          <div class="row" v-if="isClicked">
            <div class="col-md-6">
              <v-label><h3>كلمة السر</h3></v-label>
              <v-text-field
                color="red"
                type="password"
                v-model="user.cin"
                placeholder="كلمة السر"
                :rules="rules"
              ></v-text-field>
            </div>
            <div class="col-md-6">
              <v-label><h3>كلمة السر</h3></v-label>
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
          <v-btn
            class="title"
            color="#d41b45"
            dark
            style="margin-top: 0px;"
            rounded
          >
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
  name: "EditProfileForm",
  props: {
    isClicked: {
      Boolean,
      default: false
    },
    user: {
      cin: "string",
      name: "string",
      adress: "string",
      phone: "integer",
      email: "string",
      mdp: "string"
    }
  },
  methods: {
    updatePass() {
      if (!this.isClicked) {
        this.isClicked = true;
      } else {
        this.isClicked = false;
      }
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
  height: 520px;
}
h3 {
  color: #d41b45;
  height: 3px;
  font-family: Cairo;
}
</style>
