import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { month: "JAN", value: 100 },
  { month: "FEB", value: 150 },
  { month: "MAR", value: 200 },
  { month: "APR", value: 250 },
  { month: "MAY", value: 200 },
  { month: "JUN", value: 280 },
  { month: "JUL", value: 300 },
  { month: "AUG", value: 320 },
  { month: "SEP", value: 350 },
  { month: "OCT", value: 400 },
  { month: "NOV", value: 420 },
  { month: "DEC", value: 450 },
];

export default function activityChart() {
  return (
    <div className="w-full h-64">
      <h2 className="font-semibold text-lg mb-2">Activity</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#000" barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}