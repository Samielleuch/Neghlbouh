import Api from "@/services/Api";

export default {
  getDemandes(payload) {
    return Api().post("demande", payload);
  },
  addDemandes(payload) {
    return Api().post("demande/add", payload);
  },
  deleteDemande() {
    return Api().delete(`demande/`);
  },
  cancelDemande(payload) {
    return Api().put("demande/state/", payload);
  }
};
