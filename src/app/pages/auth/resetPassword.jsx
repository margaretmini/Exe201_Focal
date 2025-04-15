import { Input } from "antd";
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import authApi from "../../api/authApi.js";
import { message } from "antd";

export default function ResetPassword() {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email;

  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    if (!email) {
      messageApi.warning("Thiếu email, quay lại bước trước.");
      navigate("/forget-password");
    }
  }, [email, messageApi, navigate]);

  const handleResetPassword = async () => {
    if (!otp || !newPassword || !confirmPassword) {
      messageApi.warning("Vui lòng nhập đầy đủ thông tin.");
      return;
    }

    if (newPassword !== confirmPassword) {
      messageApi.error("Mật khẩu xác nhận không khớp.");
      return;
    }

    try {
      await authApi.resetPassword({
        email,
        otp,
        newPassword,
      });
      messageApi.success("Đặt lại mật khẩu thành công!");
      navigate("/login");
    } catch (error) {
      console.error(error);
      messageApi.error("OTP không hợp lệ hoặc có lỗi xảy ra.");
    }
  };

  return (
    <div className="flex flex-row justify-center items-center min-h-screen bg-gray-100">
      {contextHolder}

      <div className="bg-white shadow-md rounded p-8 w-[400px]">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Lấy lại mật khẩu
        </h2>

        <label className="block mb-2 text-gray-700">Mã OTP*</label>
        <Input
          placeholder="Nhập mã OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="mb-6"
        />

        <label className="block mb-2 text-gray-700">Mật khẩu mới*</label>
        <Input.Password
          placeholder="Nhập mật khẩu mới"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="mb-6"
        />

        <label className="block mb-2 text-gray-700">Xác nhận mật khẩu*</label>
        <Input.Password
          placeholder="Nhập lại mật khẩu"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="mb-6"
        />

        <button
          onClick={handleResetPassword}
          className="bg-black text-white w-full py-3 rounded hover:bg-gray-800"
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
