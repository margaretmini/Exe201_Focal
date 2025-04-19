import React, { useEffect, useState } from "react";
import equipmentApi from "../../api/equipmentApi";
import LoadingSpinner from "../../components/loadingSpinner/loadingSpinner";
import { useNavigate } from "react-router-dom";
import wishListApi from "../../api/wishListApi";

export default function ProductListAll() {
  const navigate = useNavigate();
  const [equipmentList, setEquipmentList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [wishlistEquipmentIds, setWishlistEquipmentIds] = useState([]);

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

  const getRandomFallbackImage = () => {
    const index = Math.floor(Math.random() * fallbackImages.length);
    return fallbackImages[index];
  };

  const handleAddToWishlist = async (equipmentId) => {
    if (wishlistEquipmentIds.includes(equipmentId)) {
      alert("Thiết bị này đã có trong danh sách yêu thích! ❤️");
      return;
    }

    try {
      const payload = { equipmentId };
      const response = await wishListApi.createWishItem(payload);

      if (response?.data?.status === "success") {
        alert("Đã thêm vào danh sách yêu thích!");
        setWishlistEquipmentIds((prev) => [...prev, equipmentId]);
      } else {
        alert("Thêm thất bại. Vui lòng thử lại!");
      }
    } catch (error) {
      console.error("❌ Lỗi khi thêm vào wishlist:", error);
      alert("Đã có lỗi xảy ra khi thêm vào danh sách yêu thích.");
    }
  };

  const handleRemoveFromWishlist = async (equipmentId) => {
    const confirm = window.confirm("Bạn có muốn bỏ thích thiết bị này?");
    if (!confirm) return;

    try {
      const response = await wishListApi.deleteWishItem(equipmentId);
      if (response?.data?.status === "success") {
        alert("Đã bỏ thích thiết bị.");
        setWishlistEquipmentIds((prev) =>
          prev.filter((id) => id !== equipmentId)
        );
      } else {
        alert("Không thể bỏ thích. Vui lòng thử lại.");
      }
    } catch (error) {
      console.error("❌ Lỗi khi bỏ thích:", error);
      alert("Đã xảy ra lỗi khi bỏ thích.");
    }
  };

  useEffect(() => {
    const fetchEquipments = async () => {
      try {
        const response = await equipmentApi.getAllEquipments();
        const equipments = response?.data?.data || [];
        const enrichedEquipments = equipments.map((item) => ({
          ...item,
          imageUrl: item.imageUrl?.trim() || getRandomFallbackImage(),
        }));

        const sortedEquipments = enrichedEquipments.sort((a, b) => {
          if (a.status === "AVAILABLE" && b.status !== "AVAILABLE") return -1;
          if (a.status !== "AVAILABLE" && b.status === "AVAILABLE") return 1;
          return 0;
        });

        setEquipmentList(sortedEquipments);
      } catch (error) {
        console.error("❌ Lỗi khi load sản phẩm:", error);
        setEquipmentList([]);
      } finally {
        setLoading(false);
      }
    };

    const fetchWishlist = async () => {
      try {
        const response = await wishListApi.wishList();
        const wishlist = response?.data?.data || [];
        const wishlistIds = wishlist.map((item) => item.equipmentId);
        setWishlistEquipmentIds(wishlistIds);
      } catch (error) {
        console.error("❌ Lỗi khi load wishlist:", error);
      }
    };

    fetchEquipments();
    fetchWishlist();
  }, []);

  if (loading) return <LoadingSpinner />;

  if (equipmentList.length === 0) {
    return (
      <div className="text-center text-gray-500 py-10">
        Không có sản phẩm nào.
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
          <div
            onClick={(e) => {
              e.stopPropagation();
              if (wishlistEquipmentIds.includes(equipment.equipmentId)) {
                handleRemoveFromWishlist(equipment.equipmentId);
              } else {
                handleAddToWishlist(equipment.equipmentId);
              }
            }}
            className={`absolute top-2 right-2 text-sm z-10 cursor-pointer ${
              wishlistEquipmentIds.includes(equipment.equipmentId)
                ? "text-red-500 font-bold"
                : "text-black hover:underline underline"
            }`}
          >
            {wishlistEquipmentIds.includes(equipment.equipmentId)
              ? "♥ Đã thích"
              : "Thích"}
          </div>

          {/* Nội dung chính */}
          <div
            onClick={() => navigate(`/product/${equipment.equipmentId}`)}
            className="cursor-pointer flex flex-col h-full"
          >
            <div>
              <img
                src={equipment.imageUrl}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = getRandomFallbackImage();
                }}
                alt={`${equipment.brand} ${equipment.model}`}
                className="mx-auto h-60 object-contain rounded-lg mt-4"
              />
              <h2 className="text-xl font-semibold text-center text-wrap text-balance text-black mt-2">
                {equipment.brand} {equipment.model}
              </h2>
            </div>

            <div className="mt-auto grid grid-rows-6 gap-1 pt-4 text-center">
              <p className="text-sm">
                <strong>Serial:</strong> {equipment.serialNumber}
              </p>
              <p className="text-sm line-clamp-1">
                <strong>Ghi chú:</strong> {equipment.notes}
              </p>
              <p className="text-sm">
                <strong>Tình trạng:</strong>{" "}
                {equipment.status === "AVAILABLE" ? "Có sẵn" : "Không có sẵn"}
              </p>
              <p className="text-sm">
                <strong>Giá thuê:</strong> {equipment.dailyRate} VND/Ngày
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
