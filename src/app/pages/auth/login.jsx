import { Input, message } from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authApi from "../../api/authApi.js";
import { jwtDecode } from "jwt-decode";

export default function Login() {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleLogin = async () => {
    if (!password || !email) {
      messageApi.info("Hãy điền đầy đủ thông tin đăng nhập !");
      return;
    }

    try {
      const response = await authApi.login({ email, password });

      const rawToken = response.data?.data;
      if (!rawToken) {
        messageApi.error("Không nhận được token từ server !");
        return;
      }

      const decodedToken = jwtDecode(rawToken);
      console.log("🔐 Token giải mã:", decodedToken);
      setTimeout(() => {
        window.location.reload();
      }, 5000);

      // Lưu token
      localStorage.setItem("decodeToken", JSON.stringify(decodedToken));
      localStorage.setItem("undecodeToken", rawToken);

      // Lấy role từ token
      const role = decodedToken.role || decodedToken.roles?.[0];

      if (role === "ROLE_ADMIN") {
        messageApi.success("Đăng nhập thành công với quyền Admin!");
        navigate("/admin");
      } else if (role === "ROLE_CUSTOMER") {
        messageApi.success("Đăng nhập thành công với quyền Khách hàng!");
        navigate("/");
      } else {
        messageApi.warning("Không xác định được quyền truy cập!");
        navigate("/");
      }

      // Reload để đảm bảo load lại toàn bộ app
      setTimeout(() => window.location.reload(), 500);
    } catch (error) {
      console.error("❌ Lỗi đăng nhập:", error);
      messageApi.error("Có lỗi khi đăng nhập, hãy thử lại !");
    }
  };

  return (
    <div className="flex flex-row justify-center items-center ">
      {contextHolder}

      <div className="w-[600px] h-[440px] pt-16">
        <h3 className="text-center">ĐĂNG NHẬP</h3>

        <div className="flex flex-row justify-between text-gray-500 pb-1">
          <p>Địa chỉ Email*</p>
          <p>*bắt buộc</p>
        </div>
        <Input
          style={{ border: "1px solid black", borderRadius: "4px" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="flex flex-row justify-between text-gray-500 pb-1 pt-4">
          <p>Mật khẩu*</p>
          <p>*bắt buộc</p>
        </div>
        <Input.Password
          style={{ border: "1px solid black", borderRadius: "4px" }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="flex flex-row justify-between py-6">
          <div className="flex flex-row items-center gap-2">
            <input
              type="checkbox"
              className="w-[16px] h-[16px]"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            <label> Ghi nhớ đăng nhập</label>
          </div>
          <Link to={`/forgetPassword`} className="underline font-semibold">
            Quên mật khẩu
          </Link>
        </div>

        <button
          onClick={handleLogin}
          className="bg-black text-white text-center w-full rounded h-12 hover:bg-gray-800 active:bg-gray-950 cursor-pointer"
        >
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
