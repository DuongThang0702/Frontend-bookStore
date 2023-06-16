import axiosClient from "@/config/axios";

export const apiGetBooks = (params?: object) =>
  axiosClient({
    url: "/book/",
    method: "get",
    params,
  });

export const apiGetBookById = (params: { bid: string }) =>
  axiosClient({ url: `/book/book-id/${params.bid}`, method: "get", params });
