import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Column, Task } from "../../shared/types";
import { BaseState } from "./types/BaseState";
import { teamMock } from "../../shared/services/mock/team/teamMock";
import { DropResult } from "@hello-pangea/dnd";
import { findTaskById } from "../../shared/services/task/findTaskById";

const tempAreaMock = teamMock[0].areas[0];

type ColumnState = BaseState<Column>;

//TODO: set INITIAL STATE 
const initialState: ColumnState = {
  value: [],
  isSuccess: false,
  isLoading: false,
  isError: false,
  error: "",
};

const findColumns = createAsyncThunk(
  "column/findColumns",

  (areaId: number): Column[] => {
    const columns: Column[] = [];

    tempAreaMock.columns.forEach(column => columns.push(column));

    console.log(columns);

    return columns;
  }
);

export const columnSlice = createSlice({
  name: "column",
  initialState,

  reducers: {
    reorder(state, action: PayloadAction<DropResult>) {
      // const {source, destination} = action.payload;
      // const draggableId = Number(action.payload.draggableId);

      // const sourceColumnIndex = Number(source.droppableId);
      // const targetTask = findTaskById(Number(draggableId));

      // state.value[sourceColumnIndex].tasks = [];

      console.log("tasks: ", state.value[0]);
      
    } 
  }
});

export const { reorder } = columnSlice.actions;
export { };

export default columnSlice.reducer;

