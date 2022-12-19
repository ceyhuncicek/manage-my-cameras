import axios from 'axios';

const headers = {};
const auth = JSON.parse(localStorage.getItem('auth'));

if (auth.access_token) {
  headers.Authorization = `Bearer ${auth.access_token}`;
  headers.Accept = 'application/json';
  headers['Content-Type'] = 'application/json';
}

const api = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  headers,
});

api.interceptors.response.use((response) => {
  if (response.status === 401) {
    localStorage.removeItem('auth');
    window.location = '/login';
  }
  return response;
});

export default api;
