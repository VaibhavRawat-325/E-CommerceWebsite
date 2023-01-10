import axios from "axios";

const DUMMY_PRODUCTS_BASE_URL = "https://dummyjson.com/products/";

const BACKEND_API_BASE_URL = "https://myeasykart.codeyogi.io/";

const handleError = (e) => {
  console.error("here comes the error", e);
};

const cacheData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getProductList = async () => {
  try {
    const response = await axios.get(DUMMY_PRODUCTS_BASE_URL);
    const products = response.data.products;
    cacheData("products", products);
    return products;
  } catch (e) {
    handleError(e);
  }
};

export const getProduct = async (id) => {
  try {
    const response = await axios.get(DUMMY_PRODUCTS_BASE_URL + id);
    const product = response.data;
    cacheData("product", product);
    return product;
  } catch (e) {
    handleError(e);
  }
};

export const callUserVerificatonApi = (token, setUser) => {
  try {
    axios
      .get(BACKEND_API_BASE_URL + "me", {
        headers: { Authorization: token },
      })
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
      });
  } catch (e) {
    handleError(e);
  }
};

export const callLoginApi = (values, setUser) => {
  try {
    axios
      .post(BACKEND_API_BASE_URL + "login", {
        email: values.email,
        password: values.password,
      })
      .then((response) => {
        const { user, token } = response.data;
        cacheData("token", token);
        setUser(user);
      });
  } catch (e) {
    handleError(e);
  }
};
