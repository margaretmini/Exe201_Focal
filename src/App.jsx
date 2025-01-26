import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

// ROLL TO TOP WHEN REDIRECT
import ScrollToTop from "./app/routes/redirect/rollToTop";

// IMPORT COMPONENTS
import FocalNav from "./app/components/navbars/focalNav/focalNav";
import FooterFocal from "./app/components/navbars/footer/footerFocal";

// IMPORT PAGES
import HomePage from "./app/pages/homepage/homePage";

import Login from "./app/pages/auth/login";
import Register from "./app/pages/auth/register";

import Blog from "./app/pages/blog/blog";
import BlogDetail from "./app/pages/blog/blogDetail";
import Cart from "./app/pages/cart/cart";
import Policy from "./app/pages/policy/policy";
import PrivacyPolicy from "./app/pages/policy/privacyPolicy";

function App() {
  return (
    <>
      <FocalNav />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/policy" element={<Policy />}></Route>
        <Route path="/privacy_policy" element={<PrivacyPolicy />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/blog/:blogId" element={<BlogDetail />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
      <FooterFocal />
    </>
  );
}

export default App;
