import {createRouter, createWebHashHistory} from "vue-router";
import Timer from './pages/Timer.vue';

const routes = [
    {path: '/:hash*', component: Timer}
];
const router = createRouter({
    history: createWebHashHistory(),
    routes
});
export default router;