import { Checkbox, Input } from "antd";
import React from "react";
import { Link } from "react-router-dom";

export default function login() {
  return (
    <div className="flex flex-row justify-center items-center ">
      <div className=" w-[600px] h-[440px] pt-16">
        <h3 className="text-center">ĐĂNG NHẬP</h3>
        <div className="flex flex-row justify-between text-gray-500 pb-1">
          <p>Địa chỉ Email*</p>
          <p>*bắt buộc</p>
        </div>
        <Input style={{ border: "1px solid black", borderRadius: "4px" }} />
        <div className="flex flex-row justify-between py-6">
          <div className="flex flex-row justify-between items-center gap-2">
            <input type="checkbox" className="w-[16px] h-[16px]" />
            <label> Ghi nhớ đăng nhập</label>
          </div>
          <Link className="underline font-semibold">Quên mật khẩu</Link>
        </div>
        <button className="bg-black text-white text-center w-full rounded h-12 hover:bg-gray-800 active:bg-gray-950 cursor-pointer">
          TIẾP TỤC
        </button>
        <p className="text-center w-full mt-4">
          <Link to={`/register`} className="underline font-semibold">
            Tạo tài khoản
          </Link>
        </p>
      </div>
    </div>
  );
}
