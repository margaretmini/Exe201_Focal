import React from "react";
import { Button, Dropdown, Space } from "antd";
import {
  FileSearchOutlined,
  LikeOutlined,
  LogoutOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { Link, useNavigate } from "react-router-dom";

const DropDownUsername = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("undecodeToken");
    localStorage.removeItem("decodeToken");
    window.location.reload();
    navigate("/login");
  };

  const email = JSON.parse(localStorage.getItem("decodeToken"));

  const items = [
    {
      key: "1",
      label: (
        <Link to={`/profile/favorite`} className="flex flex-row gap-4">
          <LikeOutlined />
          Yêu thích
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link to={`/profile/order`} className="flex flex-row gap-4">
          <ShoppingCartOutlined />
          Đang thuê
        </Link>
      ),
    },
    // {
    //   key: "3",
    //   label: (
    //     <Link to={`/profile/bargan`} className="flex flex-row gap-4">
    //       <FileSearchOutlined />
    //       Trả giá
    //     </Link>
    //   ),
    // },
    {
      key: "4",
      label: (
        <Link to={`/profile/info`} className="flex flex-row gap-4">
          <UserOutlined />
          Hồ sơ
        </Link>
      ),
    },
    {
      key: "5",
      label: (
        <button className="flex flex-row pt-2 gap-4" onClick={logout}>
          <LogoutOutlined />
          Đăng xuất
        </button>
      ),
    },
  ];

  return (
    <Dropdown
      menu={{ items }}
      placement="bottomRight"
      overlayStyle={{
        border: "1px solid black",
        borderRadius: "0px",
        textAlign: "right",
      }}
    >
      <button className="hover_transaction_section truncate">
        {email?.sub || "Người dùng"}
      </button>
    </Dropdown>
  );
};

export default DropDownUsername;
