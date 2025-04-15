import React from "react";
import SalesAnalyticsChart from "../components/salesAnalyticsChart";
import ActivityChart from "../components/activityChart";
import StrongestBlog from "../components/strongestBlog";

export default function Dashboard() {
  return (
    <>
      {/* Các card thống kê */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-xl shadow">Active Users: 27/80</div>
        <div className="bg-white p-4 rounded-xl shadow">Total Equipments: 20</div>
        <div className="bg-white p-4 rounded-xl shadow">Av. Users Use Length: 2m 34s</div>
        <div className="bg-white p-4 rounded-xl shadow">Total Order: 150</div>
        <div className="bg-white p-4 rounded-xl shadow">Visitors: 86%</div>
        <div className="bg-white p-4 rounded-xl shadow">Revenue Gain: +34%</div>
      </div>

      {/* Biểu đồ */}
      <div className="grid grid-cols-2 gap-6">
        <SalesAnalyticsChart />
        <ActivityChart />
      </div>

      {/* Strongest Blog Section */}
      <div className="mt-6 ">
        <StrongestBlog />
      </div>
    </>
  );
}