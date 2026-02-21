import api from "./api";

export async function getUsers() {
  return await api
    .get("/products")
    .then((res) => res.data)
    .catch((err) => {
      console.log("GET error", err);
    });
}
