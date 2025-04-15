import axiosClient from "./axiosClient";

const wishListApi = {
  update: (id, data) => axiosClient.put(`/blog/update/${id}`, data),
  publish: (id) => axiosClient.put(`/blog/publish/${id}`),
  create: () => axiosClient.post(`/blog/create`, data),
  blog: () => axiosClient.get("/blog"),
  allBlog: () => axiosClient.get(`/blog/all`),
};

export default wishListApi;
