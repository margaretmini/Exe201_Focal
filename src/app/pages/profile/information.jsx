import React, { useEffect } from "react";
import userApi from "../../api/userApi.js";

const ProfileForm = () => {
  useEffect(() => {
    const getProfile = async () => {
      try {
        const response = await userApi.getProfile();
        console.log("lay du lieu thành công:", response.data);
      } catch (error) {
        console.error("Lỗi khi login:", error?.response?.data || error.message);
      }
    };

    getProfile();
  }, []);

  return (
    <div className="w-full mx-auto py-10 pr-96 pl-40">
      <form className="space-y-6">
        {/* Họ tên */}
        <div>
          <label className="block text-sm mb-1">Họ Tên</label>
          <input
            type="text"
            defaultValue="ABC123"
            className="w-full border-b border-black outline-none"
          />
        </div>

        {/* Tên đăng nhập */}
        <div>
          <label className="block text-sm mb-1">Tên đăng nhập</label>
          <input
            type="text"
            defaultValue="ABC123"
            className="w-full border-b border-black outline-none"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            defaultValue="ABC123"
            className="w-full border-b border-black outline-none"
          />
        </div>

        {/* Điện thoại */}
        <div>
          <label className="block text-sm mb-1">Điện Thoại</label>
          <input
            type="text"
            defaultValue="ABC123"
            className="w-full border-b border-black outline-none"
          />
        </div>

        {/* Sản phẩm */}
        <div>
          <label className="block text-sm mb-1">Sản phẩm</label>
          <input
            type="text"
            placeholder="Tìm kiếm..."
            className="w-full border-b border-black outline-none"
          />
        </div>

        {/* Hình ảnh */}
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

        {/* Nút hoàn thành */}
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
