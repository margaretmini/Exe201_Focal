import { useEffect, useState } from "react";
import { Home, Camera, Users, FileText, CreditCard, Layers, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const Sidebar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("undecodeToken");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        console.log("🧩 Decoded token:", decoded);
        setUser({
          email: decoded.sub || "user@example.com", // Sửa từ decoded.email thành decoded.sub
          role: decoded.role || "UNKNOWN",
        });
      } catch (error) {
        console.error("Lỗi khi decode token:", error);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("undecodeToken");
    localStorage.removeItem("decodeToken");
    navigate("/login");
  };

  return (
    <div className="w-64 bg-black text-white min-h-screen p-6 relative">
      <div className="mb-10">
        <div className="text-xl font-bold mb-2 text-center">focal</div>
        {user ? (
          <>
            <div className="text-sm text-gray-300 text-center">{user.email}</div>
            <div className="text-xs text-gray-500 text-center">{user.role}</div>
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
        <MenuItem icon={<CreditCard size={18} />} text="Rental" to="/admin/rental" />
      </nav>

      <div
        onClick={handleLogout}
        className="absolute left-8 top-120 text-gray-500 hover:text-white cursor-pointer flex items-center gap-2"
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
