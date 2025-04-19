import axiosClient from "./axiosClient";

const blogApi = {
  update: (id, data) => axiosClient.put(`/blog/update/${id}`, data),
  publish: (id) => axiosClient.put(`/blog/publish/${id}`),
  create: (data) => axiosClient.post(`/blog/create`, data),
  blog: () => axiosClient.get("/blog"),
  allBlog: () => axiosClient.get(`/blog/all`),
};

export default blogApi;
