import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import FooterComponent from './components/FooterComponent.vue'

const app = createApp(App)

app.use(router)

app.component('FooterComponent', FooterComponent)

app.mount('#app')
