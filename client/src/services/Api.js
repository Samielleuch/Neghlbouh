import axios from "axios";
import store from "./../store"; // path to your Vuex store

export default () => {
  return axios.create({
    baseURL: "http://localhost:8081/api/v1/",
    headers: {
      Authorization: `Bearer ${store.state.token}`
    }
  });
};
