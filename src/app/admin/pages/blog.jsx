import React from "react";
import { EditOutlined, RestOutlined } from "@ant-design/icons";

// Dữ liệu blog
const blogs = [
  {
    id: 1,
    image: "/blog1.jpg",
    title: "Exploring the World of Photography",
    author: "John Doe",
    date: "2024-03-15",
  },
  {
    id: 2,
    image: "/blog2.jpg",
    title: "Top 5 Cameras for Beginners",
    author: "Jane Smith",
    date: "2024-04-01",
  },
  {
    id: 3,
    image: "/blog3.jpg",
    title: "Photography Tips for Outdoor Shoots",
    author: "Mark Johnson",
    date: "2024-02-20",
  },
  {
    id: 4,
    image: "/blog4.jpg",
    title: "Understanding Lens Focal Lengths",
    author: "Emily Davis",
    date: "2024-01-10",
  },
  {
    id: 5,
    image: "/blog5.jpg",
    title: "The Best Editing Software for Photographers",
    author: "Alice Brown",
    date: "2024-03-30",
  },
];

export default function Blog() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Blog List</h2>
        <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
          ADD NEW BLOG
        </button>
      </div>

      {/* Tiêu đề chung cho các trường */}
      <div className="flex space-x-4 mb-4 font-semibold text-gray-600">
        <div className="w-1/4 text-center">Image</div>
        <div className="w-1/4 text-center">Title</div>
        <div className="w-1/4 text-center">Author</div>
        <div className="w-1/4 text-center">Date</div>
        <div className="w-1/4 text-center">Actions</div>
      </div>

      <div className="space-y-4">
        {blogs.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-4 bg-white rounded-lg shadow border"
          >
            {/* Cột Image */}
            <div className="w-1/4 text-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-cover rounded-md mx-auto"
              />
            </div>

            {/* Cột Title */}
            <div className="w-1/4 text-center font-semibold text-gray-800">
              {item.title}
            </div>

            {/* Cột Author */}
            <div className="w-1/4 text-center text-sm text-gray-500">
              {item.author}
            </div>

            {/* Cột Date */}
            <div className="w-1/4 text-center text-sm text-gray-500">
              {item.date}
            </div>

            {/* Cột Actions */}
            <div className="w-1/4 flex items-center space-x-4 justify-center">
              <EditOutlined className="text-gray-600 hover:text-black text-lg cursor-pointer" />
              <RestOutlined className="text-gray-600 hover:text-red-600 text-lg cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
       {/* Dòng Total Blog */}
       <div className="flex justify-between items-center mt-6 p-4 bg-gray-100 rounded-lg shadow">
        <div className="font-semibold text-gray-800">Total Blogs</div>
        <div className="font-semibold text-gray-800">{blogs.length} items</div>
      </div>
    </div>
  );
}