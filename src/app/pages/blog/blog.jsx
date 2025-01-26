import React from "react";
import "./blog.css";
import Title from "antd/es/skeleton/Title";
import { Link } from "react-router-dom";
export default function blog() {
  const data = [
    {
      id: 1,
      title: "WELCOME TO PLANET YOON",
      image:
        "https://i.pinimg.com/736x/00/4f/f9/004ff9de4d01345888dc93d4dd04d85c.jpg",
      description:
        "Kim Jones enters the orbit of Yoon Ahn for a conversation across time zones, covering couture houses, Alaskan survival shows and more for GREATEST 09.",
    },
    {
      id: 2,
      title: "ALL EYEZ ON PESO PLUMA",
      image:
        "https://i.pinimg.com/736x/00/4f/f9/004ff9de4d01345888dc93d4dd04d85c.jpg",
      description:
        "From his breakthrough record 'Génesis' to his new album 'Éxodo,' tracing the Biblical ascendance of La Doble P in GREATEST 09.",
    },
    {
      id: 3,
      title: "ALL EYEZ ON PESO PLUMA",
      image:
        "https://i.pinimg.com/736x/00/4f/f9/004ff9de4d01345888dc93d4dd04d85c.jpg",
      description:
        "From his breakthrough record 'Génesis' to his new album 'Éxodo,' tracing the Biblical ascendance of La Doble P in GREATEST 09.",
    },
    {
      id: 4,
      title: "EVERYTHING YOU NEED TO KNOW ABOUT Y PROJECT IN 1000 WORDS",
      image:
        "https://i.pinimg.com/736x/00/4f/f9/004ff9de4d01345888dc93d4dd04d85c.jpg",
      description:
        "From his breakthrough record 'Génesis' to his new album 'Éxodo,' tracing the Biblical ascendance of La Doble P in GREATEST 09.",
    },
  ];
  return (
    <div className="flex flex-row justify-start gap-x-[104px] gap-y-20 px-20 flex-wrap">
      {data?.map((blog) => (
        <Link
          to={`/blog/${blog.id}`}
          className="hover:shadow-2xl transition-all duration-300 hover:p-4 h-[640px] w-[380px]"
        >
          <div className="flex flex-col blog_container" key={blog.id}>
            <img src={blog?.image}></img>
            <span>
              <p className="font-semibold py-6 truncate">{blog.title}</p>
              <p className="line-clamp-4 text-gray-700">{blog.description}</p>
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
