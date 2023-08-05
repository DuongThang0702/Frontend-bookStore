import { apiGetCategoryBooks } from "@/api/";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCategoriesBook = createAsyncThunk(
  "book/categories",
  async (_, { rejectWithValue }) => {
    const response = await apiGetCategoryBooks();
    if (response.data?.error === 1) return rejectWithValue(response);
    if (response.data?.error === 0) return response.data;
  }
);
