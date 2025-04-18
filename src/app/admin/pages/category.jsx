import React, { useEffect, useState, useRef } from "react";
import { EditOutlined, RestOutlined } from "@ant-design/icons";
import { Modal, message } from "antd";
import categoryApi from "../../api/categoryApi";

export default function Category() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);
  const [isCreateMode, setIsCreateMode] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const nameInputRef = useRef(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await categoryApi.getAllCategories();
        const content = response?.data?.data || [];
        setCategories(content);
      } catch (error) {
        console.error("❌ Error fetching categories:", error?.response?.data || error.message);
        messageApi.error("Không thể tải danh sách category!");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    if (isModalOpen && nameInputRef.current) {
      setTimeout(() => nameInputRef.current?.focus(), 100);
    }
  }, [isModalOpen]);

  const handleEditClick = (category) => {
    setEditData({ ...category });
    setIsCreateMode(false);
    setIsModalOpen(true);
  };

  const handleAddNewClick = () => {
    setEditData({ name: "", description: "" });
    setIsCreateMode(true);
    setIsModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    const { categoryId, name, description } = editData;

    try {
      if (isCreateMode) {
        const response = await categoryApi.createCategory({ name, description });
        messageApi.success("Tạo category mới thành công!");
        setCategories((prev) => [...prev, response.data.data]);
      } else {
        await categoryApi.updateCategory(categoryId, { name, description });
        messageApi.success("Cập nhật category thành công!");
        setCategories((prev) =>
          prev.map((c) => (c.categoryId === categoryId ? { ...c, name, description } : c))
        );
      }

      setIsModalOpen(false);
    } catch (error) {
      console.error("❌ Lỗi khi lưu category:", error?.response?.data || error.message);
      messageApi.error("Thao tác thất bại!");
    }
  };

  if (loading) {
    return <div className="text-center text-gray-600">Loading...</div>;
  }

  return (
    <div className="p-6">
      {contextHolder}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Category List</h2>
        <button
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
          onClick={handleAddNewClick}
        >
          ADD NEW CATEGORY
        </button>
      </div>

      <div className="flex space-x-4 mb-4 font-semibold text-gray-600">
        <div className="w-1/4 text-center">Name</div>
        <div className="w-1/2 text-center">Description</div>
        <div className="w-1/4 text-center">Actions</div>
      </div>

      <div className="space-y-4">
        {categories.map((item) => (
          <div
            key={item.categoryId}
            className="flex items-center justify-between p-4 bg-white rounded-lg shadow border"
          >
            <div className="w-1/4 text-center font-semibold text-gray-800">{item.name}</div>
            <div className="w-1/2 text-center text-sm text-gray-500">{item.description}</div>
            <div className="w-1/4 flex items-center space-x-4 justify-center">
              <EditOutlined
                className="text-gray-600 hover:text-black text-lg cursor-pointer"
                onClick={() => handleEditClick(item)}
              />
              <RestOutlined className="text-gray-600 hover:text-red-600 text-lg cursor-pointer" />
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-6 p-4 bg-gray-100 rounded-lg shadow">
        <div className="font-semibold text-gray-800">Total Categories</div>
        <div className="font-semibold text-gray-800">{categories.length} items</div>
      </div>

      <Modal
        title={isCreateMode ? "Thêm Category" : "Chỉnh sửa Category"}
        open={isModalOpen}
        onOk={handleSave}
        onCancel={() => setIsModalOpen(false)}
        okText={isCreateMode ? "Tạo mới" : "Cập nhật"}
        cancelText="Hủy"
      >
        {editData && (
          <div className="space-y-4">
            <input
              ref={nameInputRef}
              type="text"
              name="name"
              placeholder="Tên danh mục"
              value={editData.name}
              onChange={handleInputChange}
              className="w-full border-b border-gray-300 outline-none"
            />
            <textarea
              name="description"
              placeholder="Mô tả"
              value={editData.description}
              onChange={handleInputChange}
              className="w-full border-b border-gray-300 outline-none"
              rows={4}
            />
          </div>
        )}
      </Modal>
    </div>
  );
}
