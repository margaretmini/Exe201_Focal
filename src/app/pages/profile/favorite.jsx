// File: CameraCardList.jsx

import React from "react";

const CameraCard = ({ title, code, status, amount, time, image }) => {
  return (
    <div className="border h-60 w-[500px] p-4 flex flex-col justify-between text-sm">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="font-semibold">{title}</div>
        <div className="text-right">
          <div className="text-xs">{code.label}</div>
          <div className="text-xs">{code.value}</div>
        </div>
      </div>

      {/* Content */}
      <div className="flex gap-4 mt-4">
        <img src={image} alt="camera" className="w-72 h-20 object-cover" />
        <div className="border p-2 text-xs leading-relaxed w-full">
          <div>{status}</div>
          <div>
            Tổng cộng: <span className="font-semibold">{amount}</span>
          </div>
          <div>{time}</div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-xs text-right mt-2 underline cursor-pointer">
        Rút tiền
      </div>
    </div>
  );
};

const favorite = () => {
  const cardData = [
    {
      title: "SONY A6700",
      code: { label: "Chỉ máy", value: "A04000192" },
      status: "Đã hoàn thành",
      amount: "1.200.000đ",
      time: "Từ 10 đến 12 tháng Mười, 24",
      image:
        "https://imagedelivery.net/ZeGtsGSjuQe1P3UP_zk3fQ/a5b067a3-3ff2-4219-d071-9409a6d49f00/storedata",
    },
    {
      title: "SONY A6700",
      code: { label: "", value: "A04000192" },
      status: "Successfully",
      amount: "1.200.000đ",
      time: "Từ 10 đến 12 tháng Mười, 24",
      image:
        "https://imagedelivery.net/ZeGtsGSjuQe1P3UP_zk3fQ/a5b067a3-3ff2-4219-d071-9409a6d49f00/storedata",
    },
  ];

  return (
    <div className="w-full pl-20 flex flex-row justify-start">
      {cardData.map((item, index) => (
        <CameraCard key={index} {...item} />
      ))}
    </div>
  );
};

export default favorite;
