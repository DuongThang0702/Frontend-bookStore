import axiosClient from "@/config/axios";

export const apiRegister = (data: object) =>
  axiosClient({
    url: "/user/register",
    method: "post",
    data,
    withCredentials: true,
  });

export const apiLogin = (data: object) =>
  axiosClient({
    url: "/user/login",
    method: "post",
    data,
    withCredentials: true,
  });

export const apiForgotPassword = (data: object) =>
  axiosClient({ url: "/user/forgot-password", method: "post", data });

export const apiResetPassword = (data: object) =>
  axiosClient({ url: "/user/reset-password", method: "patch", data });

export const apiGetUserCurrent = () =>
  axiosClient({ url: "/user/current", method: "get" });

export const apiLogout = () =>
  axiosClient({ url: "/user/logout", method: "delete", withCredentials: true });
