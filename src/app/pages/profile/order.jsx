import React, { useEffect, useState } from "react";
import wishlistApi from "../../api/wishlistApi"; // Đổi lại đúng file API
import rentalApi from "../../api/rentalApi";

const Order = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    fetchWishlist();
  }, []);

  const fetchWishlist = async () => {
    try {
      const res = await rentalApi.myRental();
      const data = res.data?.data || [];

      const filtered = data.filter((item) => item.status !== "CANCELLED");

      const transformed = filtered.map((item) => ({
        id: item.rentalId,
        replacementValue: item.totalAmount,
        title: item.equipmentModel,
        code: {
          label: item.notes || "Mã thiết bị",
          value: item.serialNumber,
        },
        status: item.status,
        amount: item.dailyRate,
        time: item.startDate,
        endTime: item.endDate,
        brand: item.equipmentBrand,
        image: item.primaryImageUrl || "https://via.placeholder.com/150",
      }));

      setCardData(transformed);
    } catch (err) {
      console.error("Lỗi lấy danh sách thuê:", err);
    }
  };

  const handleRemove = async (id) => {
    try {
      await wishlistApi.cancelRental(id);
      setCardData((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      console.error("Lỗi xoá item:", err);
    }
  };

  return (
    <div className="w-[1600px] pl-8 flex flex-row gap-6 flex-wrap">
      {cardData.length === 0 ? (
        <div className="text-gray-500 text-sm italic">
          Hiện tại chưa có món đồ thuê.
        </div>
      ) : (
        cardData.map((item) => (
          <CameraCard key={item.id} {...item} onRemove={handleRemove} />
        ))
      )}
    </div>
  );
};

const CameraCard = ({
  id,
  replacementValue,
  title,
  code,
  status,
  amount,
  time,
  endTime,
  brand,
  image,
  onRemove,
}) => {
  return (
    <div className="border h-60 w-[400px] p-4 flex flex-col justify-between text-sm">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="font-semibold">
          {brand} {title}
        </div>
        <div className="text-right">
          <div className="text-xs">{code.value}</div>
        </div>
      </div>

      {/* Content */}
      <div className="flex gap-4 mt-4">
        <img src={image} alt="camera" className="w-72 h-20 object-cover" />
        <div className="border border-gray-300 rounded-3xl p-2 text-xs leading-relaxed w-full">
          <div className="font-semibold text-gray-800 text-[15px] text-right">
            Từ ngày {time} <br /> đến {endTime}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-2">
        <div className="text-xs text-gray-600  uppercase font-semibold text-[14px]">
          {status === "PENDING" ? "Chờ xác nhận" : "Đã xác nhận"}
        </div>
        <div
          className="text-xs underline cursor-pointer text-red-500"
          onClick={() => onRemove(id)}
        >
          Dừng Thuê
        </div>
      </div>
    </div>
  );
};

export default Order;
