import React, { useEffect, useState } from "react";
import equipmentApi from "../../api/equipmentApi";
import LoadingSpinner from "../../components/loadingSpinner/loadingSpinner";
import { useNavigate } from "react-router-dom";

export default function Lens() {
  const navigate = useNavigate();
  const [equipmentList, setEquipmentList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEquipments = async () => {
      try {
        // Lấy page 0, size 100 để chắc chắn đủ data
        const response = await equipmentApi.getAllEquipments(0, 100, "equipmentId");
        console.log("📦 Full API response (Lens):", response);

        // unwrap thêm 1 cấp data
        const equipments = response?.data?.data?.content || [];
        console.log("✅ Thiết bị lấy được (Lens):", equipments);

        // Lọc các thiết bị thuộc categoryId = 2 (Ống kính)
        const filtered = equipments.filter(
          item => item?.category?.categoryId === 2
        );
        console.log("📷 Thiết bị Ống kính:", filtered);

        setEquipmentList(filtered);
      } catch (error) {
        console.error("❌ Lỗi khi load Lens:", error);
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
        Không có sản phẩm ống kính nào.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-8 px-20 pt-10">
      {equipmentList.map((equipment) => (
        <div
          key={equipment.equipmentId}
          className="border rounded shadow-md p-4 relative flex flex-col hover:bg-gray-100 transition-all"
        >
          {/* Nút Thích */}
          <div className="absolute top-2 right-2 text-sm text-black hover:underline cursor-pointer z-10 underline">
            Thích
          </div>

          {/* Nội dung chính */}
          <div
            onClick={() => navigate(`/product/${equipment.equipmentId}`)}
            className="cursor-pointer flex flex-col h-full"
          >
            {/* Phần đầu: ảnh + tiêu đề */}
            <div>
              <img
                src={equipment.imageUrl || "/placeholder.jpg"}
                alt={`${equipment.brand} ${equipment.model}`}
                className="mx-auto h-40 object-contain"
              />
              <h2 className="text-xl font-semibold text-center text-wrap text-balance text-black mt-2">
                {equipment.brand} {equipment.model}
              </h2>
            </div>

            {/* Phần dưới: tự đẩy xuống cùng vị trí ở tất cả card */}
            <div className="mt-auto grid grid-rows-6 gap-1 pt-4 text-center">
              <p className="text-sm">
                <strong>Serial:</strong> {equipment.serialNumber}
              </p>
              <p className="text-sm">
                <strong>Đánh giá:</strong> {equipment.dailyRate}
              </p>
              <p className="text-sm line-clamp-1">
                <strong>Ghi chú:</strong> {equipment.notes}
              </p>
              <p className="text-sm">
                <strong>Tình trạng:</strong>{" "}
                {equipment.status === "AVAILABLE" ? "Có sẵn" : "Không có sẵn"}
              </p>
              <p className="text-sm">
                <strong>Giá thuê:</strong> 500.000 VND/ngày
              </p> <br />

              <button
                className="text-sm text-black hover:underline text-left underline cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  console.log("🛒 Thêm vào giỏ hàng:", equipment.equipmentId);
                }}
              >
                Thêm vào giỏ hàng
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}