import Api from "@/services/Api";
export default {
  register(credentials) {
    return Api().post("users/signup", credentials);
  },
  test(test) {
    return Api().get("test", test);
  }
};
