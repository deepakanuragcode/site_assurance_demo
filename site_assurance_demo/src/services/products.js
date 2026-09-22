import axios from "axios";

const PRODUCTS_URL = "https://dummyjson.com/products";

export async function getProducts() {
  const { data } = await axios.get(PRODUCTS_URL);
  return data.products;
}
