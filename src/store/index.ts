import { defineStore } from "pinia";
import { useRouter } from "vue-router";
import { inputObj } from "@/models/types";

export const useStore = defineStore({
  id: "store",

  state: () => ({
    email: "",
    password: "",
    confirm: "",
    router: useRouter(),
    isLoggedIn: false,
    errMessage: "",
  }),

  getters: {
    currentRoute(state) {
      return state.router.currentRoute.path;
    },
    authForm() {
      const arrOfInputs: inputObj[]= [
        { model: "email", placeholder: "email", type: "email" },
        { model: "password", placeholder: "password", type: "password" },
        { model: "confirm", placeholder: "confirm password", type: "password" },
      ];
      return `${this.currentRoute}` === "/register"
        ? arrOfInputs
        : arrOfInputs.slice(0, 2);
    },
  },
  actions: {},
});
