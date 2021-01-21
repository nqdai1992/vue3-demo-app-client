import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import { createApp } from 'vue'
import PrimeVue from 'primevue/config'

import BaseButton from 'primevue/button';

import App from './App.vue'
import Router from './router'
import Store from './store'

const app = createApp(App)

app.use(PrimeVue)

app.component('BaseButton', BaseButton)

app.use(Router)
app.use(Store)
app.mount('#app')
