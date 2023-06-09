import axios from "../config/axios";

export const getAll = () => axios({ url: "/category", method: "get" });
