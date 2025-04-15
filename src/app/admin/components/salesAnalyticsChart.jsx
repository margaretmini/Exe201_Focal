import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { month: "Nov", productA: 55, productB: 50 },
  { month: "Dec", productA: 75, productB: 60 },
  { month: "Jan", productA: 65, productB: 40 },
  { month: "Feb", productA: 80, productB: 45 },
  { month: "Mar", productA: 100, productB: 60 }
];

export default function salesAnalyticsChart() {
  return (
    <div className="w-full h-64">
      <h2 className="font-semibold text-lg mb-2">Sales Analytics</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="productA" stroke="#000" strokeWidth={2} dot={{ r: 4 }} />
          <Line type="monotone" dataKey="productB" stroke="#999" strokeWidth={2} strokeDasharray="5 5" dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}