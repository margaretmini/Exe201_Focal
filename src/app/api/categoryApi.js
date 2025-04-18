import axiosClient from "./axiosClient";

const categoryApi = {
  getCategoryById: (id) => axiosClient.get(`/categories/${id}`),
  updateCategory: (id, data) => axiosClient.put(`/categories/${id}`, data),
  getAllCategories: () => axiosClient.get(`/categories`),
  createCategory: (data) => axiosClient.post(`/categories`, data),
};

export default categoryApi;