import 'mdui/mdui.css'
import 'mdui'

import { setColorScheme } from 'mdui/functions/setColorScheme.js'

import '@/assets/main.css'

import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'

setColorScheme('#66ccff')

const app = createApp(App)

app.use(router)
app.mount('#app')
