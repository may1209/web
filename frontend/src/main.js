import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:8000/'

loadFonts()

createApp(App)
  .use(router, axios)
  .use(vuetify)
  .mount('#app')
