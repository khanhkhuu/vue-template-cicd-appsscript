import { createApp } from "vue";
import { Quasar } from "quasar";
import { createPinia } from "pinia";
import { router } from "./router";

import App from "./App.vue";
import "./style.css";

const myApp = createApp(App);
const pinia = createPinia();

myApp.use(router);
myApp.use(pinia);

myApp.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
});

if (import.meta.env.PROD) {
  google.script.url.getLocation(async function (location) {
    await router.replace(location.hash);
    router.beforeEach((to) => {
      google.script.history.push({}, {}, to.fullPath);
    });
    myApp.mount("#app");
  });
}
