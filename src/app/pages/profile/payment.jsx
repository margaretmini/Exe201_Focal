import React from "react";

const payment = () => {
  return (
    <div className="w-full mx-auto py-10 pr-96 pl-40">
      <div className="flex justify-between items-end border-b border-black pb-2">
        <div>
          <label className="text-sm block">Số thẻ</label>
          <p className="text-base font-medium">0123467890</p>
        </div>
        <div>
          <label className="text-sm block">Ngày</label>
          <p className="text-base font-medium">22/12</p>
        </div>
        <div>
          <label className="text-sm block">CVC</label>
          <p className="text-base font-medium">000</p>
        </div>
      </div>
    </div>
  );
};

export default payment;
