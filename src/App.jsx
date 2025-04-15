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
import Delivery from "./app/pages/profile/delivery";
import Payment from "./app/pages/profile/payment";
import Chat from "./app/pages/profile/chat";

//ADMIN
import Admin from "./app/admin/pages/adminLayout";
import AdminDashboard from "./app/admin/pages/dashboard";
import AdminEquipment from "./app/admin/pages/equipment";
import AdminUser from "./app/admin/pages/user";
import AdminCategory from "./app/admin/pages/category";
import AdminBlog from "./app/admin/pages/blog";

function App() {
  const isAdminRoute = location.pathname.startsWith("/admin");
  return (
    <>
      {/* Chỉ hiển thị Navbar/Footer nếu KHÔNG phải admin */}
      {!isAdminRoute && <FocalNav />}
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/privacy_policy" element={<PrivacyPolicy />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:blogId" element={<BlogDetail />} />
        <Route path="/cart" element={<Cart />} />

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

        {/* ADMIN ROUTES */}
        <Route path="/admin" element={<Admin />}>
        <Route index element={<AdminDashboard />} />
          <Route path="equipment" element={<AdminEquipment />} />
          <Route path="user" element={<AdminUser />} />
          <Route path="blog" element={<AdminBlog />} />
          <Route path="category" element={<AdminCategory />} />
        </Route>
      </Routes>

      {!isAdminRoute && <FooterFocal />}
    </>
  );
}

export default App;
