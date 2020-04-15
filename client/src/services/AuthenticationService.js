import Api from "@/services/Api";

export default {
  register(credentials) {
    return Api().post("users/signup", credentials);
  },
  signIn(credentials) {
    return Api().post("users/signin", credentials);
  },
  reset(credentials) {
    return Api().put("users/reset", credentials);
  },
  test(test) {
    return Api().get("test", test);
  }
};
