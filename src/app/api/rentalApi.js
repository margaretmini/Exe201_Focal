import axiosClient from "./axiosClient";

const rentalApi = {
  //USER
  createRental: (data) => axiosClient.post("/rental", data),
  cancelRental: (id) => axiosClient.put(`/rental/${id}/cancel`),

  //ADMIN
  myRental: (id) => axiosClient.get(`/rental/my-rentals`),
  getAllRental: () => axiosClient.get("/rental"),
};

export default rentalApi;
