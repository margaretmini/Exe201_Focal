import React from "react";
import { EditOutlined, RestOutlined } from "@ant-design/icons";

// Dữ liệu cho danh mục
const categories = [
  {
    id: 1,
    name: "Cameras",
    description: "Various types of cameras for professional and personal use.",
  },
  {
    id: 2,
    name: "Lenses",
    description: "Different lenses for cameras with various focal lengths and apertures.",
  },
  {
    id: 3,
    name: "Lighting Equipment",
    description: "High-quality lighting equipment for photography and video production.",
  },
  {
    id: 4,
    name: "Tripods",
    description: "Sturdy and portable tripods for steady camera support.",
  },
  {
    id: 5,
    name: "Audio Gear",
    description: "Audio equipment for recording high-quality sound in various environments.",
  },
];

export default function Category() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Category List</h2>
        <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
          ADD NEW CATEGORY
        </button>
      </div>

      {/* Tiêu đề chung cho các trường */}
      <div className="flex space-x-4 mb-4 font-semibold text-gray-600">
        <div className="w-1/4 text-center">Name</div>
        <div className="w-1/4 text-center">Description</div>
        <div className="w-1/4 text-center">Actions</div>
      </div>

      <div className="space-y-4">
        {categories.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-4 bg-white rounded-lg shadow border"
          >
            {/* Cột Name */}
            <div className="w-1/4 text-center font-semibold text-gray-800">
              {item.name}
            </div>

            {/* Cột Description */}
            <div className="w-1/4 text-center text-sm text-gray-500">
              {item.description}
            </div>

            {/* Cột Actions */}
            <div className="w-1/4 flex items-center space-x-4 justify-center">
              <EditOutlined className="text-gray-600 hover:text-black text-lg cursor-pointer" />
              <RestOutlined className="text-gray-600 hover:text-red-600 text-lg cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
      {/* Dòng Total Category */}
      <div className="flex justify-between items-center mt-6 p-4 bg-gray-100 rounded-lg shadow">
        <div className="font-semibold text-gray-800">Total Categories</div>
        <div className="font-semibold text-gray-800">{categories.length} items</div>
      </div>
    </div>
  );
}