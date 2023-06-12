import axiosClient from "@/config/axios";

export const apiGetBooks = (params?: object) =>
  axiosClient({ url: "/book/", method: "get", params });
