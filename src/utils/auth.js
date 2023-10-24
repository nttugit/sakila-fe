// import jwt from 'jsonwebtoken';

export function setAccessToken(token) {
    localStorage.setItem('accessToken', token);
}

export function getAccessToken() {
    return localStorage.getItem('accessToken') || null;
}

export function setRefreshToken(token) {
    localStorage.setItem('refreshToken', token);
}

export function getRefreshToken() {
    return localStorage.getItem('refreshToken') || null;
}

export function logout() {
    localStorage.removeItem('accessToken');
}