import axiosClient from "./axiosClient";

const rentalApi = {
  // Tạo yêu cầu thuê mới
  createRental: (data) => axiosClient.post("/rental", data),

  // Hủy yêu cầu thuê
  cancelRental: (id) => axiosClient.put(`/rental/${id}/cancel`),

  // Duyệt yêu cầu thuê
  approveRental: (id) => axiosClient.put(`/rental/${id}/approve`)
};

export default rentalApi;