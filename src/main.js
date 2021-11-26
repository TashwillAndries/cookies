import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";

// axios.defaults.baseURL = "https://agile-eyrie-70184.herokuapp.com/";

createApp(App).use(store).use(router).mount("#app");
