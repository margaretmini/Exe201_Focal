import React, { useEffect, useState } from "react";
import wishlistApi from "../../api/wishListApi";

const Favorite = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    fetchWishlist();

    setCardData([
      {
        id: 1,
        title: "Canon EOS R6 Mark II",
        code: { label: "Chỉ máy", value: "CN00112233" },
        status: "AVAILABLE",
        amount: "980.000đ/ngày",
        time: "Từ 12 đến 14 tháng Tư, 2025",
        image: "https://cdn.vjshop.vn/camera/canon-eos-r6-mark-ii.jpg",
      },
      {
        id: 2,
        title: "Sony FX3",
        code: { label: "Full bộ", value: "SNX39999" },
        status: "IN_USE",
        amount: "1.400.000đ/ngày",
        time: "Từ 18 đến 20 tháng Tư, 2025",
        image: "https://www.sony.com.vn/image/sony-fx3.png",
      },
    ]);
  }, []);

  const fetchWishlist = async () => {
    try {
      const res = await wishlistApi.getWishlist();
      const data = res.data?.data?.content || [];

      const transformed = data.map((item) => ({
        id: item.id,
        title: item.equipment.model,
        code: {
          label: item.equipment.notes || "Mã thiết bị",
          value: item.equipment.serialNumber,
        },
        status: item.equipment.status,
        amount: item.equipment.dailyRate?.toLocaleString() + "đ/ngày",
        time: "Từ ... đến ...",
        image: item.equipment.image || "https://via.placeholder.com/150",
      }));

      setCardData(transformed);
    } catch (err) {
      console.error("Lỗi lấy wishlist:", err);
    }
  };

  const handleRemove = async (id) => {
    try {
      await wishlistApi.deleteWishItem(id);
      setCardData((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      console.error("Lỗi xoá item:", err);
    }
  };

  return (
    <div className="w-[1600px] pl-8 flex flex-row gap-6">
      {cardData.length === 0 ? (
        <div className="text-gray-500 text-sm italic">
          Hiện tại chưa có món đồ yêu thích.
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
  title,
  code,
  status,
  amount,
  time,
  image,
  onRemove,
}) => {
  return (
    <div className="border h-60 w-[400px] p-4 flex flex-col justify-between text-sm">
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
      <div
        className="text-xs text-right mt-2 underline cursor-pointer text-red-500"
        onClick={() => onRemove(id)}
      >
        Bỏ thích
      </div>
    </div>
  );
};

export default Favorite;
