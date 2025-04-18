import React, { useState, useEffect } from "react";
import { Drawer } from "antd";
import wishlistApi from "../../api/wishListApi"; // import từ folder api của bạn

const CartDrawer = () => {
  const [openCart, setOpenCart] = useState(false);
  const [wishlist, setWishlist] = useState([]);

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
      const data = response.data?.data?.content || [];
      setWishlist(data);
    } catch (error) {
      console.error("Lỗi khi lấy wishlist:", error);
    }
  };

  return (
    <>
      <button onClick={showDrawer} className="hover_transaction_section">
        Giỏ hàng
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
            wishlist.map((item) => {
              const { equipment } = item;
              return (
                <div
                  className="flex flex-row justify-between items-center bg-white rounded overflow-hidden pl-4 pr-2"
                  key={item.id}
                >
                  <img
                    src={equipment?.image || "https://via.placeholder.com/120"}
                    className="w-[120px] h-[100px] object-cover"
                    alt={equipment.model}
                  />
                  <div>
                    <p className="text-black w-[170px] font-semibold line-clamp-2">
                      {equipment.model}
                    </p>
                    <p className="text-[#0B0B0B] w-[170px] pt-2">
                      Giá thuê: {equipment.dailyRate?.toLocaleString()}đ/ngày
                    </p>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </Drawer>
    </>
  );
};

export default CartDrawer;
