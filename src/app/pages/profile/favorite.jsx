import React, { useEffect, useState } from "react";
import wishlistApi from "../../api/wishListApi";
import { Link } from "react-router-dom";

const Favorite = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    fetchWishlist();
  }, []);

  const fetchWishlist = async () => {
    try {
      const res = await wishlistApi.wishList();
      const data = res.data?.data || [];

      const transformed = data.map((item) => ({
        id: item.equipmentId, // sửa lại theo đúng key từ response
        replacementValue: item.replacementValue,
        title: item.model,
        code: {
          label: item.notes || "Mã thiết bị",
          value: item.serialNumber,
        },
        status: item.status,
        amount: item.dailyRate,
        time: item.notes,
        brand: item.brand,
        image: item.primaryImageUrl || "https://via.placeholder.com/150",
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
    <div className="w-[1600px] pl-8 flex flex-row gap-6 flex-wrap">
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
  replacementValue,
  title,
  code,
  status,
  amount,
  time,
  brand,
  image,
  onRemove,
}) => {
  return (
    <Link
      to={`/product/${id}`}
      className="border h-60 w-[400px] p-4 flex flex-col justify-between text-sm hover:scale-105 transition duration-300"
    >
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="font-semibold">
          {brand} {title}
        </div>
        <div className="text-right">
          {/* <div className="text-xs">{code.label}</div> */}
          <div className="text-xs">{code.value}</div>
        </div>
      </div>

      {/* Content */}
      <div className="flex gap-4 mt-4">
        <img src={image} alt="camera" className="w-72 h-20 object-cover" />
        <div className="border p-2 text-xs leading-relaxed w-full rounded-xl border-gray-300">
          <div className="font-semibold">Tiền cọc: {replacementValue} đ</div>
          <div>
            Giá thuê: <span className="font-semibold">{amount}đ/1 ngày</span>
          </div>
          <div>{time}</div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-xs text-right mt-2 underline cursor-pointer text-red-500">
        <button onClick={() => onRemove(id)}>Bỏ thích</button>
      </div>
    </Link>
  );
};

export default Favorite;
