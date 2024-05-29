import 'bootstrap/dist/css/bootstrap.min.css'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.provide('app-message', 'app-messgae입니다')

app.config.globalProperties.msg = 'hello'
app.provide('msg', 'hello 메시지')
app.mount('#app')

import 'bootstrap/dist/js/bootstrap.js'
