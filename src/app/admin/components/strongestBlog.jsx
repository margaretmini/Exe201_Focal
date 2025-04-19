import React from "react";
const strongestBlogs = [
  {
    id: 1,
    title: "How to Manage Your Devices Efficiently",
    excerpt: "Learn the best practices to manage your devices and maximize their potential...",
    author: "Admin",
    date: "March 10, 2025",
    img: "https://via.placeholder.com/300x200"
  },
  {
    id: 2,
    title: "Understanding the Future of Technology",
    excerpt: "The future of tech is all about AI and IoT. Discover the key trends and how to stay ahead...",
    author: "Admin",
    date: "March 15, 2025",
    img: "https://via.placeholder.com/300x200"
  }
];

const strongestBlog = () => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-lg mt-30">
          <h2 className="text-2xl font-semibold mb-6">Strongest Blogs</h2>
          <div className="space-y-6">
            {strongestBlogs.map((blog) => (
              <div key={blog.id} className="flex gap-6">
                <div className="w-1/3">
                  <img
                    src={blog.img}
                    alt={blog.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div className="w-2/3">
                  <h3 className="font-semibold text-xl mb-2">{blog.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{blog.excerpt}</p>
                  <div className="text-xs text-gray-400">
                    <span>By {blog.author} | {blog.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    };

export default strongestBlog;