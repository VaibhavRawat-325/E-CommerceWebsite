import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Product from "./components/Product";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import MainLayout from "./components/MainLayout";

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
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />

      <Route path="/" element={<MainLayout />}>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:product_id/details" element={<Product />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<Cart />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
