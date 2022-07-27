import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";

function requireAll(r) {
  r.keys().forEach(r);
}

requireAll(require.context("@/assets/svg", true, /\.svg$/));

const app = createApp(App);

app.use(store).use(router).mount("#app");
