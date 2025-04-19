import React, { useEffect, useState } from "react";
import SalesAnalyticsChart from "../components/salesAnalyticsChart";
import ActivityChart from "../components/activityChart";
import StrongestBlog from "../components/strongestBlog";

import userApi from "../../api/userApi";
import equipmentApi from "../../api/equipmentApi";
import blogApi from "../../api/blogApi";
import rentalApi from "../../api/rentalApi";
import categoryApi from "../../api/categoryApi";

// Import icon từ lucide-react
import { Users, Camera, FileText, CreditCard, Layers } from "lucide-react";

export default function Dashboard() {
  const [totals, setTotals] = useState({
    users: 0,
    equipments: 0,
    blogs: 0,
    orders: 0,
    categories: 0,
  });

  useEffect(() => {
    const fetchTotals = async () => {
      try {
        const [userRes, equipRes, blogRes, rentalRes, catRes] = await Promise.all([
          userApi.getAllProfile(),
          equipmentApi.getAllEquipments(),
          blogApi.blog(),
          rentalApi.getAllRental(),
          categoryApi.getAllCategories(),
        ]);

        setTotals({
          users: userRes?.data?.data?.length || 0,
          equipments: equipRes?.data?.data?.length || 0,
          blogs: blogRes?.data?.length || 0,
          orders: rentalRes?.data?.data?.length || 0,
          categories: catRes?.data?.data?.length || 0,
        });
      } catch (error) {
        console.error("❌ Lỗi khi tải dữ liệu thống kê:", error?.response?.data || error.message);
      }
    };

    fetchTotals();
  }, []);

  return (
    <>
      {/* Card thống kê */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-xl shadow flex items-center gap-3">
          <Users size={20} className="text-blue-500" />
          <span>Total Users: {totals.users}</span>
        </div>

        <div className="bg-white p-4 rounded-xl shadow flex items-center gap-3">
          <Camera size={20} className="text-green-500" />
          <span>Total Equipments: {totals.equipments}</span>
        </div>

        <div className="bg-white p-4 rounded-xl shadow flex items-center gap-3">
          <FileText size={20} className="text-yellow-500" />
          <span>Total Blogs: {totals.blogs}</span>
        </div>

        <div className="bg-white p-4 rounded-xl shadow flex items-center gap-3">
          <CreditCard size={20} className="text-red-500" />
          <span>Total Orders: {totals.orders}</span>
        </div>

        <div className="bg-white p-4 rounded-xl shadow flex items-center gap-3">
          <Layers size={20} className="text-purple-500" />
          <span>Total Categories: {totals.categories}</span>
        </div>
      </div>

      {/* Biểu đồ */}
      <div className="grid grid-cols-2 gap-6">
        <SalesAnalyticsChart />
        <ActivityChart />
      </div>

      {/* Blog nổi bật */}
      <div className="mt-6">
        <StrongestBlog />
      </div>
    </>
  );
}
