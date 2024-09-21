import {createApp} from "vue";
import router from './router/router.js'
import App from "@/App.vue";

/* styling */
import PrimeVue from "primevue/config";
import './assets/variables.css';
import './assets/themes.css';

createApp(App)
    .use(router)
    .use(PrimeVue)
    .mount('#app')
