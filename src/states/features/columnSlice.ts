import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Column, Task } from "../../shared/types";
import { BaseState } from "./types/BaseState";
import { teamMock } from "../../shared/services/mock/team/teamMock";
import { DropResult } from "@hello-pangea/dnd";
import { findTaskById } from "../../shared/services/task/findTaskById";

const tempAreaMock = teamMock[0].areas[0];

type ColumnState = BaseState<Column>;

const initialState: ColumnState = {
  value: [tempAreaMock.columns[0]],
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
      const {source, destination} = action.payload;

      const draggableId = Number(action.payload.draggableId);
      const targetTask = findTaskById(Number(draggableId));

      
      const sourceTaskIndex = source.index;
      const destinationTaskIndex = destination?.index || -1;
      
      const columnIndex = Number(source.droppableId) - 1;
      const column = state.value[columnIndex];

      const newTasks = Array.from(column.tasks);
      newTasks.splice(sourceTaskIndex, 1);
      newTasks.splice(destinationTaskIndex, 0, targetTask);      

      state.value[columnIndex].tasks = newTasks;
    } 
  }
});

export const { reorder } = columnSlice.actions;
export { };

export default columnSlice.reducer;

