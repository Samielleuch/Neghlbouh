import Api from "@/services/Api";

export default {
  requestGPS() {
    return Api().get("area/number");
  }
};
