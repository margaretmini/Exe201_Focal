import axios from "axios";
const token = localStorage.getItem("undecodeToken");
const urlApi = "https://focal-e7i5.onrender.com";
const axiosClient = axios.create({
  baseURL: `${urlApi}`,

  headers: {
    "Content-Type": "application/json",
    Authorization: token ? `Bearer ${token}` : undefined,
  },
});

export default axiosClient;
