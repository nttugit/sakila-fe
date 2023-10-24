import axios from 'axios';
import { createStore } from 'vuex'
import APIs from "../constants/endpoint.js";
import * as authHandler from '../utils/auth.js';


const store = createStore({
    state: {
        accessToken: authHandler.getAccessToken('accessToken'),
    },
    mutations: {
        SET_ACCESS_TOKEN(state, token) {
            state.accessToken = token;
            authHandler.setAccessToken(token);
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

            const { accessToken, user } = res.data.data;
            commit('SET_ACCESS_TOKEN', accessToken);

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