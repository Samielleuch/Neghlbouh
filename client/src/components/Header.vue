<template>
  <div dir="rtl" style="padding-bottom: 30px;height: 40px; margin-bottom: 50px">
    <v-app-bar color="white">
      <v-app-bar-nav-icon
        @click="drawer = true"
        class="d-flex d-md-none"
      ></v-app-bar-nav-icon>
      <v-spacer class="d-flex d-md-none"></v-spacer>
      <v-img
        style="margin-left: 20px"
        alt="Neghlbouh"
        class="shrink mr-1"
        contain
        src="../assets/logo.png"
        transition="scale-transition"
        width="150"
      />
      <v-toolbar-title class="d-none d-md-flex">
        <!-- Menu Items -->
        <v-hover
          v-slot:default="{ hover }"
          v-for="(item, index) in HeaderMenu"
          :key="index"
        >
          <router-link
            :to="{ name: item.link }"
            :class="
              activeClass(
                hover,
                item.link,
                item.name,
                'Navbar animation cool-link ',
                'Navbar  cool-link '
              )
            "
            v-ripple="false"
            depressed
            elevation="0"
          >
            <span @click="checkLoginPressed(item.name)" class="mr-2">
              {{ item.name }}
            </span>
            <v-icon
              :color="
                activeClass(hover, item.link, item.name, '#A93226  ', 'black')
              "
              >{{ item.icon }}</v-icon
            >
          </router-link>
        </v-hover>
        <!--  Sign In --->
        <v-hover v-slot:default="{ hover }">
          <span
            :class="
              activeClass(
                hover,
                loginButton.link,
                loginButton.name,
                'Navbar animation cool-link ',
                'Navbar  cool-link '
              )
            "
            v-ripple="false"
            depressed
            elevation="0"
          >
            <span @click="checkLoginPressed(loginButton.name)"
              >{{ loginButton.name }}
            </span>
            <v-icon
              :color="
                activeClass(
                  hover,
                  loginButton.link,
                  loginButton.name,
                  '#A93226 ',
                  'black'
                )
              "
              >{{ loginButton.icon }}</v-icon
            >
          </span>
        </v-hover>
        <!-- -->
      </v-toolbar-title>
    </v-app-bar>
    <!-- Responsive Menu here !! -->
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item
            v-for="(item, index) in HeaderMenu"
            :key="index"
            :to="{ name: item.link }"
            class="text-justify "
          >
            <v-list-item-title class="hamburgerMenu listItem">
              <router-link
                :to="{ name: item.link }"
                :class="
                  activeClass(
                    false,
                    item.link,
                    item.name,
                    'Navbar animation cool-link ',
                    'Navbar  cool-link '
                  )
                "
                v-ripple="false"
                depressed
                elevation="0"
              >
                <span class="ml-3">{{ item.name }}</span>
                <v-icon color=" black ">{{ item.icon }}</v-icon>
              </router-link>
            </v-list-item-title>
          </v-list-item>
          <!-- Login Button -->
          <v-list-item class="text-justify ">
            <v-list-item-title
              class="hamburgerMenu "
              @click="checkLoginPressed(loginButton.name)"
            >
              <span
                class="Navbar  cool-link listItem   "
                v-ripple="false"
                depressed
                elevation="0"
              >
                <span @click="checkLoginPressed(loginButton.name)"
                  >{{ loginButton.name }}
                </span>
                <v-icon color=" black ">{{ loginButton.icon }}</v-icon>
              </span>
            </v-list-item-title>
          </v-list-item>
          <!-- -->
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Header",
  data() {
    return {
      drawer: false,
      // Data to transport to Vuex
      HeaderMenu: [
        {
          name: this.$store.state.langPack.HeaderMenu.homePage,
          icon: "fas fa-globe-americas",
          link: "Home"
        },
        {
          name: this.$store.state.langPack.HeaderMenu.liveMap,
          icon: "fas fa-map-marked-alt",
          link: "LiveMap"
        },
        {
          name: this.$store.state.langPack.HeaderMenu.demande,
          icon: "fas fa-paper-plane",
          link: "Home"
        },
        {
          name: this.$store.state.langPack.HeaderMenu.infoPage,
          icon: "fas fa-hand-sparkles",
          link: "Home"
        },
        // { name: "الإجراءات المُتّخذة", icon: "fas fa-viruses", link: "Home" },
        {
          name: this.$store.state.langPack.HeaderMenu.faq,
          icon: "fas fa-question-circle",
          link: "FAQ"
        },

        {
          name: this.$store.state.langPack.HeaderMenu.signup,
          icon: "fas fa-user-plus",
          link: "SignUp"
        }
      ],
      loginButton: {
        name: this.$store.state.langPack.HeaderMenu.loginButton,
        icon: "fas fa-door-open",
        link: "SignIn"
      }
      //  End of Data to transport
    };
  },
  computed: {
    ...mapState(["isLoginPressed"])
  },
  methods: {
    ...mapActions(["pressLogin"]),
    checkLoginPressed(name) {
      if (name === "دخول") {
        if (this.$vuetify.breakpoint.mdAndUp) {
          this.pressLogin(true);
        } else {
          if (this.$route.name !== "SignIn")
            this.$router.push({ name: "SignIn" });
        }
      }
    },
    activeClass(hover, link, name, classwhenactive, otherclass) {
      if (link === this.$route.name) {
        if (
          name === "الصّفحة الرّئيسيّة" ||
          name === "خريطة" ||
          name === "اسئلة متداولة" ||
          name === "تسجيل"
        ) {
          return classwhenactive;
        } else {
          return otherclass;
        }
      } else {
        if (hover) {
          return classwhenactive;
        } else {
          return otherclass;
        }
      }
    }
  },
  created() {}
};
</script>
<style scoped>
.Navbar {
  margin-right: 2vw;
  padding-bottom: 3px;
  font-size: 1.3vw !important;
  color: black;
  background-color: rgba(255, 255, 255, 0) !important;
  text-decoration: none;
}

.cool-link {
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
  background: #d41b45;
  transition: width 0.3s;
}

.cool-link:hover::after {
  width: 100%;
  //transition: width .3s;
}
.animation {
  color: #d41b45;
}
.animation::after {
  border-radius: 100%;
  content: "";
  display: block;
  width: 100%;
  height: 3px;
  background: #d41b45;
  transition: width 0.3s;
}
.hamburgerMenu {
  font-size: 20px !important;
  text-align: center !important;
}
.listItem {
  background-color: rgba(255, 255, 255, 1) !important;
  font-size: 18px !important;
}
</style>
