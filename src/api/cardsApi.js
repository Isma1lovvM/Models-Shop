// src/api/cardsApi.js
import api from "./api";

export async function getProducts() {
  try {
    const res = await api.get("/products");
    return res.data;
  } catch (err) {
    console.log("GET error", err);
    return [];
  }
}
