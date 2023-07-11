import axiosClient from "@/config/axios";

export const apiGetUsers = (params?: object) =>
  axiosClient({ url: "/user/all-user", method: "get", params });

export const apiUpdateUserByAdmin = (data?: object, uid?: string) =>
  axiosClient({ url: `/user/${uid}`, data, method: "patch" });

export const apiDeleteUser = (uid: string) =>
  axiosClient({ url: `/user/${uid}`, method: "delete" });
