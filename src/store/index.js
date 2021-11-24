import { createStore } from "vuex";
import User from "./modules/user";

const store = createStore({
  modules: {
    user: User,
  },
});

export default store;
