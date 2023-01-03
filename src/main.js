import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import FooterComponent from './components/FooterComponent.vue'
import NavbarComponent from './components/NavbarComponent.vue'

const app = createApp(App)
app.use(router)
app.component('NavbarComponent', NavbarComponent)
app.component('FooterComponent', FooterComponent)

app.mount('#app')
