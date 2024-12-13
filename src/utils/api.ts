import axios from 'axios';
import { API_CONFIG } from './constants';
import { auth } from './auth';

const api = axios.create(API_CONFIG);

// Request interceptor for adding auth token
api.interceptors.request.use(
  (config) => {
    const token = auth.getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for handling errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      auth.clearSession();
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// API endpoints
export const endpoints = {
  auth: {
    login: (data: any) => api.post('/auth/login', data),
    register: (data: any) => api.post('/auth/register', data),
    forgotPassword: (data: any) => api.post('/auth/forgot-password', data),
    resetPassword: (token: string, data: any) => api.post(`/auth/reset-password/${token}`, data)
  },
  products: {
    getAll: () => api.get('/products'),
    getById: (id: number) => api.get(`/products/${id}`),
    create: (data: any) => api.post('/products', data),
    update: (id: number, data: any) => api.put(`/products/${id}`, data),
    delete: (id: number) => api.delete(`/products/${id}`)
  },
  orders: {
    create: (data: any) => api.post('/orders', data),
    getAll: () => api.get('/orders'),
    getById: (id: string) => api.get(`/orders/${id}`),
    updateStatus: (id: string, status: string) => api.put(`/orders/${id}/status`, { status })
  },
  cart: {
    get: () => api.get('/cart'),
    addItem: (data: any) => api.post('/cart/items', data),
    updateItem: (id: number, data: any) => api.put(`/cart/items/${id}`, data),
    removeItem: (id: number) => api.delete(`/cart/items/${id}`),
    clear: () => api.delete('/cart')
  }
};

export default api;