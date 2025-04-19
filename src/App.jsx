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
import ForgetPassword from "./app/pages/auth/forgetPassword";
import ResetPassword from "./app/pages/auth/resetPassword";
import Register from "./app/pages/auth/register";
import Blog from "./app/pages/blog/blog";
import BlogDetail from "./app/pages/blog/blogDetail";
import Cart from "./app/pages/cart/cart";
import Policy from "./app/pages/policy/policy";
import PrivacyPolicy from "./app/pages/policy/privacyPolicy";

import Landing from "./app/pages/landing/landing";

import Profile from "./app/pages/profile/userProfile";
import Information from "./app/pages/profile/information";
import Favorite from "./app/pages/profile/favorite";
import Order from "./app/pages/profile/order";
import Bargan from "./app/pages/profile/bargan";
import Delivery from "./app/pages/profile/delivery";
import Payment from "./app/pages/profile/payment";
import Chat from "./app/pages/profile/chat";
import Product from "./app/pages/product/product";
import ProductDetail from "./app/pages/product/productDetail";
import ProductListAll from "./app/pages/product/productListAll";
import Camera from "./app/pages/product/camera";
import Flash from "./app/pages/product/flash";
import Lens from "./app/pages/product/lens";
import Freelancer from "./app/pages/product/freelancer";

//ADMIN
import Admin from "./app/admin/pages/adminLayout";
import AdminDashboard from "./app/admin/pages/dashboard";
import AdminEquipment from "./app/admin/pages/equipment";
import AdminUser from "./app/admin/pages/user";
import AdminCategory from "./app/admin/pages/category";
import AdminBlog from "./app/admin/pages/blog";
import AdminRental from "./app/admin/pages/rental";

function App() {

  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {/* Chỉ hiển thị Navbar/Footer nếu KHÔNG phải admin */}
      {!isAdminRoute && <FocalNav />}
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/landing" element={<Landing />}></Route>
        <Route path="/policy" element={<Policy />}></Route>
        <Route path="/privacy_policy" element={<PrivacyPolicy />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/forgetPassword" element={<ForgetPassword />}></Route>
        <Route path="/resetPassword" element={<ResetPassword />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/blog/:blogId" element={<BlogDetail />}></Route>
        <Route path="/cart" element={<Cart />}></Route>  

        {/* Profile layout with nested routes */}
        <Route path="/profile" element={<Profile />}>
          <Route path="info" index element={<Information />} />
          <Route path="favorite" element={<Favorite />} />
          <Route path="order" element={<Order />} />
          <Route path="bargan" element={<Bargan />} />
          <Route path="delivery" element={<Delivery />} />
          <Route path="payment" element={<Payment />} />
          <Route path="chat" element={<Chat />} />
        </Route>

        <Route path="/product/:id" element={<ProductDetail />} />

        {/* Product with outlet */}
        <Route path="/product" element={<Product />}>
        <Route index element={<ProductListAll />} />
        <Route path="camera" element={<Camera />} />
        <Route path="flash" element={<Flash />} />
        <Route path="lens" element={<Lens />} />
        <Route path="freelancer" element={<Freelancer />} />
      </Route>

        {/* ADMIN ROUTES */}
        <Route path="/admin" element={<Admin />}>

        <Route index element={<AdminDashboard />} />
          <Route path="equipment" element={<AdminEquipment />} />
          <Route path="user" element={<AdminUser />} />
          <Route path="blog" element={<AdminBlog />} />
          <Route path="category" element={<AdminCategory />} />
          <Route path="rental" element={<AdminRental />} />
        </Route>
      </Routes>

      {!isAdminRoute && <FooterFocal />}
    </>
  );
}

export default App;
