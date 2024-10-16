import { createApp } from 'vue'
import { loadFonts } from './plugins/webfontloader'
import { createPinia } from 'pinia'
import App from './App.vue'
import 'animate.css';
import Typed from 'typed.js';
import router from './router'
import vuetify from './plugins/vuetify'

loadFonts()

const pinia = createPinia()

createApp(App)
  .use(pinia)
  .use(router)
  .use(vuetify)
  .mount('#app')
