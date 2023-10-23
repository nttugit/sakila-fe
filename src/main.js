import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js';

import appAxios from './plugins/appAxios'
createApp(App)
    .use(appAxios)
    .use(router) // Use the router
    .mount('#app');