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
import Product from "./app/pages/product/product";
import Landing from "./app/pages/landing/landing";
import ProductDetail from "./app/pages/product/ProductDetail";
import Profile from "./app/pages/profile/userProfile";
import Information from "./app/pages/profile/information";
import Favorite from "./app/pages/profile/favorite";
import Order from "./app/pages/profile/order";
import Bargan from "./app/pages/profile/bargan";
import RentBeing from "./app/pages/profile/rentBeing";
import Delivery from "./app/pages/profile/delivery";
import Payment from "./app/pages/profile/payment";
import Chat from "./app/pages/profile/chat";

function App() {
  return (
    <>
      <FocalNav />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/landing" element={<Landing />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/product/:productId" element={<ProductDetail />}></Route>
        <Route path="/policy" element={<Policy />}></Route>
        <Route path="/privacy_policy" element={<PrivacyPolicy />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/blog/:blogId" element={<BlogDetail />}></Route>
        <Route path="/cart" element={<Cart />}></Route>

        {/* OUTLET USING*/}
        <Route path="/profile" element={<Profile />}>
          <Route path="info" index element={<Information />}></Route>
          <Route path="favorite" element={<Favorite />}></Route>
          <Route path="order" element={<Order />}></Route>
          <Route path="bargan" element={<Bargan />}></Route>
          <Route path="rentBeing" element={<RentBeing />}></Route>
          <Route path="delivery" element={<Delivery />}></Route>
          <Route path="payment" element={<Payment />}></Route>
          <Route path="chat" element={<Chat />}></Route>
        </Route>
      </Routes>
      <FooterFocal />
    </>
  );
}

export default App;
