import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import VueLazyload from 'vue-lazyload'


const app = createApp(App)
const pinia = createPinia()

app.use(router).use(pinia).use(VueLazyload).mount('#app')
