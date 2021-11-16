import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import TheNavbar from "./components/TheNavbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Categories from "./pages/Categories";
import Products from "./pages/Products";
import Register from "./pages/Register";

import { setCridentials } from "./features/auth/authSlice";

import "./App.css";
import CheckToken from "./components/CheckToken";

function App() {
  return (
    <div className="App">
      <TheNavbar />
      {/* CHECK TOEKN EXPIRATION ON EVERY ROUTE CHANGE */}
      <CheckToken />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
