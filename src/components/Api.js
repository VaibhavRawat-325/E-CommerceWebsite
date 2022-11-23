import axios from "axios";

const DUMMY_PRODUCTS_BASE_URL = "https://dummyjson.com/products/";

const handleError = (e) => {
  console.error("here comes the error", e);
};

const cachedData = (data, key) => {
  localStorage.setItem(JSON.stringify(data), key);
};

const getCachedData = (data, key) => {
  return JSON.parse(localStorage.getItem(data), key);
};

export const getProductList = async () => {
  try {
    const response = await axios.get(DUMMY_PRODUCTS_BASE_URL);
    const products = response.data.products;
    cachedData(products, "products");
    return products;
  } catch (e) {
    handleError(e);
  }
};

export const getProduct = async (id) => {
  try {
    const response = await axios.get(DUMMY_PRODUCTS_BASE_URL + id);
    const product = response.data;
    cachedData(product, "product");
    return product;
  } catch (e) {
    handleError(e);
  }
};
