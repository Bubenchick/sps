import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { setupI18n } from './i18n'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
const i18n = setupI18n()

app.use(i18n)
app.use(router)
app.mount('#app')
