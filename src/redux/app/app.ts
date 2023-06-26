import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Payload {
  modelChildren: any;
  isShowModel: boolean;
}

const initialState = {
  isShowModel: false,
  modelChildren: null,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    showModel: (state, { payload }: PayloadAction<Payload>) => {
      state.isShowModel = payload.isShowModel;
      state.modelChildren = payload.modelChildren;
    },
  },
});

export const { showModel } = appSlice.actions;
export default appSlice.reducer;
