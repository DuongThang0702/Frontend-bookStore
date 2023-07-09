import axiosClient from "../../config/axios";

export const getAll = () => axiosClient({ url: "/category", method: "get" });
