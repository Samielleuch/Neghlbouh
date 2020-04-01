<template>
  <div dir="rtl" style="padding-bottom: 30px;height: 40px">
    <template>
      <v-tabs style="padding-top: 20px">
        <v-img
          style="margin-left: 20px"
          alt="Neghlbouh"
          class="shrink mr-1"
          contain
          src="../assets/LOGO PNG.png"
          transition="scale-transition"
          width="150"
        />
        <v-tab to="/FAQ" class="title" style="color:black"> ارشادات</v-tab>
        <v-tab href="#seven" class="title" style="color:black"
          >اسئلة متداولة</v-tab
        >
        <v-tab href="#six" class="title" style="color:black">خريطة</v-tab>
        <v-tab href="#five" class="title" style="color:black">تعمير مطلب</v-tab>
        <v-tab href="#four" class="title" style="color:black"
          >الإجراءات المُتّخذة</v-tab
        >
        <v-tab href="#three" class="title" style="color:black"
          >الصّفحة الرّئيسيّة
        </v-tab>

        <v-tab href="#two" class="title" style="color:black">تسجيل</v-tab>
        <v-tab href="/CLIENT" class="title" style="color:black">دخول</v-tab>
        <v-tabs-slider color="red"></v-tabs-slider>
      </v-tabs>
    </template>
    <v-app-bar app color="white" dark class="hidden-lg-and-up">
      <v-menu bottom offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-app-bar-nav-icon color="black"></v-app-bar-nav-icon>
          </v-btn>
        </template>
        <v-card style="padding-top: 10px ;padding-bottom: 10px ; width:200px">
          <v-list>
            <v-list-item>
              <v-spacer></v-spacer>
              <v-btn href="/#" text color="black">
                <span class="title">تسجيل</span>
              </v-btn>
            </v-list-item>
            <v-list-item class="align-content-center">
              <v-spacer></v-spacer>
              <v-btn href="/#" text color="black">
                <span class="title">دخول</span>
              </v-btn>
            </v-list-item>
            <v-list-item>
              <v-spacer></v-spacer>
              <v-btn href="/#" text color="black">
                <span class="title">تعمير مطلب</span>
              </v-btn>
            </v-list-item>
            <v-list-item>
              <v-spacer></v-spacer>
              <v-btn href="/#" text color="black">
                <span class="title">خريطة</span>
              </v-btn>
            </v-list-item>
            <v-list-item>
              <v-spacer></v-spacer>
              <v-btn href="/#" text color="black">
                <span class="title">ارشادات</span>
              </v-btn>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      menu: [
        { name: "ارشادات ", icon: "", link: "/" },
        { name: "اسئلة متداولة", icon: "", link: "/FAQ" },
        { name: "خريطة", icon: "", link: "/###" },
        { name: "تعمير مطلب ", icon: "", link: "/##" },
        { name: "الإجراءات المُتّخذة", icon: "", link: "/###" },
        {
          name: "الصّفحة الرّئيسيّة",
          icon: "far fa-house",
          link: "/####"
        },
        { name: "تسجيل ", icon: "fas fa-lock", link: "/#" },
        { name: "دخول", icon: "", link: "/#" }
      ]
    };
  }
};
</script>
