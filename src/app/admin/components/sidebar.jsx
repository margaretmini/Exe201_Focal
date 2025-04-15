import { Home, Camera, Users, CreditCard, FileText, Layers, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-black text-white min-h-screen p-6">
      <div className="mb-10">
        <div className="text-xl font-bold mb-2">FOCAL</div>
        <div className="text-sm text-gray-300">Nguyen Van A</div>
        <div className="text-xs text-gray-500">Admin</div>
      </div>
      <nav className="space-y-4">
        <MenuItem icon={<Home size={18} />} text="Home" to="/admin" />
        <MenuItem icon={<Camera size={18} />} text="Equipment" to="/admin/equipment" />
        <MenuItem icon={<Layers size={18} />} text="Category" to="/admin/category" />
        <MenuItem icon={<FileText size={18} />} text="Blog" to="/admin/blog" />
        <MenuItem icon={<Users size={18} />} text="User" to="/admin/user" />
      </nav>
      <div className="absolute bottom-6 left-6 text-gray-500 hover:text-white cursor-pointer flex items-center gap-2">
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