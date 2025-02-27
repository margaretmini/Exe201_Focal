import React from "react";
import { Link } from "react-router-dom";
import "./product.css";

export default function product() {
  const data = [
    {
      id: 1,
      name: "SONY A6700",
      sensor: "APS-C E-mount",
      sensor_description: "(Chỉ máy)",
      number: "A04000192",
      status: "CÓ SẴN",
      price: "600.000 VND",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3LFWsHfepOvvxH58p-kNwRYd7xtcFXzFkIw&s",
    },
    {
      id: 2,
      name: "SONY A6700",
      sensor: "APS-C E-mount",
      sensor_description: "(Chỉ máy)",
      number: "A04000192",
      status: "CÓ SẴN",
      price: "600.000 VND",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3LFWsHfepOvvxH58p-kNwRYd7xtcFXzFkIw&s",
    },
    {
      id: 3,
      name: "SONY A6700",
      sensor: "APS-C E-mount",
      sensor_description: "(Chỉ máy)",
      number: "A04000192",
      status: "CÓ SẴN",
      price: "600.000 VND",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3LFWsHfepOvvxH58p-kNwRYd7xtcFXzFkIw&s",
    },
    {
      id: 4,
      name: "SONY A6700",
      sensor: "APS-C E-mount",
      sensor_description: "(Chỉ máy)",
      number: "A04000192",
      status: "CÓ SẴN",
      price: "600.000 VND",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3LFWsHfepOvvxH58p-kNwRYd7xtcFXzFkIw&s",
    },
    {
      id: 5,
      name: "SONY A6700",
      sensor: "APS-C E-mount",
      sensor_description: "(Chỉ máy)",
      number: "A04000192",
      status: "CÓ SẴN",
      price: "600.000 VND",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3LFWsHfepOvvxH58p-kNwRYd7xtcFXzFkIw&s",
    },
    {
      id: 6,
      name: "SONY A6700",
      sensor: "APS-C E-mount",
      sensor_description: "(Chỉ máy)",
      number: "A04000192",
      status: "CÓ SẴN",
      price: "600.000 VND",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3LFWsHfepOvvxH58p-kNwRYd7xtcFXzFkIw&s",
    },
  ];
  return (
    <div>
      <div className="flex px-20 justify-between">
        <span class="text-black text-4xl font-normal">
          <p>TẤT CẢ SẢN PHẨM</p>
          <br />
        </span>
        <span class="text-black text-4xl font-normal">
          <p>TÌM KIẾM</p>
          <br />
        </span>
      </div>
      <div className="flex description px-20 justify-between">
        <span class="text-black text-1xl font-normal">
          <p>
            Ứng dụng của chúng tôi cung cấp giải pháp dễ dàng và linh hoạt cho
            các nhiếp ảnh gia, nhà làm phim và người sáng tạo nội <br />
            dung để thuê máy ảnh, ống kính chất lượng cao và studio được trang
            bị đầy đủ. Với mạng lưới đối tác rộng khắp, bạn có thể <br />
            tìm thấy thiết bị hoàn hảo cho bất kỳ dự án nào, dù lớn hay nhỏ, và
            thuê theo điều kiện của bạn. Tiết kiệm tiền trong khi vẫn
            <br />
            tiếp cận được thiết bị hàng đầu mà không cần cam kết mua.
          </p>
          <br />
          <br />
        </span>
        <span class="text-1xl font-normal">
          <label>
            <input
              type="text"
              className="searchBox"
              placeholder="Nhập sản phẩm"
            />
          </label>
          <br />
          <br />
        </span>
      </div>
      <div className="filter flex flex-row justify-center gap-x-[60px] gap-y-[20px] px-16 ">
        <Link className="link">
          <div className="filter1">
            <p>
              Thuê <br /> máy ảnh
            </p>
          </div>
        </Link>
        <Link className="link">
          <div className="filter2">
            <p>
              Dụng cụ <br /> máy ảnh
            </p>
          </div>
        </Link>
        <Link className="link">
          <div className="filter3">
            <p>Studio</p>
          </div>
        </Link>
        <Link className="link">
          <div className="filter4">
            <p>Freelancer</p>
          </div>
        </Link>
      </div>

      <div className=" flex flex-row justify-start gap-x-[104px] gap-y-20 px-20 flex-wrap">
        {data?.map((product) => (
          <Link
            to={`/product/${product.id}`}
            className=" product hover:shadow-2xl transition-all duration-300 transform hover:scale-105 h-[550px] w-[380px]"
          >
            <div className="flex flex-col blog_container" key={product.id}>
              <Link>
                <p className="product-bookmark">Thích</p>
              </Link>
              <div className="product-img">
                <img className="product-img-sub" src={product?.image}></img>
              </div>
              <span className="product-information">
                <p className="font-semibold truncate">{product.name}</p>
                <p className="line-clamp-4 text-gray-400">{product.sensor}</p>
                <p className="line-clamp-4 text-gray-400">
                  {product.sensor_description}
                </p>
                <p className="line-clamp-4 text-gray-400">{product.number}</p>
                <p className="line-clamp-4 text-black">{product.status}</p>
                <br />
                <p className="line-clamp-4 font-semibold">{product.price}</p>
              </span>
              <Link>
                <p className="product-addtocart">Thêm vào giỏ hàng</p>
              </Link>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
