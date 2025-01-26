import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./focalNav.css";
import { Drawer } from "antd";
import CartDrawer from "../../cart/cartDrawer";
export default function FocalNav() {
  const [openCart, setOpenCart] = useState(false);

  const showDrawer = () => {
    setOpenCart(true);
  };

  const onClose = () => {
    setOpenCart(false);
  };

  return (
    <nav className="h-[100px] flex flex-row justify-between items-center px-10 placeholder-teal-400 mb-20">
      <Link to={`/`} className="hover_transaction_section">
        Giới thiệu
      </Link>
      <Link to={`/`} className="hover_transaction_section">
        Sản phẩm
      </Link>
      <Link to={`/policy`} className="hover_transaction_section">
        Thông tin
      </Link>
      <Link to={`/`} className="font-bold text-2xl">
        focal
      </Link>
      <Link to={`/blog`} className="hover_transaction_section">
        Bài viết
      </Link>
      <Link to={`/login`} className="hover_transaction_section">
        Đăng nhập
      </Link>
      <CartDrawer />
    </nav>
  );
}
