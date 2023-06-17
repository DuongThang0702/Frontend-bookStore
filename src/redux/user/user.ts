import { UserData } from "@/utils/IUser";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  current: null as UserData | null,
  access_token: null as string | null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    register: (
      state,
      {
        payload,
      }: PayloadAction<{
        userData: UserData;
        isLoggedIn: boolean;
        access_token: string;
      }>
    ) => {
      state.access_token = payload.access_token;
      state.isLoggedIn = payload.isLoggedIn;
      state.current = payload.userData;
    },
  },
});

export const { register } = userSlice.actions;

export default userSlice.reducer;
