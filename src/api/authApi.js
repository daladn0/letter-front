import api from './api'
import axios from 'axios'

export const signup = (email, password) => {
    return api.post('/auth/registration', {email, password})
}

export const login = (email, password) => {
    return api.post('/auth/login', {email, password})
}

export const logout = () => {
    return api.post('/auth/logout')
}

export const checkAuth = () => {
    return axios.get('/auth/refresh', { baseURL: process.env.API_URL, withCredentials: true })
}