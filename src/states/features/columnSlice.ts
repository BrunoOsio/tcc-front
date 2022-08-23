import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Column, Task } from "../../shared/types";
import { BaseState } from "./types/BaseState";
import { teamMock } from "../../shared/services/mock/team/teamMock";
import { DropResult } from "@hello-pangea/dnd";
import { findTaskById } from "../../shared/services/task/findTaskById";
import { debugDropResult, getNumberId } from "../../shared/helpers/beautifulDndIdHelpers";

const tempAreaMock = teamMock[0].areas[0];

type ColumnState = BaseState<Column>;

const initialState: ColumnState = {
  value: [tempAreaMock.columns[0], tempAreaMock.columns[1], tempAreaMock.columns[2]],
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

      debugDropResult(action.payload);

      //task
      const draggableId = getNumberId(action.payload.draggableId);
      const targetTask = findTaskById(draggableId);

      const sourceTaskIndex = source.index;
      const destinationTaskIndex = destination?.index || 0;

      //droppableId
      const sourceDroppableId = getNumberId(source.droppableId);
      const destinationDroppableId = getNumberId(destination?.droppableId);
      
      //column
      const sourceColumnIndex = sourceDroppableId - 1;
      const sourceColumn = state.value[sourceColumnIndex];

      //reorder
      let sourceNewTasks = Array.from(sourceColumn.tasks);
      sourceNewTasks.splice(sourceTaskIndex, 1);
      sourceNewTasks.splice(destinationTaskIndex, 0, targetTask);
            
      state.value[sourceColumnIndex].tasks = sourceNewTasks;
    } 
  }
});

export const { reorder } = columnSlice.actions;
export { };

export default columnSlice.reducer;

