import React, { useEffect, useState } from "react";
import equipmentApi from "../../api/equipmentApi";
import LoadingSpinner from "../../components/loadingSpinner/loadingSpinner";
import { useNavigate } from "react-router-dom";

export default function Camera() {
  const navigate = useNavigate();
  const [equipmentList, setEquipmentList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEquipments = async () => {
      try {
        // truyền đủ params để lấy page 0, size 100
        const response = await equipmentApi.getAllEquipments(
          0,
          100,
          "equipmentId"
        );
        console.log("📦 Full API response:", response);

        // unwrap thêm 1 cấp data
        const equipments = response?.data?.data?.content || [];
        console.log("✅ Thiết bị lấy được:", equipments);

        const filtered = equipments.filter(
          (item) => item?.category?.categoryId === 1 // Máy ảnh
        );
        console.log("📸 Thiết bị thuộc danh mục Máy ảnh:", filtered);

        setEquipmentList(filtered);
      } catch (error) {
        console.error("❌ Lỗi khi load thiết bị:", error);
        setEquipmentList([]);
      } finally {
        setLoading(false);
      }
    };

    fetchEquipments();
  }, []);

  if (loading) return <LoadingSpinner />;

  if (equipmentList.length === 0) {
    return (
      <div className="text-center text-gray-500 py-10">
        Không có sản phẩm máy ảnh nào.
      </div>
    );
  }

  return (
    <div className="px-20 pt-10 grid grid-cols-3 gap-8 items-stretch">
      {equipmentList.map((equipment) => (
        <div
          key={equipment.equipmentId}
          onClick={() => navigate(`/product/${equipment.equipmentId}`)}
          className="border p-4 rounded shadow-md cursor-pointer hover:bg-gray-100 transition-all flex flex-col h-full"
        >
          <h2 className="text-xl font-semibold mb-2 text-center line-clamp-2">
            {equipment.brand} {equipment.model}
          </h2>
          <p className="text-center mt-auto">
            <strong>Serial:</strong> {equipment.serialNumber}
          </p>
          <p className="text-center mt-auto">
            <strong>Đánh giá:</strong> {equipment.dailyRate}
          </p>
          <p className="text-center mt-auto">
            <strong>Ghi chú:</strong> {equipment.notes}
          </p>
          <p className="text-center mt-auto">
            <strong>Tình trạng:</strong> {equipment.status === "AVAILABLE" ? "Có sẵn" : "Không có sẵn"}
          </p>
          <p className="text-center mt-auto">
            <strong>Giá thuê:</strong> 500.000 VND
          </p>
        </div>
      ))}
    </div>
  );
}
