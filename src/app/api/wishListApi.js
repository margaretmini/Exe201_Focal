import axiosClient from "./axiosClient";

const wishListApi = {
  wishList: () => axiosClient.get("/wishlist"),
  deleteWishItem: (id) => axiosClient.delete(`/wishlist/${id}`),
  createWishItem: (data) => axiosClient.post("/wishlist", data)
};

export default wishListApi;
