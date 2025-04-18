import React, { useState, useEffect } from "react";
import { EditOutlined, RestOutlined } from "@ant-design/icons";
import { Modal, message } from "antd";
import userApi from "../../api/userApi";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await userApi.getAllProfile();
        if (response.data?.status === "success") {
          setUsers(response.data.data);
        }
      } catch (error) {
        console.error("❌ Error fetching user data:", error?.response?.data || error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUserData();
  }, []);

  const handleEditClick = (user) => {
    setEditData({ ...user });
    setIsModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async () => {
    try {
      const res = await userApi.updateProfile(editData);
      messageApi.success("Cập nhật thành công!");
      setIsModalOpen(false);
      setUsers([editData]); // cập nhật local list
    } catch (error) {
      console.error("❌ Lỗi khi cập nhật:", error?.response?.data || error.message);
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
        <h2 className="text-xl font-bold">User List</h2>
        
      </div>

      {/* Table Header */}
      <div className="flex space-x-4 mb-4 font-semibold text-gray-600">
        <div className="w-1/6 text-center">Name</div>
        <div className="w-1/6 text-center">Email</div>
        <div className="w-1/6 text-center">Phone</div>
        <div className="w-1/4 text-center">Address</div>
        <div className="w-1/6 text-center">Date of Birth</div>
        <div className="w-1/6 text-center">Actions</div>
      </div>

      {/* User Rows */}
      <div className="space-y-4">
        {users.map((user, index) => (
          <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg shadow border">
            <div className="w-1/6 text-center font-semibold text-gray-800">
              {user.firstName} {user.lastName}
            </div>
            <div className="w-1/6 text-center text-sm text-gray-500">{user.email}</div>
            <div className="w-1/6 text-center text-sm text-gray-500">{user.phone}</div>
            <div className="w-1/4 text-center text-sm text-gray-500">{user.address}</div>
            <div className="w-1/6 text-center text-sm text-gray-500">{user.dateOfBirth}</div>
            <div className="w-1/6 flex items-center space-x-4 justify-center">
              <EditOutlined
                className="text-gray-600 hover:text-black text-lg cursor-pointer"
                onClick={() => handleEditClick(user)}
              />
              <RestOutlined className="text-gray-600 hover:text-red-600 text-lg cursor-pointer" />
            </div>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="flex justify-between items-center mt-6 p-4 bg-gray-100 rounded-lg shadow">
        <div className="font-semibold text-gray-800">Total Users</div>
        <div className="font-semibold text-gray-800">{users.length} item(s)</div>
      </div>

      {/* Edit Modal */}
      <Modal
        title="Chỉnh sửa thông tin"
        open={isModalOpen}
        onOk={handleUpdate}
        onCancel={() => setIsModalOpen(false)}
        okText="Cập nhật"
        cancelText="Hủy"
      >
        {editData && (
          <div className="space-y-4">
            <input
              type="text"
              name="firstName"
              placeholder="Họ"
              value={editData.firstName}
              onChange={handleInputChange}
              className="w-full border-b border-gray-300 outline-none"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Tên"
              value={editData.lastName}
              onChange={handleInputChange}
              className="w-full border-b border-gray-300 outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={editData.email}
              onChange={handleInputChange}
              className="w-full border-b border-gray-300 outline-none"
            />
            <input
              type="text"
              name="phone"
              placeholder="Điện thoại"
              value={editData.phone}
              onChange={handleInputChange}
              className="w-full border-b border-gray-300 outline-none"
            />
            <input
              type="text"
              name="address"
              placeholder="Địa chỉ"
              value={editData.address}
              onChange={handleInputChange}
              className="w-full border-b border-gray-300 outline-none"
            />
            <input
              type="date"
              name="dateOfBirth"
              value={editData.dateOfBirth}
              onChange={handleInputChange}
              className="w-full border-b border-gray-300 outline-none"
            />
          </div>
        )}
      </Modal>
    </div>
  );
}

