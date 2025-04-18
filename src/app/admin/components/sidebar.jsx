import { useEffect, useState } from "react";
import { Home, Camera, Users, FileText, Layers, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import userApi from "../../api/userApi"; // ✅ Đường dẫn tuỳ thuộc cấu trúc project của bạn

const Sidebar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await userApi.getProfile();
        setUser(res); // giả sử API trả về { name: "Nguyen Van A", role: "Admin" }
      } catch (error) {
        console.error("Failed to load user profile", error);
      }
    };

    fetchProfile();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("accessToken"); // hoặc sessionStorage nếu bạn dùng nó
    navigate("/login");
  };

  return (
    <div className="w-64 bg-black text-white min-h-screen p-6 relative">
      <div className="mb-10">
        <div className="text-xl font-bold mb-2 text-center">focal</div>
        {user ? (
          <>
            <div className="text-sm text-gray-300">{user.name}</div>
            <div className="text-xs text-gray-500">ADMIN</div>
          </>
        ) : (
          <div className="text-sm text-gray-500">Loading...</div>
        )}
      </div>

      <nav className="space-y-4">
        <MenuItem icon={<Home size={18} />} text="Home" to="/admin" />
        <MenuItem icon={<Camera size={18} />} text="Equipment" to="/admin/equipment" />
        <MenuItem icon={<Layers size={18} />} text="Category" to="/admin/category" />
        <MenuItem icon={<FileText size={18} />} text="Blog" to="/admin/blog" />
        <MenuItem icon={<Users size={18} />} text="User" to="/admin/user" />
      </nav>

      <div
        onClick={handleLogout}
        className="absolute bottom-6 left-6 text-gray-500 hover:text-white cursor-pointer flex items-center gap-2"
      >
        <LogOut size={18} /> Logout
      </div>
    </div>
  );
};

const MenuItem = ({ icon, text, to }) => (
  <Link
    to={to}
    className="flex items-center gap-3 p-2 hover:bg-gray-800 rounded cursor-pointer"
  >
    {icon}
    <span>{text}</span>
  </Link>
);

export default Sidebar;