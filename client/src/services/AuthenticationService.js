import Api from "@/services/Api";

export default {
  register(credentials) {
    return Api().post("users/signup", credentials);
  },
  update(credentials) {
    return Api().put("users", credentials);
  },
  signIn(credentials) {
    return Api().post("users/signin", credentials);
  },
  reset(credentials) {
    return Api().post("users/store-password", credentials);
  },
  verifyToken(token) {
    return Api().get("users/verify-token", token);
  },
  sendResetMail(data) {
    return Api().post("users/reset-password", data);
  },
  test(test) {
    return Api().get("test", test);
  }
};
