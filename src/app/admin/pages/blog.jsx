import React, { useEffect, useRef, useState } from "react";
import { EditOutlined, RestOutlined } from "@ant-design/icons";
import { Modal, message } from "antd";
import blogApi from "../../api/blogApi";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);
  const [messageApi, contextHolder] = message.useMessage();
  const titleInputRef = useRef(null); // ref để auto-focus

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await blogApi.blog();
        setBlogs(response.data);
      } catch (error) {
        console.error("❌ Error fetching blog data:", error?.response?.data || error.message);
        messageApi.error("Không thể tải danh sách blog!");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  useEffect(() => {
    if (isModalOpen && titleInputRef.current) {
      // focus title khi mở modal
      setTimeout(() => titleInputRef.current?.focus(), 100);
    }
  }, [isModalOpen]);

  const handleEditClick = (blog) => {
    setEditData({ ...blog });
    setIsModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async () => {
    try {
      const { postId, title, content } = editData;

      await blogApi.update(postId, { title, content });

      messageApi.success("Cập nhật blog thành công!");
      setIsModalOpen(false);

      setBlogs((prev) =>
        prev.map((b) => (b.postId === postId ? { ...b, title, content, updatedAt: new Date().toISOString() } : b))
      );
    } catch (error) {
      console.error("❌ Lỗi khi cập nhật blog:", error?.response?.data || error.message);
      messageApi.error("Cập nhật thất bại!");
    }
  };

  if (loading) {
    return <div className="text-center text-gray-600">Loading...</div>;
  }

  return (
    <div className="p-6">
      {contextHolder}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Blog List</h2>
        <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
          ADD NEW BLOG
        </button>
      </div>

      {/* Header row */}
      <div className="flex space-x-4 mb-4 font-semibold text-gray-600">
        <div className="w-1/6 text-center">Title</div>
        <div className="w-2/6 text-center">Content</div>
        <div className="w-1/6 text-center">Created At</div>
        <div className="w-1/6 text-center">Updated At</div>
        <div className="w-1/6 text-center">Actions</div>
      </div>

      <div className="space-y-4">
        {blogs.map((blog) => (
          <div
            key={blog.postId}
            className="flex items-center justify-between p-4 bg-white rounded-lg shadow border"
          >
            <div className="w-1/6 text-center font-semibold text-gray-800">{blog.title}</div>
            <div className="w-2/6 text-center text-sm text-gray-600 line-clamp-2">{blog.content}</div>
            <div className="w-1/6 text-center text-sm text-gray-500">
              {new Date(blog.createdAt).toLocaleDateString("en-GB")}
            </div>
            <div className="w-1/6 text-center text-sm text-gray-500">
              {new Date(blog.updatedAt).toLocaleDateString("en-GB")}
            </div>
            <div className="w-1/6 flex items-center space-x-4 justify-center">
              <EditOutlined
                className="text-gray-600 hover:text-black text-lg cursor-pointer"
                onClick={() => handleEditClick(blog)}
              />
              <RestOutlined className="text-gray-600 hover:text-red-600 text-lg cursor-pointer" />
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-6 p-4 bg-gray-100 rounded-lg shadow">
        <div className="font-semibold text-gray-800">Total Blogs</div>
        <div className="font-semibold text-gray-800">{blogs.length} item(s)</div>
      </div>

      {/* Modal edit */}
      <Modal
        title="Chỉnh sửa Blog"
        open={isModalOpen}
        onOk={handleUpdate}
        onCancel={() => setIsModalOpen(false)}
        okText="Cập nhật"
        cancelText="Hủy"
      >
        {editData && (
          <div className="space-y-4">
            <input
              ref={titleInputRef}
              type="text"
              name="title"
              placeholder="Tiêu đề"
              value={editData.title}
              onChange={handleInputChange}
              className="w-full border-b border-gray-300 outline-none"
            />
            <textarea
              name="content"
              placeholder="Nội dung"
              value={editData.content}
              onChange={handleInputChange}
              className="w-full border-b border-gray-300 outline-none"
              rows={5}
            />
          </div>
        )}
      </Modal>
    </div>
  );
}