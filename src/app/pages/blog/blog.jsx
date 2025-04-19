import React, { useEffect, useState } from "react";
import "./blog.css";
import Title from "antd/es/skeleton/Title";
import { Link } from "react-router-dom";
import blogApi from "../../api/blogApi";
export default function blog() {
  const [data, setData] = useState();
  useEffect(() => {
    const getAllBlog = async () => {
      try {
        const response = await blogApi.blog();
        setData(response?.data);
        console.log(response);
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
              src={
                blog?.image ||
                "https://media.istockphoto.com/id/1222357475/vector/image-preview-icon-picture-placeholder-for-website-or-ui-ux-design-vector-illustration.jpg?s=612x612&w=0&k=20&c=KuCo-dRBYV7nz2gbk4J9w1WtTAgpTdznHu55W9FjimE="
              }
              alt="blog"
            />
            <span>
              <p className="font-semibold py-6 truncate">{blog.title}</p>
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
