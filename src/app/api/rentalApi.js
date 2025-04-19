import axiosClient from "./axiosClient";

const rentalApi = {
  //USER
  createRental: (data) => axiosClient.post("/rental", data),
  //ADMIN
  cancelRental: (id) => axiosClient.put(`/rental/${id}/cancel`),
  approveRental: (id) => axiosClient.put(`/rental/${id}/approve`),
  getAllRental: () => axiosClient.get("/rental")
};

export default rentalApi;