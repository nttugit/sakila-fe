import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import Film from './components/Film.vue';
// import Actor from './components/Actor.vue';

const routes = [
    {
        path: '/',
        component: Home,
        name: 'Home',
    },
    {
        path: '/login',
        component: Login,
        name: 'Login',
    },
    {
        path: '/signup',
        component: Register,
        name: 'Register',
    },
    {
        path: '/films',
        component: Film,
        name: 'Film',
    },
    // {
    //     path: '/actors',
    //     component: Actor,
    //     name: 'Actor',
    // },
]



const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;