import axios from "axios";

const api = axios.create({
  baseURL: "https://68c810475d8d9f51473427eb.mockapi.io/3legant/products",
  timeout: 5000,
});

export default api;
