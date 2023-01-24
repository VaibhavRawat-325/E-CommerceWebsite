import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import MainLayout from "./components/MainLayout";
import LogIn from "./components/LogIn";
import ProductDetail from "./components/ProductDetail";
import SignUp from "./components/SignUp";
import UserRoute from "./components/Routes/UserRoute";
import AuthRoute from "./components/Routes/AuthRoute";
import AlertProvider from "./components/providers/AlertProvider";
import UserProvider from "./components/providers/UserProvider";

function App() {
  return (
    <UserProvider>
      <AlertProvider>
        <div className="bg-gray-200 mx-auto">
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />\
            <Route
              path="/"
              element={
                <UserRoute>
                  <MainLayout />
                </UserRoute>
              }
            >
              <Route path="home" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="products" element={<Products />} />
              <Route path="products/:id/details" element={<ProductDetail />} />
              <Route path="contact" element={<Contact />} />
              <Route path="cart" element={<Cart />} />
            </Route>
            <Route
              path="/login"
              element={
                <AuthRoute>
                  <LogIn />
                </AuthRoute>
              }
            />
            <Route
              path="/signup"
              element={
                <AuthRoute>
                  <SignUp />
                </AuthRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </AlertProvider>
    </UserProvider>
  );
}

export default App;
