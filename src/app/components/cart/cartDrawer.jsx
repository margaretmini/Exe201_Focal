import React, { useState } from "react";
import { Drawer } from "antd";

const CartDrawer = () => {
  const [openCart, setOpenCart] = useState(false);

  const showDrawer = () => {
    setOpenCart(true);
  };

  const onClose = () => {
    setOpenCart(false);
  };

  const cartData = [
    {
      id: 1,
      image:
        "https://cdn.vjshop.vn/may-anh/medium-format/fujifilm/fujifilm-gfx-100-ii/camera-gfx100-ii-1-500x500.jpg",
      name: "Fujifilm GFX 100 II",
      price: "182.500.000đ",
    },
    {
      id: 2,
      image:
        "https://www.sony.com.vn/image/e85dfc26cc12301bf97c60bb6e0e2ced?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF",
      name: "Sony A7C II",
      price: "48.000.000đ",
    },
    {
      id: 3,
      image:
        "https://cdn.vjshop.vn/may-anh/mirrorless/canon/canon-eos-r5/canon-eos-r5-1-1500x1500.jpg",
      name: "Canon EOS R5",
      price: "102.000.000đ",
    },
    {
      id: 4,
      image: "https://zshop.vn/images/detailed/91/1635408331_1629829.jpg",
      name: "Nikon Z9",
      price: "125.000.000đ",
    },
    {
      id: 5,
      image: "https://zshop.vn/images/detailed/91/1635408331_1629829.jpg",
      name: "Nikon Z9",
      price: "125.000.000đ",
    },
  ];

  return (
    <>
      {/* Nút mở Drawer */}
      <button onClick={showDrawer} className="hover_transaction_section">
        Giỏ hàng
      </button>

      {/* CART DRAWER */}
      <Drawer
        onClose={onClose}
        open={openCart}
        style={{ backgroundColor: "rgba(0, 0, 0, 0.89)", color: "white" }}
        closable={false}
      >
        <p className="pb-6">Giỏ hàng của bạn</p>

        <div className="flex flex-col gap-6 pb-[68px]">
          {cartData?.map((item) => (
            <div
              className="flex flex-row justify-between items-center bg-white rounded overflow-hidden pl-4 pr-2"
              key={item.id}
            >
              <img src={item.image} className="w-[120px] object-cover " />
              <div>
                <p className="text-black w-[170px] font-semibold line-clamp-2">
                  {item.name}
                </p>
                <p className="text-[#0B0B0B] w-[170px] pt-2">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-t from-black from-80% to-[#1f1f1f00] fixed bottom-0 w-[360px] h-[80px] ml-[-24px] flex justify-center items-center">
          <button className="text-center bg-white  text-black w-[317px] h-[40px] rounded-sm">
            THANH TOÁN
          </button>
        </div>
      </Drawer>
    </>
  );
};

export default CartDrawer;
