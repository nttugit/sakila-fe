import axios from 'axios';

const $axios = axios
$axios.defaults.baseURL = 'http://localhost:3000/'
$axios.defaults.headers.common = {'Authorization': `Bearer ${localStorage.getItem("accessToken")?.replaceAll('"','') || ''}`}

export default {
  install: (app) => {
    app.config.globalProperties.$axios = $axios
  }
}