import React from "react";
import { EditOutlined, RestOutlined } from "@ant-design/icons";

const equipments = [
  {
    id: 1,
    name: "Sony A7 Mark II",
    email: "peter@gmail.com",
    phone: "01234567890",
    price: "1.200.000VND/Day",
    date: "01-Dec, 2024",
    image: "/camera.jpg",
  },
  {
    id: 2,
    name: "Sony A7 Mark II",
    email: "david@gmail.com",
    phone: "01234567890",
    price: "1.100.000VND/Day",
    date: "08-Dec, 2024",
    image: "/camera.jpg",
  },
  {
    id: 3,
    name: "Sony A7 Mark II",
    email: "brochue@gmail.com",
    phone: "01234557890",
    price: "1.300.000VND/Day",
    date: "19-Dec, 2024",
    image: "/camera.jpg",
  },
  {
    id: 4,
    name: "Sony A7 Mark II",
    email: "brisket@gmail.com",
    phone: "02224557890",
    price: "1.250.000VND/Day",
    date: "25-Dec, 2024",
    image: "/camera.jpg",
  },
  {
    id: 5,
    name: "Sony A7 Mark II",
    email: "walled@gmail.com",
    phone: "02224557720",
    price: "1.090.000VND/Day",
    date: "18-Jan, 2024",
    image: "/camera.jpg",
  },
];

export default function Equipment() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Equipment List</h2>
        <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
          ADD NEW EQUIPMENTS
        </button>
      </div>

      {/* Tiêu đề chung cho các trường */}
      <div className="flex space-x-4 mb-4 font-semibold text-gray-600">
        <div className="w-1/4 text-center">Name</div>
        <div className="w-1/4 text-center">Email</div>
        <div className="w-1/4 text-center">Phone</div>
        <div className="w-1/4 text-center">Price</div>
        <div className="w-1/4 text-center">Date</div>
        <div className="w-1/4 text-center">Actions</div>
      </div>

      <div className="space-y-4">
        {equipments.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-4 bg-white rounded-lg shadow border"
          >
            <div className="flex items-center space-x-4 w-1/4">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-md"
              />
              <div>
                <div className="font-semibold text-gray-800">{item.name}</div>
              </div>
            </div>

            <div className="w-1/4 text-center text-sm text-gray-500">
              {item.email}
            </div>
            <div className="w-1/4 text-center text-sm text-gray-500">
              {item.phone}
            </div>
            <div className="w-1/4 text-center text-sm text-gray-700 font-medium">
              {item.price}
            </div>
            <div className="w-1/4 text-center text-sm text-gray-500">
              {item.date}
            </div>

            <div className="w-1/4 flex items-center space-x-4 justify-center">
              <EditOutlined className="text-gray-600 hover:text-black text-lg cursor-pointer" />
              <RestOutlined className="text-gray-600 hover:text-red-600 text-lg cursor-pointer" />
            </div>
          </div>
        ))}
      </div>

      {/* Dòng Total Equipment */}
      <div className="flex justify-between items-center mt-6 p-4 bg-gray-100 rounded-lg shadow">
        <div className="font-semibold text-gray-800">Total Equipment</div>
        <div className="font-semibold text-gray-800">{equipments.length} items</div>
      </div>
    </div>
  );
}