import axios from "axios";

const urlApi = "https://focal-e7i5.onrender.com";
const axiosClient = axios.create({
  baseURL: `${urlApi}`,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
