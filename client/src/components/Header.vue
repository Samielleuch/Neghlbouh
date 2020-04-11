<template>
  <!-- the z-index of the nav bar is set to 10 so that it doesn't 
    collide with the form in the sign up page ( this form has been adjusted with transform) -->
  <div
    dir="rtl"
    style="padding-bottom: 30px;height: 40px; margin-bottom: 10px; z-index:10;"
  >
    <v-app-bar color="white">
      <v-app-bar-nav-icon
        @click="drawer = true"
        class="d-flex d-md-none"
      ></v-app-bar-nav-icon>
      <v-spacer class="d-flex d-md-none"></v-spacer>
      <v-img
        alt="Neghlbouh"
        class="shrink mr-1"
        contain
        src="../assets/logo.png"
        style="margin-left: 20px"
        transition="scale-transition"
        width="150"
      />
      <v-toolbar-title class="d-none d-md-flex">
        <!--  User Dashboard --->
        <v-hover
          v-if="
            this.$store.state.currentUser !== undefined &&
              !this.$store.state.currentUser.admin
          "
          v-slot:default="{ hover }"
        >
          <span
            :class="
              hover
                ? 'Navbar animation cool-link mr-0 '
                : 'Navbar  cool-link mr-0 '
            "
            @click="$router.replace({ name: 'UserDashboard' })"
            elevation="0"
            v-ripple="false"
          >
            <v-icon :color="hover ? '#A93226 ' : 'black'">{{
              userDashboardButton.icon
            }}</v-icon>
            <span class="mr-1">{{ userDashboardButton.name }} </span>
          </span>
        </v-hover>
        <!-- -->
        <!--  Admin Dashboard --->
        <v-hover
          v-if="
            this.$store.state.currentUser !== undefined &&
              this.$store.state.currentUser.admin
          "
          v-slot:default="{ hover }"
        >
          <span
            :class="
              hover ? 'Navbar animation cool-link ' : 'Navbar  cool-link '
            "
            @click="$router.replace({ name: 'AdminDashboard' })"
            elevation="0"
            v-ripple="false"
          >
            <v-icon :color="hover ? '#A93226 ' : 'black'">{{
              adminDashboardButton.icon
            }}</v-icon>
            <span class="mr-1">{{ adminDashboardButton.name }} </span>
          </span>
        </v-hover>
        <!-- -->
        <!-- Menu Items -->
        <v-hover
          :key="index"
          v-for="(item, index) in HeaderMenu"
          v-slot:default="{ hover }"
        >
          <router-link
            :class="
              activeClass(
                hover,
                item.link,
                item.name,
                'Navbar animation cool-link ',
                'Navbar  cool-link '
              )
            "
            :to="{ name: item.link }"
            depressed
            elevation="0"
            v-ripple="false"
          >
            <v-icon
              :color="
                activeClass(hover, item.link, item.name, '#A93226  ', 'black')
              "
              >{{ item.icon }}
            </v-icon>
            <span class="mr-2">
              {{ item.name }}
            </span>
          </router-link>
        </v-hover>
        <!-- -->
        <!--  Sign UP--->
        <v-hover
          v-if="this.$store.state.currentUser === undefined"
          v-slot:default="{ hover }"
        >
          <span
            :class="
              activeClass(
                hover,
                signupButton.link,
                signupButton.name,
                'Navbar animation cool-link ',
                'Navbar  cool-link '
              )
            "
            @click="checkSignUpPressed"
            depressed
            elevation="0"
            v-ripple="false"
          >
            <v-icon
              :color="
                activeClass(
                  hover,
                  signupButton.link,
                  signupButton.name,
                  '#A93226 ',
                  'black'
                )
              "
              >{{ signupButton.icon }}</v-icon
            >
            <span>{{ signupButton.name }} </span>
          </span>
        </v-hover>
        <!-- -->
        <!--  Sign In --->
        <v-hover
          v-if="this.$store.state.currentUser === undefined"
          v-slot:default="{ hover }"
        >
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
            @click="checkLoginPressed(loginButton.name)"
            depressed
            elevation="0"
            v-ripple="false"
          >
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
            <span>{{ loginButton.name }} </span>
          </span>
        </v-hover>
        <!-- -->
        <!--  Log Out Button  --->
        <v-hover
          v-if="this.$store.state.currentUser !== undefined"
          v-slot:default="{ hover }"
        >
          <span
            :class="
              hover ? 'Navbar animation cool-link ' : 'Navbar  cool-link '
            "
            @click="logOut"
            elevation="0"
            v-ripple="false"
          >
            <v-icon :color="hover ? '#A93226 ' : 'black'">{{
              logOutButton.icon
            }}</v-icon>
            <span>{{ logOutButton.name }} </span>
          </span>
        </v-hover>
        <!-- -->
      </v-toolbar-title>
    </v-app-bar>
    <!-- Responsive Menu here !! -->
    <v-navigation-drawer absolute temporary v-model="drawer">
      <v-list dense nav>
        <v-list-item-group>
          <!-- userDash Button -->
          <v-list-item
            class="text-justify "
            v-if="
              this.$store.state.currentUser !== undefined &&
                !this.$store.state.currentUser.admin
            "
          >
            <v-list-item-title
              @click="$router.replace({ name: 'UserDashboard' })"
              class="hamburgerMenu "
            >
              <span
                class="Navbar  cool-link listItem   "
                depressed
                elevation="0"
                v-ripple="false"
              >
                <v-icon color=" black ">{{ userDashboardButton.icon }}</v-icon>
                <span class="mr-1">{{ userDashboardButton.name }} </span>
              </span>
            </v-list-item-title>
          </v-list-item>
          <!-- -->
          <!-- adminDash Button -->
          <v-list-item
            class="text-justify "
            v-if="
              this.$store.state.currentUser !== undefined &&
                this.$store.state.currentUser.admin
            "
          >
            <v-list-item-title
              @click="$router.replace({ name: 'AdminDashboard' })"
              class="hamburgerMenu "
            >
              <span
                class="Navbar  cool-link listItem   "
                depressed
                elevation="0"
                v-ripple="false"
              >
                <v-icon color=" black ">{{ adminDashboardButton.icon }}</v-icon>
                <span class="mr-1">{{ adminDashboardButton.name }} </span>
              </span>
            </v-list-item-title>
          </v-list-item>
          <!-- -->
          <v-list-item
            :key="index"
            :to="{ name: item.link }"
            class="text-justify "
            v-for="(item, index) in HeaderMenu"
          >
            <v-list-item-title class="hamburgerMenu listItem">
              <router-link
                :class="
                  activeClass(
                    false,
                    item.link,
                    item.name,
                    'Navbar animation cool-link listItem ',
                    'Navbar  cool-link listItem '
                  )
                "
                :to="{ name: item.link }"
                depressed
                elevation="0"
                v-ripple="false"
              >
                <v-icon color=" black ">{{ item.icon }}</v-icon>
                <span class="mr-3">{{ item.name }}</span>
              </router-link>
            </v-list-item-title>
          </v-list-item>
          <!-- Sign Up Button -->
          <v-list-item
            class="text-justify "
            v-if="this.$store.state.currentUser === undefined"
          >
            <v-list-item-title
              @click="checkSignUpPressed()"
              class="hamburgerMenu "
            >
              <span
                @click="checkLoginPressed(signupButton.name)"
                class="Navbar  cool-link listItem   "
                depressed
                elevation="0"
                v-ripple="false"
              >
                <v-icon color=" black ">{{ signupButton.icon }}</v-icon>
                <span>{{ signupButton.name }} </span>
              </span>
            </v-list-item-title>
          </v-list-item>
          <!-- -->
          <!-- Login Button -->
          <v-list-item
            class="text-justify "
            v-if="this.$store.state.currentUser === undefined"
          >
            <v-list-item-title
              @click="checkLoginPressed(loginButton.name)"
              class="hamburgerMenu "
            >
              <span
                class="Navbar  cool-link listItem   "
                depressed
                elevation="0"
                v-ripple="false"
              >
                <v-icon color=" black ">{{ loginButton.icon }}</v-icon>
                <span>{{ loginButton.name }} </span>
              </span>
            </v-list-item-title>
          </v-list-item>
          <!-- -->
          <!-- LogOut Button -->
          <v-list-item
            class="text-justify "
            v-if="this.$store.state.currentUser !== undefined"
          >
            <v-list-item-title @click="logOut" class="hamburgerMenu ">
              <span
                class="Navbar  cool-link listItem   "
                depressed
                elevation="0"
                v-ripple="false"
              >
                <v-icon color=" black ">{{ logOutButton.icon }}</v-icon>
                <span>{{ logOutButton.name }} </span>
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
      session: undefined,
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
          link: this.infoRedirection()
        },
        {
          name: this.$store.state.langPack.HeaderMenu.infoPage,
          icon: "fas fa-hand-sparkles",
          link: "Info"
        },
        {
          name: this.$store.state.langPack.HeaderMenu.faq,
          icon: "fas fa-question-circle",

          link: "FAQ"
        }
      ],
      loginButton: {
        name: this.$store.state.langPack.HeaderMenu.loginButton,
        icon: "fas fa-door-open",
        link: "SignIn"
      },
      signupButton: {
        name: this.$store.state.langPack.HeaderMenu.signup,
        icon: "fas fa-user-plus",
        link: "SignUp"
      },
      logOutButton: {
        name: this.$store.state.langPack.HeaderMenu.logOutButton,
        icon: "fas fa-door-closed"
      },
      userDashboardButton: {
        name: this.$store.state.langPack.HeaderMenu.userDashboardButton,
        icon: "fas fa-user-circle"
      },
      adminDashboardButton: {
        name: this.$store.state.langPack.HeaderMenu.adminDashboardButton,
        icon: "fas fa-user-shield"
      }
      //  End of Data to transport
    };
  },
  computed: {
    ...mapState(["isLoginPressed"])
  },
  methods: {
    ...mapActions(["pressLogin"]),
    infoRedirection() {
      if (
        this.$store.state.currentUser !== undefined &&
        !this.$store.state.currentUser.admin
      ) {
        return "FormPage";
      } else return "Home";
    },
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
    checkSignUpPressed() {
      if (this.$route.name !== "SignUn") this.$router.push({ name: "SignUp" });
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
    },
    logOut() {
      this.session.clear();
      this.$router.replace({ name: "Home" });
      this.$router.go();
    }
  },
  mounted() {
    this.session = window.sessionStorage;
  }
};
</script>
<style scoped>
.Navbar {
  font-family: Cairo;
  font-weight: bold;
  margin-right: 2vw;
  padding-bottom: 3px;
  font-size: 1.3vw !important;
  color: black;
  background-color: rgba(255, 255, 255, 0) !important;
  text-decoration: none;
}

.cool-link {
  font-family: Cairo;

  display: inline-block;
  color: #000000;
  text-decoration: none;
}

.cool-link::after {
  font-family: Cairo;

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
  transition: width 0.3s;
}

.animation {
  color: #d41b45;
}

.animation::after {
  border-radius: 100%;
  content: "";
  font-family: Cairo;

  display: block;
  width: 100%;
  height: 3px;
  background: #d41b45;
  transition: width 0.3s;
}

.hamburgerMenu {
  font-size: 20px !important;
  font-family: Cairo;

  text-align: center !important;
}

.listItem {
  font-family: Cairo;

  background-color: rgba(255, 255, 255, 1) !important;
  font-size: 18px !important;
}

.login-btn {
  cursor: pointer;
}
</style>
