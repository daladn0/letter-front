import { createApp } from "vue";
import App from "./App.vue";
import LoadingPage from '@/views/LoadingPage.vue'
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";

const {checkAuth} = require('@/api/authApi')

function requireAll(r) {
  r.keys().forEach(r);
}

requireAll(require.context("@/assets/svg", true, /\.svg$/));

const loader = createApp(LoadingPage)
loader.mount("#app");

checkAuth()
.then(res => {
  store.dispatch('auth/login',res.data.user)
})
.catch(
  err => console.log(err)
)
.finally(
  () => {
    const app = createApp(App);
    app.use(store).use(router).mount("#app");
  }
)