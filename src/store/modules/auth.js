import axios from "axios";

const state = () => ({
  loginStatus: "",
});

const getters = {
  getloginStatus(state) {
    return state.loginStatus;
  },
};

const actions = {
  async userLogin({ commit }, payload) {
    const response = await axios
      .post("https://agile-eyrie-70184.herokuapp.com/login", payload, {
        "Access-Control-Allow-Origin": true,
      })
      //   .then(response => {
      //     if(response.status === 200 && response.statusText === "OK" && response.data.token) {
      //         const token = response.data.token;
      //         this.$cookie.set('token', token);
      //         console.log(`success. here is the cookie => ${this.$cookie.get('token')}`)
      //     }
      //   })
      .catch((err) => {
        console.log(err);
      });
    if (response && response.data) {
      commit("setloginStatus", "success");
    } else {
      commit("setloginStatus", "failed");
    }
  },
};

const mutations = {
  setloginStatus(state, payload) {
    state.loginStatus = payload;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
