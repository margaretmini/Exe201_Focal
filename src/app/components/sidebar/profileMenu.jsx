import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("decodeToken");
    localStorage.removeItem("undecodeToken");
    navigate("/");
  };
  return (
    <div className="w-[460px] bg-white min-h-screen pl-14 border-r text-left">
      <p className="text-[24px] font-semibold mb-6">TÀI KHOẢN</p>

      <ul className="space-y-2 text-[16px]">
        <li>
          <Link to="/profile/favorite" className="hover:underline">
            Thích
          </Link>
        </li>
        <li>
          <Link to="/profile/order" className="hover:underline">
            Đang thuê
          </Link>
        </li>
        {/* <li>
          <Link to="/profile/bargan" className="hover:underline">
            Trả giá
          </Link>
        </li> */}
        <li>
          <Link to="/profile/info" className="hover:underline">
            Hồ sơ
          </Link>
        </li>
        {/* <li>
          <Link to="/account/become-host" className="hover:underline">
            Trở thành người cho thuê
          </Link>
        </li> */}
        {/* <li>
          <Link to="/profile/delivery" className="hover:underline">
            Địa chỉ giao hàng
          </Link>
        </li> */}
        {/* <li>
          <Link to="/profile/payment" className="hover:underline">
            Phương thức thanh toán
          </Link>
        </li> */}
        {/* <li>
          <Link to="/profile/chat" className="hover:underline">
            Tin nhắn
          </Link>
        </li> */}
      </ul>

      <div className="mt-8">
        <button
          onClick={logout}
          className="text-sm hover:underline text-red-500"
        >
          Đăng xuất
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
