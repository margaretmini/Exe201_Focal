import React from "react";
import { Button, Dropdown, Space } from "antd";
import {
  FileSearchOutlined,
  LikeOutlined,
  LogoutOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
const items = [
  {
    key: "1",
    label: (
      <div className="flex flex-row gap-4">
        <LikeOutlined />
        Yêu thích
      </div>
    ),
  },
  {
    key: "2",
    label: (
      <div className="flex flex-row gap-4">
        <ShoppingCartOutlined />
        Đặt hàng
      </div>
    ),
  },
  {
    key: "3",
    label: (
      <div className="flex flex-row gap-4">
        <FileSearchOutlined />
        Trả giá{" "}
      </div>
    ),
  },
  {
    key: "4",
    label: (
      <div className="flex flex-row gap-4">
        <UserOutlined />
        Hồ sơ
      </div>
    ),
  },

  {
    key: "5",
    label: (
      <div className="flex flex-row pt-2 gap-4">
        <LogoutOutlined />
        Đăng xuất
      </div>
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
