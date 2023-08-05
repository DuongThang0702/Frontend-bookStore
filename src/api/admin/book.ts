import axiosClient from "@/config/axios";

export const apiCreateBook = (data: object) =>
  axiosClient({ url: "/book/", method: "post", data });

export const apiUpdateBook = (data: object, bid: string) =>
  axiosClient({ url: `/book/${bid}`, method: "patch", data });

export const apiDeleteBook = (bid: string) =>
  axiosClient({ url: `/book/${bid}`, method: "delete" });
