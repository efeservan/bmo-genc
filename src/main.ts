import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css' // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'vue-select/dist/vue-select.css'

createApp(App).use(router).mount('#app')
