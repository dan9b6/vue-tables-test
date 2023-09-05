import "bootstrap/dist/css/bootstrap.css";

import { createApp } from "vue";

import store from "./store/index";
import App from "./App.vue";

createApp(App).use(store).mount("#app");

import "bootstrap/dist/js/bootstrap.js";
