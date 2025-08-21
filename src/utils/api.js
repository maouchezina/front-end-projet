import axios from 'axios';

const API_URL = "http://localhost:5000";

const instance = axios.create({ baseURL: API_URL });

instance.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const api = {
  login: credentials => instance.post('/user/login', credentials),
  register: data => instance.post('/user/register', data),
  getCurrent: () => instance.get('/user/currentuser'),
  getProducts: () => instance.get('/product'),
  getProductsByCategory: cat => instance.get(`/product?category=${cat}`),
  createProduct: formData => instance.post('/product', formData),
  //createProduct: formData => instance.post('/admin/product', formData),
  getCart: () => instance.get('/cart'),
  addToCart: item => instance.post('/cart', item),
  clearCart: () => instance.delete('/cart'),
  placeOrder: () => instance.post('/order'),
  getOrders: () => instance.get('/order')
};
