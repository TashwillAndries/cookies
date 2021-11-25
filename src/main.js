import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import VueCookies from "vue-cookies";

// axios.defaults.baseURL = "https://agile-eyrie-70184.herokuapp.com/";

createApp(App).use(store).use(VueCookies).use(router).mount("#app");
