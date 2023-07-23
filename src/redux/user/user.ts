import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as actions from "./asyncAction";
import { UserCurrent } from "@/utils/interface/IUser";

interface UserSlice {
  isLoggedIn: boolean;
  access_token: string;
}

const initialState = {
  isLoggedIn: false,
  access_token: null as string | null,
  current: null as UserCurrent | null,
  isLoading: false,
  mes: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, { payload }: PayloadAction<UserSlice>) => {
      state.access_token = payload.access_token;
      state.isLoggedIn = payload.isLoggedIn;
    },
    logout: (state) => {
      state.access_token = null;
      state.isLoggedIn = false;
      state.current = null;
    },
    clearMes: (state) => {
      state.mes = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actions.getUserCurrent.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(actions.getUserCurrent.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.current = action.payload;
    });
    builder.addCase(actions.getUserCurrent.rejected, (state) => {
      state.isLoading = false;
      state.current = null;
      state.isLoggedIn = false;
      state.access_token = null;
      state.mes = "Login session has expired, please login again";
    });
  },
});

export const { login, logout, clearMes } = userSlice.actions;

export default userSlice.reducer;
