import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Gallary from "./pages/Gallary";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import HomeTemplates from "./templates/HomeTemplates";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>

    <Routes>
      <Route path="" element={<HomeTemplates />}>
        <Route index element={<Home />}></Route>
        <Route path="Home" element={<Home />}></Route>
        <Route path="About" element={<About />}></Route>
        <Route path="Blog" element={<Blog />}></Route>
        <Route path="Gallary" element={<Gallary />}></Route>
        <Route path="Login" element={<Login />}></Route>
        <Route path="Profile" element={<Profile />}></Route>    
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Route>
      <Route path="Register" element={<Register />}></Route>
    </Routes>

  </BrowserRouter>
);
