import axiosClient from "@/config/axios";

export const apiGetUsers = (params?: object) =>
  axiosClient({ url: "/user/all-user", method: "get", params });
