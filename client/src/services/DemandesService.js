import Api from "@/services/Api";
import store from "./../store"; // path to your Vuex store
export default {
  getDemandes(payload) {
    return Api().get("demande", payload);
  },
  addDemandes(payload) {
    return Api().post("demande/add", payload);
  },
  deleteDemande() {
    return Api().delete(`demande/${store.state.currentDemandeId}`);
  }
};
