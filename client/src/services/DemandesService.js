import Api from "@/services/Api";
export default {
  getDemandes(payload) {
    return Api().get("demande", payload);
  }
};
