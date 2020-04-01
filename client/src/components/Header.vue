<template>
  <div dir="rtl" style="padding-bottom: 30px;height: 40px">
    <v-app-bar color="white">
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-img
        style="margin-left: 20px"
        alt="Neghlbouh"
        class="shrink mr-1"
        contain
        src="../assets/logo.png"
        transition="scale-transition"
        width="150"
      />
      <v-toolbar-title>
        <v-hover
          v-slot:default="{ hover }"
          v-for="(item, index) in HeaderMenu"
          :key="index"
        >
          <router-link
            :to="item.link"
            :class="hover ? 'Navbar animation cool-link ' : 'Navbar cool-link '"
            v-ripple="false"
            depressed
            elevation="0"
          >
            <v-icon :color="hover ? 'red' : 'black'">{{ item.icon }}</v-icon>
            {{ item.name }}
          </router-link>
        </v-hover>
      </v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      drawer: false,
      group: false,
      HeaderMenu: [
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
  },
  computed: {}
};
</script>
<style scoped>
.Navbar {
  margin-right: 11px;
  padding-bottom: 3px;
  font-size: 1.5rem;
  color: black;
  background-color: rgba(255, 255, 255, 1) !important;
  text-decoration: none;
}
.cool-link {
  border-radius: 100%;
  display: inline-block;
  color: #000000;
  text-decoration: none;
}

.cool-link::after {
  border-radius: 100%;
  content: "";
  display: block;
  width: 0;
  height: 3px;
  background: #dd0100;
  transition: width 0.3s;
}

.cool-link:hover::after {
  width: 100%;
  //transition: width .3s;
}

.animation {
  color: red;
}
</style>
