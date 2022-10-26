import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Area } from "../../shared/types";
import { BaseState } from "./types/BaseState";
import areaService from "../../shared/services/area/areaService";

type AreaState = BaseState<Area>;

const initialState: AreaState = {
  value: [],
  isSuccess: false,
  isLoading: false,
  isError: false,
  error: "",
};

const findAreas = createAsyncThunk(
  "column/findAreas",

  async (teamId?: number): Promise<Area[]> => {
    const areas = await areaService.findAreas();

    return areas;
  }
);

export const areaSlice = createSlice({
  name: "area",
  initialState,
  reducers: {

  },

  extraReducers: (builder) => {
    builder.addCase(
      findAreas.pending, 
      (state) => {
        state.isLoading = true;
        state.isSuccess = true;
        state.isError = false;
      }
    );

    builder.addCase(
      findAreas.fulfilled, 
      (state, action: PayloadAction<Area[]>) => {
        state.value = action.payload;
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
      }
    );

    builder.addCase(
      findAreas.rejected, 
      (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.error = action.error.message || "Something went wrong";
    });
  }
});

export const { } = areaSlice.actions;
export { findAreas };

export default areaSlice.reducer;
