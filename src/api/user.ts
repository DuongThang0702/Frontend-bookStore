import axiosClient from "@/config/axios";

export const apiRegister = (data: object) =>
  axiosClient({
    url: "/user/register",
    method: "post",
    data,
    withCredentials: true,
  });

export const apiLogin = (data: object) =>
  axiosClient({ url: "/user/login", method: "post", data });

export const apiForgotPassword = (data: object) =>
  axiosClient({ url: "/user/forgot-password", method: "post", data });

export const apiResetPassword = (data: object) =>
  axiosClient({ url: "/user/reset-password", method: "patch", data });
