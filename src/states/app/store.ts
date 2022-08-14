import { configureStore } from "@reduxjs/toolkit";
import columnReducer from "../features/columnSlice";

export const store = configureStore({
  reducer: {
    column: columnReducer,
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>