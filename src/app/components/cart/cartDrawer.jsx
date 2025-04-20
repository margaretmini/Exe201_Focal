import React, { useState, useEffect } from "react";
import { Drawer } from "antd";
import wishlistApi from "../../api/wishListApi"; // import từ folder api của bạn

const CartDrawer = () => {
  const [openCart, setOpenCart] = useState(false);
  const [wishlist, setWishlist] = useState([]);

  const fallbackImages = [
    "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1651922985926-c8fb8c1fe8c4?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1574494461515-c8005821fbe5?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1495707902641-75cac588d2e9?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?q=80&w=2076&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519458246479-6acae7536988?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1500634245200-e5245c7574ef?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1536627217140-899b0bc9d881?q=80&w=2076&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1486574655068-162e94137442?q=80&w=2070&auto=format&fit=crop",
  ];

  const getRandomImage = () => {
    const index = Math.floor(Math.random() * fallbackImages.length);
    return fallbackImages[index];
  };

  const showDrawer = () => {
    setOpenCart(true);
  };

  const onClose = () => {
    setOpenCart(false);
  };

  useEffect(() => {
    if (openCart) {
      fetchWishlist();
    }
  }, [openCart]);

  const fetchWishlist = async () => {
    try {
      const response = await wishlistApi.wishList();
      const data = response?.data?.data;

      if (Array.isArray(data)) {
        setWishlist(data);
      } else {
        setWishlist([]);
      }
    } catch (error) {
      console.error("Lỗi khi lấy wishlist:", error);
      setWishlist([]);
    }
  };

  return (
    <>
      <button onClick={showDrawer} className="hover_transaction_section">
        Yêu thích
      </button>

      <Drawer
        onClose={onClose}
        open={openCart}
        style={{ backgroundColor: "rgba(0, 0, 0, 0.89)", color: "white" }}
        closable={false}
      >
        <p className="pb-6">Danh sách yêu thích</p>

        <div className="flex flex-col gap-6 pb-[68px]">
          {wishlist.length === 0 ? (
            <p className="text-white">Chưa có sản phẩm yêu thích nào.</p>
          ) : (
            wishlist.map((item) => (
              <div
                className="flex flex-row justify-between items-center bg-white rounded overflow-hidden pl-4 pr-2"
                key={item.equipmentId}
              >
                <img
                  src={item.primaryImageUrl?.trim() || getRandomImage()}
                  className="w-[120px] h-[100px] object-cover p-2" // Thêm padding cho ảnh
                  alt={item.model || "Không có tên"}
                />
                <div>
                  <p className="text-black w-[170px] font-semibold line-clamp-2">
                    {item.model || "Không rõ thiết bị"}
                  </p>
                  <p className="text-[#0B0B0B] w-[170px] pt-2">
                    Giá thuê: {item.dailyRate?.toLocaleString() || "N/A"}VND/ngày
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </Drawer>
    </>
  );
};

export default CartDrawer;
