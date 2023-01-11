import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import MainLayout from "./components/MainLayout";
import { AlertContext, UserContext } from "./components/Context";
import LogIn from "./components/LogIn";
import { uniqueId } from "lodash";
import ProductDetail from "./components/ProductDetail";
import { callUserVerificatonApi } from "./components/Api";
import Loading from "./components/Loading";
import SignUp from "./components/SignUp";

function App() {
  const [alerts, setAlerts] = React.useState([]);
  const [user, setUser] = React.useState();
  const [loading, setLoading] = React.useState(true);

  const token = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    if (token) {
      callUserVerificatonApi(token, setUser);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, []);

  const removeAlert = (alert) => {
    // console.log("remove alert", alert);
    setAlerts((latestOldAlerts) => {
      // console.log("latest old alert", latestOldAlerts);
      return latestOldAlerts.filter((a) => a.id !== alert.id);
    });
  };

  const showAlert = (message, type, dismiss = 4) => {
    const id = uniqueId();
    const alert = { message, type, id };
    setAlerts([...alerts, alert]);

    dismiss &&
      setTimeout(() => {
        removeAlert(alert);
      }, dismiss * 1000);
  };

  if (loading) {
    return (
      <div className="bg-gray-200 h-screen flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <AlertContext.Provider value={{ alerts, showAlert, removeAlert }}>
        <div className="bg-gray-200 mx-auto">
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />\
            <Route path="/" element={<MainLayout />}>
              <Route path="home" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="products" element={<Products />} />
              <Route path="products/:id/details" element={<ProductDetail />} />
              <Route path="contact" element={<Contact />} />
              <Route path="cart" element={<Cart />} />
            </Route>
            <Route path="*" element={<NotFound />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </AlertContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
