import React, { useState, useEffect } from "react";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import rentalApi from "../../api/rentalApi";
import { Modal, message } from "antd";

export default function RentalList() {
  const [rentals, setRentals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    const fetchRentalData = async () => {
      try {
        const response = await rentalApi.getAllRental();
        if (response.data?.status === "success") {
          const sortedRentals = response.data.data.sort((a, b) => {
            // Ưu tiên theo status trước
            if (a.status === "PENDING" && b.status !== "PENDING") return -1;
            if (a.status !== "PENDING" && b.status === "PENDING") return 1;

            // Nếu cùng status, sort tiếp theo startDate mới nhất trước
            const dateA = a.startDate ? new Date(a.startDate).getTime() : 0;
            const dateB = b.startDate ? new Date(b.startDate).getTime() : 0;
            return dateB - dateA;
          });

          setRentals(sortedRentals);
        }
      } catch (error) {
        console.error(
          "❌ Error fetching rental data:",
          error?.response?.data || error.message
        );
      } finally {
        setLoading(false);
      }
    };
    fetchRentalData();
  }, []);

  const handleApprove = async (rentalId) => {
    try {
      await rentalApi.approveRental(rentalId);
      messageApi.success("Phê duyệt thành công!");
      setRentals((prev) =>
        prev.map((rental) =>
          rental.rentalId === rentalId
            ? { ...rental, status: "APPROVED" }
            : rental
        )
      );
    } catch (error) {
      console.error(
        "❌ Error approving rental:",
        error?.response?.data || error.message
      );
      messageApi.error("Phê duyệt thất bại!");
    }
  };

  const handleCancel = async (rentalId) => {
    try {
      await rentalApi.cancelRental(rentalId);
      messageApi.success("Hủy thành công!");
      setRentals((prev) =>
        prev.map((rental) =>
          rental.rentalId === rentalId
            ? { ...rental, status: "CANCELLED" }
            : rental
        )
      );
    } catch (error) {
      console.error(
        "❌ Error cancelling rental:",
        error?.response?.data || error.message
      );
      messageApi.error("Hủy thất bại!");
    }
  };

  const confirmApprove = (rentalId) => {
    Modal.confirm({
      title: "Xác nhận phê duyệt",
      content: "Bạn có chắc chắn muốn PHÊ DUYỆT yêu cầu này không?",
      okText: "Phê duyệt",
      cancelText: "Hủy",
      okType: "primary",
      onOk: () => handleApprove(rentalId),
    });
  };

  const confirmCancel = (rentalId) => {
    Modal.confirm({
      title: "Xác nhận hủy",
      content: "Bạn có chắc chắn muốn TỪ CHỐI yêu cầu này không?",
      okText: "Từ chối",
      cancelText: "Đóng",
      okType: "danger",
      onOk: () => handleCancel(rentalId),
    });
  };

  if (loading) {
    return <div className="text-center text-gray-600">Loading...</div>;
  }

  return (
    <div className="p-6">
      {contextHolder}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Rental List</h2>
      </div>

      {/* Table Header */}
      <div className="flex space-x-4 mb-4 font-semibold text-gray-600 text-sm">
        <div className="w-1/8 text-center">Name</div>
        <div className="w-1/8 text-center">Email</div>
        <div className="w-1/8 text-center">Phone</div>
        <div className="w-1/8 text-center">Address</div>
        <div className="w-1/8 text-center">Equipment</div>
        <div className="w-1/12 text-center">Daily Rate</div>
        <div className="w-1/12 text-center">Start Date</div>
        <div className="w-1/12 text-center">End Date</div>
        <div className="w-1/12 text-center">Status</div>
        <div className="w-1/12 text-center">Actions</div>
      </div>

      {/* Rental Rows */}
      <div className="space-y-4">
        {rentals.map((rental, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-white rounded-lg shadow border text-sm"
          >
            <div className="w-1/8 text-center font-semibold text-gray-800">
              {rental.user.firstName} {rental.user.lastName}
            </div>
            <div className="w-1/8 text-center text-gray-500">
              {rental.user.email}
            </div>
            <div className="w-1/8 text-center text-gray-500">
              {rental.user.phone}
            </div>
            <div className="w-1/8 text-center text-gray-500">
              {rental.user.address}
            </div>
            <div className="w-1/8 text-center text-gray-500">
              {rental.equipment.brand} {rental.equipment.model}
            </div>
            <div className="w-1/12 text-center text-gray-500">
              {rental.equipment.dailyRate?.toLocaleString()} VND/ngày
            </div>
            <div className="w-1/12 text-center text-gray-500">
              {rental.startDate
                ? new Date(rental.startDate).toLocaleDateString()
                : "-"}
            </div>
            <div className="w-1/12 text-center text-gray-500">
              {rental.endDate
                ? new Date(rental.endDate).toLocaleDateString()
                : "-"}
            </div>
            <div className="w-1/12 text-center font-semibold text-gray-700">
              {rental.status}
            </div>
            <div className="w-1/12 flex items-center space-x-2 justify-center">
              {rental.status === "PENDING" ? (
                <>
                  <CheckOutlined
                    className="text-green-600 hover:text-green-800 text-lg cursor-pointer"
                    onClick={() => confirmApprove(rental.rentalId)}
                  />
                  {/* <CloseOutlined
                    className="text-red-600 hover:text-red-800 text-lg cursor-pointer"
                    onClick={() => confirmCancel(rental.rentalId)}
                  /> */}
                </>
              ) : (
                <div className="text-gray-400 text-xs italic">Done</div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="flex justify-between items-center mt-6 p-4 bg-gray-100 rounded-lg shadow">
        <div className="font-semibold text-gray-800">Total Rentals</div>
        <div className="font-semibold text-gray-800">
          {rentals.length} item(s)
        </div>
      </div>
    </div>
  );
}
