import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import userSlice from "./user/user";
import appSlice from "./app";
import bookSlice from "./book";

const commonConfig = {
  key: "BooksStore/user",
  storage,
};
const userConfig = {
  ...commonConfig,
  whitelist: ["isLoggedIn", "access_token", "current"],
};

export const store = configureStore({
  reducer: {
    app: appSlice,
    user: persistReducer<any>(userConfig, userSlice),
    book: bookSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
