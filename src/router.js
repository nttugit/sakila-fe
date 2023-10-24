import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import Film from './components/Film.vue';
// import isTokenExpired from './utils/isTokenExpired'
// import axios from 'axios';
import Actor from './components/Actor.vue';
import store from './store/auth.js';

const requireAuth = (to, from, next) => {
    if (store.getters.isLoggedIn) {
        next();
    } else {
        next('/login');
    }
}

const routes = [
    {
        path: '/',
        component: Home,
        name: 'Home',
        // beforeEnter: requireAuth,
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
        beforeEnter: requireAuth,
    },
    {
        path: '/actors',
        component: Actor,
        name: 'Actor',
        beforeEnter: requireAuth,
    },
    {
        path: '/logout',
        component: Actor,
        name: 'Logout',
    },
]



const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.beforeEnter)) {
        to.matched.some((record) => record.beforeEnter(to, from, next));
    } else {
        next();
    }
});

// // tạo middleWare check mỗi lần chuyển route, access token còn dùng được không nếu không thì gọi api refresh
// router.beforeEach(async () => {
//     const accessToken = localStorage.getItem("accessToken")
//     if(!isTokenExpired(accessToken)) {
//         console.log("token expired")
//         try {
//             const refreshToken = localStorage.getItem("refreshToken")?.replaceAll('"','')
//             const res = await axios.request("api/auth/refresh", {
//                 method: 'post',
//                 data: { refreshToken },
//                 headers: {'Authorization': `Bearer ${localStorage.getItem("accessToken")?.replaceAll('"','') || ''}`}
//             })
//             if(res.data.success && typeof res.data.data === 'string') {
//                 localStorage.setItem("accessToken", res.data.data)
//             }
//         } catch (error) {
//             console.log(error)
//         }
//     }
//     return true
// })

export default router;