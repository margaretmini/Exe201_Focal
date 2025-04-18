import axiosClient from "./axiosClient";

const equipmentApi = {
  getEquipmentById: (id) => axiosClient.get(`/equipment/${id}`),
  updateEquipment: (id, data) => axiosClient.put(`/equipment/${id}`, data),
  deleteEquipment: (id) => axiosClient.delete(`/equipment/${id}`),
//   getAllEquipments: () => axiosClient.get(`/equipment`),
  getAllEquipments: (page = 0, size = 5, sort = "equipmentId") =>
  axiosClient.get(`/equipment?page=${page}&size=${size}&sort=${sort}`),
  createEquipment: (data) => axiosClient.post(`/equipment`, data),
};

export default equipmentApi;