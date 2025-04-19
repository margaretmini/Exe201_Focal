import { Input, message } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authApi from "../../api/authApi";
import "./register.css";

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    // birthDate: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [checked, setChecked] = useState({
    terms: false,
    updates: false,
    ageConfirmed: false,
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCheck = (e) => {
    setChecked((prev) => ({
      ...prev,
      [e.target.name]: e.target.checked,
    }));
  };

  const allFieldsFilled = Object.values(formData).every(
    (val) => val.trim() !== ""
  );
  const allChecked = Object.values(checked).every((val) => val === true);
  const passwordsMatch = formData.password === formData.confirmPassword;
  const canSubmit = allFieldsFilled && allChecked && passwordsMatch;

  const handleSubmit = async () => {
    if (!passwordsMatch) {
      setError("Mật khẩu và xác nhận mật khẩu không khớp.");
      return;
    }

    try {
      setError("");
      const payload = {
        ...formData,
        ...checked,
      };

      await authApi.register(payload);
      message.success("Đăng ký thành công!");
      navigate("/login");
    } catch (error) {
      const msg =
        error?.response?.data?.message || "Đăng ký thất bại. Vui lòng thử lại!";
      message.error(msg);
    }
  };

  return (
    <div className="flex flex-row justify-center items-center">
      <div className="w-[900px] pt-6">
        <h3 className="text-center font-semibold">TẠO TÀI KHOẢN</h3>
        <p className="uppercase text-center text-[20px]">
          Tạo hồ sơ và hưởng lợi từ các cập nhật về việc giao hàng và quản lý
          trả hàng cũng như các đề xuất được cá nhân hóa
        </p>

        <div className="flex flex-col gap-6 py-10">
          <Input
            name="firstName"
            placeholder="TÊN"
            className="register_input"
            value={formData.firstName}
            onChange={handleChange}
          />
          <Input
            name="lastName"
            placeholder="HỌ"
            className="register_input"
            value={formData.lastName}
            onChange={handleChange}
          />
          {/* <Input
            name="birthDate"
            placeholder="NGÀY SINH"
            className="register_input"
            value={formData.birthDate}
            onChange={handleChange}
          /> */}
          <Input
            name="email"
            placeholder="EMAIL"
            className="register_input"
            value={formData.email}
            onChange={handleChange}
          />
          <Input.Password
            name="password"
            placeholder="MẬT KHẨU"
            className="register_input"
            value={formData.password}
            onChange={handleChange}
          />
          <Input.Password
            name="confirmPassword"
            placeholder="XÁC NHẬN MẬT KHẨU"
            className="register_input"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
        </div>

        <div className="flex flex-col items-start mb-16 mt-5 gap-8">
          <div className="flex flex-row justify-between items-center gap-6">
            <input
              type="checkbox"
              className="w-[30px] h-[30px]"
              name="terms"
              checked={checked.terms}
              onChange={handleCheck}
            />
            <label className="uppercase">
              Tôi đã đọc và hiểu Chính sách bảo mật và tôi đồng ý với Điều khoản
              sử dụng.
            </label>
          </div>
          <div className="flex flex-row justify-between items-center gap-6">
            <input
              type="checkbox"
              className="w-[30px] h-[30px]"
              name="updates"
              checked={checked.updates}
              onChange={handleCheck}
            />
            <label className="uppercase">
              Tôi muốn nhận thông tin cập nhật về các hoạt động của FOCAL.
            </label>
          </div>
          <div className="flex flex-row justify-between items-center gap-6">
            <input
              type="checkbox"
              className="w-[30px] h-[30px]"
              name="ageConfirmed"
              checked={checked.ageConfirmed}
              onChange={handleCheck}
            />
            <label className="uppercase">
              Tôi xác nhận rằng tôi đã đủ 18 tuổi.
            </label>
          </div>
        </div>

        <button
          className={
            canSubmit
              ? "bg-black text-white text-center w-full rounded h-12 hover:bg-gray-800 active:bg-gray-950 cursor-pointer"
              : "bg-gray-300 text-gray-200 text-center w-full rounded h-12 cursor-not-allowed"
          }
          disabled={!canSubmit}
          onClick={handleSubmit}
        >
          TẠO TÀI KHOẢN
        </button>
      </div>
    </div>
  );
}
