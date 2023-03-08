import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bulma/css/bulma.min.css";

export const app = createApp(App);

app.use(router).use(createPinia()).mount("#app");
