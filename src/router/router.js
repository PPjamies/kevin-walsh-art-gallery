import {createMemoryHistory, createRouter} from "vue-router";
import AboutMe from "@/components/about-me/AboutMe.vue";

const routes = [
    {path: '/', component: AboutMe}
]

const router = createRouter({
    history: createMemoryHistory(),
    routes
})

export default router