import 'mdui/mdui.css'
import 'mdui'

import AllLogoIonIcon from 'vue-ionicons/dist/ionicons-logo.js'

import { setColorScheme } from 'mdui/functions/setColorScheme.js'

import '@/assets/main.css'

import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'

setColorScheme('#66ccff')

const app = createApp(App)

app.use(router)
app.use(AllLogoIonIcon)
app.mount('#app')
