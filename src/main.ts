import { createApp } from 'vue'
import { Quasar } from 'quasar'
import { createPinia } from 'pinia';
import { router } from "./router";

import App from './App.vue'
import './style.css';

const myApp = createApp(App)
const pinia = createPinia();

myApp.use(router);
myApp.use(pinia);

myApp.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
})


// Assumes you have a <div id="app"></div> in your index.html
myApp.mount('#app')