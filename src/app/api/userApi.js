import axiosClient from "./axiosClient";

const userApi = {
  getProfile: () => axiosClient.get("/user/profile"),
  updateProfile: (data) => axiosClient.put("/user/profile", data),
};

export default userApi;
