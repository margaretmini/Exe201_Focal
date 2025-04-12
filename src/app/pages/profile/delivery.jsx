import React from "react";

export default function delivery() {
  return (
    <div className="w-full mx-auto py-10 pr-96 pl-40">
      <form className="space-y-6">
        {/* Họ tên */}
        <div>
          <label className="block text-lg mb-1 font-semibold pb-2">
            Địa chỉ giao hàng
          </label>
          <input
            type="text"
            defaultValue="Tòa tháp Landmark 81, 772 Điện Biên Phủ, Vinhomes Tân Cảng, Bình Thạnh, Hồ Chí Minh 72324"
            className="w-full border-b border-black outline-none"
          />
        </div>
      </form>
    </div>
  );
}
