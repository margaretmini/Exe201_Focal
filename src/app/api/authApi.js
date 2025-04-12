import axiosClient from "./axiosClient";

const authApi = {
  login: (data) => axiosClient.post("/auth/login", data),
  register: (data) => axiosClient.post("/auth/register", data),
  resetPassword: (data) => axiosClient.post("/auth/reset-password", data),
  sendOtpResetPassword: (data) =>
    axiosClient.post("/auth/reset-password/send-otp", data),
  verifyOtp: (data) => axiosClient.post("/auth/verity-otp", data),
};

export default authApi;
