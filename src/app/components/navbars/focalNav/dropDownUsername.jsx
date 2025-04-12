import React from "react";
import { Button, Dropdown, Space } from "antd";
import {
  FileSearchOutlined,
  LikeOutlined,
  LogoutOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
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
        Đặt hàng
      </Link>
    ),
  },
  {
    key: "3",
    label: (
      <Link to={`/profile/bargan`} className="flex flex-row gap-4">
        <FileSearchOutlined />
        Trả giá
      </Link>
    ),
  },
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
      <button className="flex flex-row pt-2 gap-4">
        <LogoutOutlined />
        Đăng xuất
      </button>
    ),
  },
];
const DropDownUsername = () => (
  <Dropdown
    menu={{
      items,
    }}
    placement="bottomRight"
    overlayStyle={{
      border: "1px solid black",
      borderRadius: "0px",
      textAlign: "right",
    }}
  >
    <button className="hover_transaction_section">Username123</button>
  </Dropdown>
);
export default DropDownUsername;
