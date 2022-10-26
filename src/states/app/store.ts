import { configureStore } from "@reduxjs/toolkit";
import columnReducer from "../features/columnSlice";
import areaReducer from "../features/areaSlice";

export const store = configureStore({
  reducer: {
    column: columnReducer,
    area: areaReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>