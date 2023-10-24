import axios from 'axios';
import { createStore } from 'vuex'
import APIs from "../constants/api.js";
import * as authHandler from '../utils/auth.js';


const store = createStore({
    state: {
        accessToken: authHandler.getAccessToken('accessToken'),
        refreshToken: authHandler.getRefreshToken('refreshToken'),
    },
    mutations: {
        SET_ACCESS_TOKEN(state, token) {
            state.accessToken = token;
            authHandler.setAccessToken(token);
        },
        SET_REFRESH_TOKEN(state, token) {
            state.refreshToken = token;
            authHandler.setRefreshToken(token);
        },
        LOGOUT(state) {
            state.accessToken = null;
            authHandler.logout();
        }
    },
    actions: {
        async login({ commit }, data) {
            const res = await axios.post(APIs.AUTH.LOGIN, data);
            console.log(res.data.data.user.username)

            const { accessToken, refreshToken, user } = res.data.data;
            commit('SET_ACCESS_TOKEN', accessToken);
            commit('SET_REFRESH_TOKEN', refreshToken);

            localStorage.setItem("userName", user.username);
        },
        logout({ commit }) {
            commit('LOGOUT');   
        },
    },
    getters: {
        isLoggedIn: (state) => !!state.accessToken,
    }
})

export default store;