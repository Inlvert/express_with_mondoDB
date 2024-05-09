import axios from 'axios';
import CONSTANT from '../constants'

const httpClient = axios.create({
  baseURL: CONSTANT.HTTP_SERVER_URL
});

export const login = (userData) => httpClient.post('/auth/login', userData);

export const registration = (userData) => httpClient.post('/auth/registration', userData);

export const refresh = (refreshToken) => httpClient.post('/auth/refresh', { refreshToken });