import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as actions from "./asyncAction";
import { UserCurrent } from "@/utils/IUser";

interface UserSlice {
  isLoggedIn: boolean;
  access_token: string;
}

const initialState = {
  isLoggedIn: false,
  access_token: null as string | null,
  current: null as UserCurrent | null,
  isLoading: false,
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
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actions.getUserCurrent.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(actions.getUserCurrent.fulfilled, (state, action) => {
      state.isLoading = false;
      state.current = action.payload;
    });
    builder.addCase(actions.getUserCurrent.rejected, (state) => {
      state.isLoading = false;
      state.current = null;
    });
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
