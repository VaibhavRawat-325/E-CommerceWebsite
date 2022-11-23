import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import MainLayout from "./components/MainLayout";
import AlertContext from "./components/AlertContext";
import Login from "./components/Login";
import { uniqueId } from "lodash";
import ProductDetail from "./components/ProductDetail";

function App() {
  const [alerts, setAlerts] = React.useState([]);

  const removeAlert = (alert) => {
    console.log("remove alert", alert);

    setAlerts((latestOldAlerts) => {
      console.log("latest old alert", latestOldAlerts);
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

  const alertData = { alerts, showAlert, removeAlert };

  return (
    <AlertContext.Provider value={alertData}>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />

        <Route path="/" element={<MainLayout />}>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id/details" element={<ProductDetail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
        </Route>

        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AlertContext.Provider>
  );
}

export default App;
