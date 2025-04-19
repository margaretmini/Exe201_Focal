import React, { useEffect, useState } from "react";
import userApi from "../../api/userApi.js";
import { message } from "antd";

const ProfileForm = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    address: "", // ✅ Thêm trường địa chỉ
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await userApi.updateProfile(data);
      messageApi.success("Cập nhật hoàn tất !");
    } catch (error) {
      console.error(
        "Lỗi khi cập nhật:",
        error?.response?.data || error.message
      );
    }
  };

  useEffect(() => {
    const getProfile = async () => {
      try {
        const response = await userApi.getProfile();
        setData(response.data?.data);
      } catch (error) {
        console.error(
          "Lỗi khi lấy thông tin:",
          error?.response?.data || error.message
        );
      }
    };
    getProfile();
  }, []);

  return (
    <div className="w-full mx-auto py-10 pr-96 pl-40">
      {contextHolder}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm mb-1">Họ & Tên đệm</label>
          <input
            type="text"
            name="firstName"
            value={data?.firstName || ""}
            onChange={handleChange}
            className="w-full border-b border-black outline-none"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Tên</label>
          <input
            type="text"
            name="lastName"
            value={data?.lastName || ""}
            onChange={handleChange}
            className="w-full border-b border-black outline-none"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Email & Tên Đăng Nhập</label>
          <input
            type="email"
            name="email"
            value={data?.email || ""}
            onChange={handleChange}
            className="w-full border-b border-black outline-none"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Điện Thoại</label>
          <input
            type="text"
            name="phone"
            value={data?.phone || ""}
            onChange={handleChange}
            className="w-full border-b border-black outline-none"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Ngày Sinh</label>
          <input
            type="date"
            name="dateOfBirth"
            value={data?.dateOfBirth || ""}
            onChange={handleChange}
            className="w-full border-b border-black outline-none"
          />
        </div>

        {/* ✅ Trường địa chỉ mới */}
        <div>
          <label className="block text-sm mb-1">Địa chỉ</label>
          <input
            type="text"
            name="address"
            value={data?.address || ""}
            onChange={handleChange}
            className="w-full border-b border-black outline-none"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Hình ảnh</label>
          <input
            type="file"
            multiple
            accept="image/*"
            className="w-full border-b border-black pt-1"
          />
          <p className="text-xs text-gray-400 mt-1">Chèn 5 ảnh</p>
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 uppercase tracking-wide"
          >
            Hoàn thành
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
