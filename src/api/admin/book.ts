import axiosClient from "@/config/axios";

export const apiCreateBook = (data: object) =>
  axiosClient({ url: "/book/", method: "post", data });
