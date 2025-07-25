import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import 'primeicons/primeicons.css'
import './style.css'  // Tailwind 
import App from './App.vue'
import router from './router' 

const app = createApp(App)
app.use(PrimeVue)
app.use(router)
app.mount('#app')
