import { configureStore } from "@reduxjs/toolkit";
import columnReducer from "../features/columnSlice";
import areaReducer from "../features/areaSlice";
import teamReducer from "../features/teamSlice";

export const store = configureStore({
  reducer: {
    column: columnReducer,
    area: areaReducer,
    team: teamReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>