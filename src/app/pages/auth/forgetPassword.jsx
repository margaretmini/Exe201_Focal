import { Input } from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authApi from "../../api/authApi.js"; // Cần có hàm forgotPassword
import { message } from "antd";

export default function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [messageApi, contextHolder] = message.useMessage();

  const navigate = useNavigate();

  const handleForgetPassword = async () => {
    if (!email) {
      messageApi.info("Vui lòng nhập địa chỉ email !");
      return;
    }

    try {
      await authApi.sendOtpResetPassword({ email });
      messageApi.success("Vui lòng kiểm tra email để đặt lại mật khẩu.");
    } catch (error) {
      console.error(error);
      messageApi.error("Email không tồn tại hoặc có lỗi xảy ra.");
    }
  };

  const testNextStep = async () => {
    navigate("/resetPassword", {
      state: {
        email: email,
      },
    });
  };

  return (
    <div className="flex flex-row justify-center items-center min-h-screen bg-gray-100">
      {contextHolder}

      <div className="bg-white shadow-md rounded p-8 w-[400px]">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Lấy lại mật khẩu
        </h2>

        <label className="block mb-2 text-gray-700">Địa chỉ Email*</label>
        <Input
          placeholder="example@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-6 py-2 px-2"
        />

        <button
          onClick={handleForgetPassword}
          className="bg-black text-white w-full py-2 rounded hover:bg-gray-800 mt-5"
        >
          TIẾP TỤC
        </button>

        <p className="text-center mt-4 text-sm text-gray-600">
          <Link to="/login" className="underline font-medium">
            Quay lại đăng nhập
          </Link>
        </p>
      </div>
    </div>
  );
}
