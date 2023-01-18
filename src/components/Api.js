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

export const callUserVerificatonApi = async (token, setUser, showAlert) => {
  try {
    await axios
      .get(BACKEND_API_BASE_URL + "me", {
        headers: { Authorization: token },
      })
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
      });
    return showAlert("welcome back 😋", "success");
  } catch (e) {
    handleError(e);
    return showAlert(
      "Access denied 😡ye kaise token hai (-_-), you have to login first 😤",
      "fail"
    );
  }
};

export const callLoginApi = async (values, setUser, showAlert) => {
  try {
    await axios
      .post(BACKEND_API_BASE_URL + "login", {
        email: values.email,
        password: values.password,
      })
      .then((response) => {
        const { user, token } = response.data;
        cacheData("token", token);
        setTimeout(() => {
          setUser(user);
        }, 4000);
      });
    return showAlert("login successfull 😊", "success");
  } catch (e) {
    handleError(e);
    return showAlert("login failed 😟", "fail");
  }
};

export const callSigninApi = async (values, setUser, showAlert) => {
  try {
    await axios
      .post(BACKEND_API_BASE_URL + "signup", {
        fullName: values.fullName,
        email: values.email,
        password: values.password,
      })
      .then((response) => {
        const { user, token } = response.data;
        cacheData("token", token);
        setTimeout(() => {
          setUser(user);
        }, 4000);
      });
    return showAlert("signin complete :)", "success");
  } catch (e) {
    handleError(e);
    return showAlert("signin failed :(", "fail");
  }
};
