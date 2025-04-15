import React, { useState, useEffect } from "react";
import { EditOutlined, RestOutlined } from "@ant-design/icons";
import UserModel from "../models/userModel";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("https://focal-e7i5.onrender.com/user/profile");
        const data = await response.json();
        console.log("✅ API Response:", data);
    
        if (data.status === "success") {
          const userData = [
            new UserModel(
              data.data.firstName,
              data.data.lastName,
              data.data.email,
              data.data.phone,
              data.data.address,
              data.data.dateOfBirth
            ),
          ];
          console.log("👤 Processed User:", userData);
          setUsers(userData);
        }
      } catch (error) {
        console.error("❌ Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <div className="text-center text-gray-600">Loading...</div>;
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">User List</h2>
        <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
          ADD NEW USER
        </button>
      </div>

      <div className="flex space-x-4 mb-4 font-semibold text-gray-600">
        <div className="w-1/6 text-center">Name</div>
        <div className="w-1/6 text-center">Email</div>
        <div className="w-1/6 text-center">Phone</div>
        <div className="w-1/4 text-center">Address</div>
        <div className="w-1/6 text-center">Date of Birth</div>
        <div className="w-1/6 text-center">Actions</div>
      </div>

      <div className="space-y-4">
        {users.map((user, index) => (
          <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg shadow border">
            <div className="w-1/6 text-center font-semibold text-gray-800">{user.getFullName()}</div>
            <div className="w-1/6 text-center text-sm text-gray-500">{user.email}</div>
            <div className="w-1/6 text-center text-sm text-gray-500">{user.phone}</div>
            <div className="w-1/4 text-center text-sm text-gray-500">{user.address}</div>
            <div className="w-1/6 text-center text-sm text-gray-500">{user.dateOfBirth}</div>
            <div className="w-1/6 flex items-center space-x-4 justify-center">
              <EditOutlined className="text-gray-600 hover:text-black text-lg cursor-pointer" />
              <RestOutlined className="text-gray-600 hover:text-red-600 text-lg cursor-pointer" />
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-6 p-4 bg-gray-100 rounded-lg shadow">
        <div className="font-semibold text-gray-800">Total Users</div>
        <div className="font-semibold text-gray-800">{users.length} item(s)</div>
      </div>
    </div>
  );
}