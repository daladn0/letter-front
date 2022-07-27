import { createStore } from "vuex";
import auth from "@/store/auth";
import toast from "@/store/toast";

export default createStore({
  modules: {
    auth,
    toast,
  },
});
