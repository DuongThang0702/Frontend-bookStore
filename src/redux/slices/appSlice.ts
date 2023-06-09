import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as apis from "@/api/";

interface Category {
  _id: number;
  title: string;
}

interface CategoriesData {
  data: Array<Category>;
  err?: number;
}

export const GetCategories = createAsyncThunk(
  "app/categories",
  async (data, { rejectWithValue }) => {
    const response: CategoriesData = await apis.appApi.getAll();
    if (response.err === 1) return rejectWithValue(response);
    return response.data;
  }
);

const initialState = {
  categories: null as null | Array<Category>,
  isLoading: false,
  errorMessage: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetCategories.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(GetCategories.fulfilled, (state, action) => {
      state.isLoading = false;
      state.categories = action.payload;
      state.errorMessage = false;
    });

    builder.addCase(GetCategories.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = true;
    });
  },
});

export default appSlice.reducer;
