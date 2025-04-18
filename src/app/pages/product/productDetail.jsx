import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import equipmentApi from "../../api/equipmentApi";

export default function ProductDetail() {
  const { id } = useParams();
  const [equipment, setEquipment] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

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

  const handleRent = () => {
    if (!startDate || !endDate) {
      alert("Vui lòng chọn đầy đủ ngày bắt đầu và kết thúc.");
      return;
    }
    if (endDate < startDate) {
      alert("Ngày kết thúc không được trước ngày bắt đầu.");
      return;
    }
    const rentalDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1;
    alert(`Bạn sẽ thuê từ ${startDate.toLocaleDateString()} đến ${endDate.toLocaleDateString()} (${rentalDays} ngày)`);
    // TODO: Gửi đơn thuê lên server nếu cần
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
    localStorage.setItem("rentalCart", JSON.stringify([...existingCart, cartItem]));
    alert("Đã thêm vào giỏ hàng!");
  };

  if (!equipment) {
    return <div className="text-center mt-20 text-gray-500">Đang tải chi tiết sản phẩm...</div>;
  }

  return (
    <div className="bg-white flex flex-col items-center py-10 px-4">
      <img
        src={equipment.imageUrl}
        alt={equipment.model}
        className="w-[700px] h-[400px] object-cover rounded mb-6"
      />
      <h2 className="text-2xl font-bold mb-2">
        {equipment.brand} {equipment.model}
      </h2>
      <p className="text-lg mb-1">Serial: {equipment.serialNumber}</p>
      <p className="text-lg mb-1">Tình trạng: {equipment.status}</p>
      <p className="text-lg mb-1">Ghi chú: {equipment.notes}</p>
      <p className="text-lg mb-4">Đánh giá: {equipment.dailyRate} </p>

      {/* Bộ chọn ngày chỉ để thuê ngay */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div>
          <label className="text-lg font-medium mr-2">Từ ngày:</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => {
              setStartDate(date);
              if (endDate && date > endDate) setEndDate(null);
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
            minDate={startDate || new Date()}
            className="border rounded px-3 py-1"
            placeholderText="Chọn ngày kết thúc"
          />
        </div>
      </div>

      {/* Nút hành động */}
      <div className="flex gap-4">
        <button
          onClick={handleRent}
          className="bg-gray-600 hover:bg-gray-400 text-white font-semibold px-6 py-2 rounded"
        >
          Thuê ngay
        </button>
        <button
          onClick={handleAddToCart}
          className="bg-gray-600 hover:bg-gray-400 text-white font-semibold px-6 py-2 rounded"
        >
          Thêm vào giỏ hàng
        </button>
      </div>
    </div>
  );
}