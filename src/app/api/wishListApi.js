import axiosClient from "./axiosClient";

const wishListApi = {
  wishList: () => axiosClient.get("/wishlist"),
  deleteWishItem: (id) => axiosClient.delete(`/wishlist/${id}`),
};

export default wishListApi;
