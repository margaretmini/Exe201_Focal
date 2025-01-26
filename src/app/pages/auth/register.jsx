import { Input } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "./register.css";

export default function register() {
  return (
    <div className="flex flex-row justify-center items-center ">
      <div className=" w-[900px] pt-6">
        <h3 className="text-center font-semibold">TẠO TÀI KHOẢN</h3>
        <p className="uppercase text-center text-[20px]">
          Tạo hồ sơ và hưởng lợi từ các cập nhật về việc giao hàng và quản lý
          trả hàng cũng như các đề xuất được cá nhân hóa
        </p>
        <div className="flex flex-col gap-6 py-10">
          <Input className="register_input" placeholder="TÊN" />
          <Input placeholder="HỌ" className="register_input" />
          <Input placeholder="NGÀY SINH" className="register_input" />
          <Input placeholder="EMAIL" className="register_input" />
          <Input placeholder="MẬT KHẨU" className="register_input" />
          <Input placeholder="XÁC NHẬN MẬT KHẨU" className="register_input" />
          <Input placeholder="TÊN ĐĂNG NHẬP" className="register_input" />
        </div>
        <div className="flex flex-col items-start mb-16 mt-5 gap-8">
          <div className="flex flex-row justify-between items-center gap-6">
            <input type="checkbox" className="w-[30px] h-[30px]" />
            <label className="uppercase">
              Tôi đã đọc và hiểu Chính sách bảo mật và tôi đồng ý với Điều khoản
              sử dụng.
            </label>
          </div>
          <div className="flex flex-row justify-between items-center gap-6">
            <input type="checkbox" className="w-[30px] h-[30px]" />
            <label className="uppercase">
              Tôi muốn nhận thông tin cập nhật về các hoạt động của FOCAL.
            </label>
          </div>
          <div className="flex flex-row justify-between items-center gap-6">
            <input type="checkbox" className="w-[30px] h-[30px]" />
            <label className="uppercase">
              Tôi xác nhận rằng tôi đã đủ 18 tuổi.
            </label>
          </div>
        </div>
        <button className="bg-black text-white text-center w-full rounded h-12 hover:bg-gray-800 active:bg-gray-950 cursor-pointer">
          TẠO TÀI KHOẢN
        </button>
      </div>
    </div>
  );
}
