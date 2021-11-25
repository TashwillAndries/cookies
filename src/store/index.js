import { createStore } from "vuex";
// import User from "./modules/user";

import authModule from "./modules/auth";

const store = createStore({
  modules: {
    auth: authModule,
  },
});

export default store;
