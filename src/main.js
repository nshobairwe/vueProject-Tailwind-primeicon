import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import 'primeicons/primeicons.css'
import './style.css'  // Tailwind 
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import sw from './locales/sw.json'

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'en',
  messages: {
    en,
    sw
  }
})


const app = createApp(App)
app.use(PrimeVue)
app.use(router)
app.use(i18n)
app.mount('#app')
