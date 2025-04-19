import React from "react";
import { Link, Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./product.css";

export default function Product() {
  return (
    <div>
      <div className="flex px-20 justify-between">
        <span className="text-black text-4xl font-normal">
          <Link to={"/product"}><p className="hover:underline">TẤT CẢ SẢN PHẨM</p></Link>
          
        </span>
        <span className="text-black text-4xl font-normal">
          <p>TÌM KIẾM</p>
        </span>
      </div>

      <div className="flex description px-20 justify-between">
        <span className="text-black text-1xl font-normal">
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
        </span>
        <span className="text-1xl font-normal">
          <input
            type="text"
            className="searchBox"
            placeholder="Nhập sản phẩm"
          />
        </span>
      </div>

      <div className="filter flex flex-row justify-center gap-x-[60px] gap-y-[20px] px-16">
  <NavLink className="link" to="camera">
    <div className="filter1">
      <p>Máy ảnh</p>
    </div>
  </NavLink>
  <NavLink className="link" to="flash">
    <div className="filter2">
      <p>Đèn Flash</p>
    </div>
  </NavLink>
  <NavLink className="link" to="lens">
    <div className="filter3">
      <p>Ống kính</p>
    </div>
  </NavLink>
  <NavLink className="link" to="freelancer">
    <div className="filter4">
      <p>Freelancer</p>
    </div>
  </NavLink>
</div>

      <Outlet />
    </div>
  );
}
