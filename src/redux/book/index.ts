import { createSlice } from "@reduxjs/toolkit";
import * as actions from "./asyncAction";
import { ICategory } from "@/utils/interface";

// interface initialState {
//   Categories: ICategory;
//   isLoading: boolean;
//   errors: boolean;
// }

const initialState = {
  Categories: null as ICategory | null,
  isLoading: false,
  errors: false,
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actions.getCategoriesBook.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(actions.getCategoriesBook.fulfilled, (state, action) => {
      state.isLoading = false;
      state.errors = false;
      state.Categories = action.payload;
    });
    builder.addCase(actions.getCategoriesBook.rejected, (state) => {
      state.isLoading = false;
      state.errors = true;
    });
  },
});

export const {} = bookSlice.actions;

export default bookSlice.reducer;
