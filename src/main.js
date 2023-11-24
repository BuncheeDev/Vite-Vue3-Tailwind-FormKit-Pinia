import { createApp } from 'vue'
import App from './App.vue'
import { plugin, defaultConfig } from '@formkit/vue'
import router from './routes'
import { createPinia } from 'pinia'
import { createRouter, createWebHashHistory } from 'vue-router'
import './style.css'
import "@formkit/themes/genesis";


const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.use(plugin, defaultConfig)
app.use(router)
app.mount('#app')
