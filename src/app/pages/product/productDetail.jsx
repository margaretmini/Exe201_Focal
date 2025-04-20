import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import equipmentApi from "../../api/equipmentApi";
import rentalApi from "../../api/rentalApi";
import { Modal, message } from "antd"; // 👈 Thêm Modal + message
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ProductDetail() {
  const { id } = useParams();
  const [equipment, setEquipment] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [loading, setLoading] = useState(false);

  const fallbackImages = [
    "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1651922985926-c8fb8c1fe8c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1574494461515-c8005821fbe5?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1495707902641-75cac588d2e9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1519458246479-6acae7536988?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1500634245200-e5245c7574ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1536627217140-899b0bc9d881?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1486574655068-162e94137442?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const getImages = (mainUrl) => {
    const validUrl = mainUrl?.trim();
    return validUrl ? [validUrl, ...fallbackImages] : fallbackImages;
  };

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const response = await equipmentApi.getEquipmentById(id);
        setEquipment(response?.data?.data);
      } catch (error) {
        console.error("Lỗi khi load chi tiết thiết bị:", error);
      }
    };
    fetchDetail();
  }, [id]);

  const handleRent = async () => {
    if (!startDate || !endDate) {
      message.warning("Vui lòng chọn đầy đủ ngày bắt đầu và kết thúc.");
      return;
    }

    const daysDiff = (endDate - startDate) / (1000 * 60 * 60 * 24);

    if (daysDiff < 1) {
      message.warning("Ngày kết thúc phải cách ngày bắt đầu ít nhất 1 ngày.");
      return;
    }

    try {
      setLoading(true);

      const payload = {
        equipmentId: equipment.equipmentId,
        startDate: startDate.toISOString().slice(0, 10),
        endDate: endDate.toISOString().slice(0, 10),
      };

      const response = await rentalApi.createRental(payload);
      if (response?.data?.status === "success") {
        message.success("Thuê thành công! Đang chờ xác nhận...");
      } else {
        message.error("Thuê thất bại. Vui lòng thử lại.");
      }
    } catch (error) {
      console.error("Lỗi khi thuê thiết bị:", error);
      message.error("Có lỗi xảy ra khi thuê thiết bị.");
    } finally {
      setLoading(false);
    }
  };

  const confirmRent = () => {
    if (!startDate || !endDate) {
      message.warning("Vui lòng chọn ngày trước khi thuê.");
      return;
    }

    Modal.confirm({
      title: "Xác nhận thuê thiết bị",
      content: "Bạn có chắc chắn muốn thuê thiết bị này không?",
      okText: "Xác nhận",
      cancelText: "Hủy",
      onOk: () => handleRent(),
    });
  };

  const handleAddToCart = () => {
    const cartItem = {
      equipmentId: equipment.equipmentId,
      brand: equipment.brand,
      model: equipment.model,
      dailyRate: equipment.dailyRate,
      serialNumber: equipment.serialNumber,
      imageUrl: equipment.imageUrl,
    };

    const existingCart = JSON.parse(localStorage.getItem("rentalCart") || "[]");
    localStorage.setItem(
      "rentalCart",
      JSON.stringify([...existingCart, cartItem])
    );
    message.success("Đã thêm vào giỏ hàng!");
  };

  if (!equipment) {
    return (
      <div className="text-center mt-20 text-gray-500">
        Đang tải chi tiết sản phẩm...
      </div>
    );
  }

  const imageList = getImages(equipment?.imageUrl);

  return (
    <div className="bg-white flex flex-col items-center py-10 px-4">
      {/* Slider ảnh */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="w-full max-w-[1000px] h-[600px] mb-6 rounded-xl overflow-hidden"
      >
        {imageList.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={img}
              alt={`equipment-img-${idx}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = fallbackImages[0];
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thông tin thiết bị */}
      <h2 className="text-2xl font-bold mb-2">
        {equipment.brand} {equipment.model}
      </h2>
      <p className="text-lg mb-1">Serial: {equipment.serialNumber}</p>
      <p className="text-lg mb-1">Tình trạng:  {equipment.status === "AVAILABLE" ? "Có sẵn" : "Không có sẵn"}</p>
      <p className="text-lg mb-1">Ghi chú: {equipment.notes}</p>
      <p className="text-lg mb-4">Giá thuê/ngày: {equipment.dailyRate} VND</p>

      {/* Bộ chọn ngày */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div>
          <label className="text-lg font-medium mr-2">Từ ngày:</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => {
              setStartDate(date);
              if (endDate && date <= startDate) setEndDate(null);
            }}
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
            className="border rounded px-3 py-1"
            placeholderText="Chọn ngày bắt đầu"
          />
        </div>

        <div>
          <label className="text-lg font-medium mr-2">Đến ngày:</label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            dateFormat="dd/MM/yyyy"
            minDate={startDate ? new Date(startDate.getTime() + 24 * 60 * 60 * 1000) : new Date()}
            className="border rounded px-3 py-1"
            placeholderText="Chọn ngày kết thúc"
          />
        </div>
      </div>

      {/* Nút hành động */}
      <div className="flex gap-4">
        <button
          onClick={confirmRent}
          disabled={loading}
          className="bg-gray-600 hover:bg-gray-400 text-white font-semibold px-6 py-2 rounded disabled:opacity-50"
        >
          {loading ? "Đang thuê..." : "Thuê ngay"}
        </button>
        <button
          onClick={handleAddToCart}
          className="bg-gray-600 hover:bg-gray-400 text-white font-semibold px-6 py-2 rounded"
        >
          Thêm vào giỏ hàng
        </button>
      </div>

      <style>{`
      .swiper-pagination-bullet {
        background-color: #ffffff !important;
        opacity: 1;
      }
      .swiper-pagination-bullet-active {
        background-color: #9ca3af !important;
      }
      .swiper-button-next,
      .swiper-button-prev {
        color: #9ca3af !important;
      }
      `}</style>
    </div>
  );
}
