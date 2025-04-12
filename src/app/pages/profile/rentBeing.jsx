import React from "react";
import { FaChevronRight } from "react-icons/fa"; // Cần cài: `npm i react-icons`

const rentBeing = () => {
  const menuItems = ["Yêu cầu cho thuê thiết bị", "Đơn hoàn thành", "Rút tiền"];

  return (
    <div className="max-w-md mx-auto mt-10 bg-white">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-between py-4 border-b border-black px-2 cursor-pointer hover:bg-gray-100 transition"
        >
          <span className="text-sm font-medium">{item}</span>
          <FaChevronRight className="text-xs" />
        </div>
      ))}
    </div>
  );
};

export default rentBeing;
