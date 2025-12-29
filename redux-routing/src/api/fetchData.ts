import axios from "axios";

const baseUrl = "https://dummyjson.com";

export const fetchProducts = async () => {
  const res = await axios.get(`${baseUrl}/products`);
  return res.data.products;
};

export const fetchSingleProduct = async (id: number) => {
  const res = await axios.get(`${baseUrl}/products/${id}`);
  return res.data;
};
