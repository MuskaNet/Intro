import 'mdui/mdui.css'
import 'mdui'

import { setColorScheme } from 'mdui/functions/setColorScheme.js'

import '@/assets/main.css'

import { createApp } from 'vue'
import App from '@/App.vue'

setColorScheme('#66ccff')
createApp(App).mount('#app')
