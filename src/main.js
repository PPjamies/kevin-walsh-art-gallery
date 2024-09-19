import {createApp} from "vue";
import PrimeVue from "primevue/config";
import App from "@/App.vue";

/* styling */
import './assets/variables.css';
import './assets/themes.css';

const app = createApp(App);

app.use(PrimeVue);
app.mount('#app')
