import React, { useEffect, useState } from "react";
import "./blog.css";
import Title from "antd/es/skeleton/Title";
import { Link } from "react-router-dom";
import blogApi from "../../api/blogApi";

export default function blog() {
  const [data, setData] = useState();

  const fallbackImages = [
    "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1651922985926-c8fb8c1fe8c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1574494461515-c8005821fbe5?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1495707902641-75cac588d2e9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1519458246479-6acae7536988?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1500634245200-e5245c7574ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1536627217140-899b0bc9d881?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1486574655068-162e94137442?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const getRandomFallbackImage = () => {
    const index = Math.floor(Math.random() * fallbackImages.length);
    return fallbackImages[index];
  };

  useEffect(() => {
    const getAllBlog = async () => {
      try {
        const response = await blogApi.blog();
        const blogs = response?.data || [];
        const enrichedBlogs = blogs.map((item) => ({
          ...item,
          image:
            item.image?.trim() ||
            getRandomFallbackImage(),
        }));
        setData(enrichedBlogs);
      } catch (error) {
        console.log(error);
        messageApi.error("Có lỗi khi đăng nhập, hãy thử lại !");
      }
    };

    getAllBlog();
  }, []);

  return (
    <div className="flex flex-row justify-start gap-x-[104px] gap-y-20 px-20 flex-wrap">
      {data?.map((blog) => (
        <Link
          to={`/blog/${blog.id}`}
          state={{ blog }}
          key={blog.id}
          className="hover:shadow-2xl transition-all duration-300 hover:p-4 h-[630px] w-[380px]"
        >
          <div className="flex flex-col blog_container">
            <img
              src={blog.image}
              alt="blog"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = getRandomFallbackImage();
              }}
            />
            <span>
              <p className="font-semibold py-6 justify-center">{blog.title}</p>
              <p className="line-clamp-4 text-gray-700">
                {blog.conclusion.content}
              </p>
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
