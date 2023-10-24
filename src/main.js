import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js';
import authStore from './store/auth.js';
import appAxios from './plugins/appAxios'

const app = createApp(App);

app.use(appAxios);
app.use(authStore);
app.use(router);

app.mount('#app');