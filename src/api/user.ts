import axiosClient from "@/config/axios";

export const apiRegister = (data: object) =>
  axiosClient({ url: "/user/register", method: "post", data });

export const apiLogin = (data: object) =>
  axiosClient({ url: "/user/login", method: "post", data });
