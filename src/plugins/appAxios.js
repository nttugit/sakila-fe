import axios from 'axios';
import isTokenExpired from '../utils/isTokenExpired'

const $axios = axios
let accessToken = localStorage.getItem("accessToken")?.replaceAll('"','') || ''
if(accessToken && isTokenExpired(accessToken)) {
  try {
    const refreshToken = localStorage.getItem("refreshToken")?.replaceAll('"','')
    const res = await axios.request("http://localhost:3000/api/auth/refresh", {
      method: 'post',
      data: { refreshToken },
      headers: {'Authorization': `Bearer ${accessToken}`}
    })
    if(res.data.success && typeof res.data.data === 'string') {
      localStorage.setItem("accessToken", res.data.data)
      accessToken = res.data.data
    }
  } catch (error) {
    console.log(error)
  }
}
$axios.defaults.baseURL = 'http://localhost:3000/'
$axios.defaults.headers.common = {'Authorization': `Bearer ${accessToken}`}

export default {
  install: (app) => {
    app.config.globalProperties.$axios = $axios
  }
}