import React, { useEffect, useState, useRef } from "react";
import { EditOutlined, RestOutlined } from "@ant-design/icons";
import { Modal, Input, InputNumber, Select, message } from "antd";
import equipmentApi from "../../api/equipmentApi";
import categoryApi from "../../api/categoryApi";

export default function Equipment() {
  const [equipments, setEquipments] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCreateMode, setIsCreateMode] = useState(false);
  const [editData, setEditData] = useState(null);
  const [messageApi, contextHolder] = message.useMessage();
  const brandInputRef = useRef(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [equipRes, catRes] = await Promise.all([
        equipmentApi.getAllEquipments(), // ❗ Không truyền page/size nữa
        categoryApi.getAllCategories(),
      ]);

      setEquipments(equipRes?.data?.data || []); // ❗ Không cần .content
      setCategories(catRes?.data?.data || []);
    } catch (err) {
      console.error("❌ Error loading data:", err);
      messageApi.error("Không thể tải dữ liệu!");
    } finally {
      setLoading(false);
    }
  };

  const handleAddNewClick = () => {
    setEditData({
      brand: "",
      model: "",
      serialNumber: "",
      replacementValue: 0,
      dailyRate: 0,
      notes: "",
      categoryId: null,
    });
    setIsCreateMode(true);
    setIsModalOpen(true);
  };

  const handleEditClick = (item) => {
    setEditData({
      brand: item.brand,
      model: item.model,
      serialNumber: item.serialNumber,
      replacementValue: item.replacementValue,
      dailyRate: item.dailyRate,
      notes: item.notes,
      categoryId: item.category?.categoryId || null,
      equipmentId: item.equipmentId,
    });
    setIsCreateMode(false);
    setIsModalOpen(true);
  };

  const handleInputChange = (name, value) => {
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      if (isCreateMode) {
        await equipmentApi.createEquipment(editData);
        messageApi.success("Thêm thiết bị thành công!");
      } else {
        await equipmentApi.updateEquipment(editData.equipmentId, editData);
        messageApi.success("Cập nhật thiết bị thành công!");
      }
      setIsModalOpen(false);
      fetchData();
    } catch (err) {
      console.error("❌ Save error:", err);
      messageApi.error("Thao tác thất bại!");
    }
  };

  if (loading)
    return <div className="text-center text-gray-600">Loading...</div>;

  return (
    <div className="p-6">
      {contextHolder}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Equipment List</h2>
        <button
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
          onClick={handleAddNewClick}
        >
          ADD NEW EQUIPMENT
        </button>
      </div>

      <div className="grid grid-cols-7 gap-4 font-semibold text-gray-600 mb-4 text-center">
        <div>Brand</div>
        <div>Model</div>
        <div>Serial Number</div>
        <div>Replacement Value</div>
        <div>Daily Rate</div>
        <div>Notes</div>
        <div>Category</div>
      </div>

      <div className="space-y-4">
        {equipments.map((item) => (
          <div
            key={item.equipmentId}
            className="grid grid-cols-7 gap-4 items-center bg-white p-4 rounded-lg shadow border text-sm text-center"
          >
            <div>{item.brand}</div>
            <div>{item.model}</div>
            <div>{item.serialNumber}</div>
            <div>{item.replacementValue.toLocaleString()} VND</div>
            <div>{item.dailyRate.toLocaleString()} VND/day</div>
            <div className="text-gray-500">{item.notes}</div>
            <div className="flex justify-center items-center space-x-4">
              <span>{item.category?.name || "N/A"}</span>
              <EditOutlined
                className="text-gray-600 hover:text-black cursor-pointer"
                onClick={() => handleEditClick(item)}
              />
              <RestOutlined className="text-gray-600 hover:text-red-600 cursor-pointer" />
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-6 p-4 bg-gray-100 rounded-lg shadow">
        <div className="font-semibold text-gray-800">Total Equipment</div>
        <div className="font-semibold text-gray-800">
          {equipments.length} items
        </div>
      </div>

      <Modal
        title={isCreateMode ? "Thêm Thiết Bị" : "Chỉnh sửa Thiết Bị"}
        open={isModalOpen}
        onOk={handleSave}
        onCancel={() => setIsModalOpen(false)}
        okText={isCreateMode ? "Tạo mới" : "Cập nhật"}
        cancelText="Hủy"
      >
        {editData && (
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Brand</label>
              <Input
                value={editData.brand}
                onChange={(e) => handleInputChange("brand", e.target.value)}
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Model</label>
              <Input
                value={editData.model}
                onChange={(e) => handleInputChange("model", e.target.value)}
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Serial Number</label>
              <Input
                value={editData.serialNumber}
                onChange={(e) =>
                  handleInputChange("serialNumber", e.target.value)
                }
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">
                Replacement Value (VND)
              </label>
              <InputNumber
                value={editData.replacementValue}
                onChange={(value) =>
                  handleInputChange("replacementValue", value)
                }
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">
                Daily Rate (VND/day)
              </label>
              <InputNumber
                value={editData.dailyRate}
                onChange={(value) => handleInputChange("dailyRate", value)}
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Notes</label>
              <Input.TextArea
                value={editData.notes}
                onChange={(e) => handleInputChange("notes", e.target.value)}
                rows={3}
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Category</label>
              <Select
                value={editData.categoryId}
                onChange={(value) => handleInputChange("categoryId", value)}
                className="w-full"
              >
                {categories.map((cat) => (
                  <Select.Option key={cat.categoryId} value={cat.categoryId}>
                    {cat.name}
                  </Select.Option>
                ))}
              </Select>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}