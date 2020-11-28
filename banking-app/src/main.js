import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import VueHeadSlot from 'vue-head-slot';

import "./assets/style.css";

createApp(App)
  .use(store)
  .use(VueHeadSlot)
  .mount("#app");
