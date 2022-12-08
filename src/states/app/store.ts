import { configureStore } from "@reduxjs/toolkit";
import columnReducer from "../features/columnSlice";
import areaReducer from "../features/areaSlice";
import teamReducer from "../features/teamSlice";
import userReducer from "../features/userSlice";

export const store = configureStore({
  reducer: {
    column: columnReducer,
    area: areaReducer,
    team: teamReducer,
    user: userReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>