import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Column } from "../../shared/types";
import { BaseState } from "./types/BaseState";
import { teamMock } from "../../shared/services/mock/team/teamMock";
import { DropResult } from "@hello-pangea/dnd";
import { debugDropResult, formatColumnsOrderResult, formatDndValues } from "../../shared/helpers/area/beautifulDndIdHelpers";

import columnService from "../../shared/services/column/columnService";
import { createColumnData } from "./helpers/createColumnData";
import { ColumnsOrderResult } from "./types/column/ColumnsOrderResult";
import axios from "axios";
import { RootState } from "../app/store";

const tempAreaMock = teamMock[0].areas[0];

type ColumnState = BaseState<Column>;

const initialState: ColumnState = {
  value: [],
  isSuccess: false,
  isLoading: false,
  isError: false,
  error: "",
};

const findColumns = createAsyncThunk(
  "column/findColumns",

  async (): Promise<Column[]> => {
    const formattedColumns: Column[] = [];

    const columns = await columnService.findColumns();

    for (let column of columns) {
      const columnData = await createColumnData(column);
      formattedColumns.push(columnData);
    }

    return formattedColumns;
  }
);

const findColumnById = createAsyncThunk(
  "column/findColumnById",

  async (columnId: number): Promise<Column> => {
    const column = await columnService.findColumnById(columnId);

    return column;
  }
);

const patchReorder = createAsyncThunk(
  "column/patchNewOrder",

  async (dropResult: DropResult, { getState }) => {
    const state = getState() as RootState;

    const {draggedTaskId, sourceColumn, destinationColumn} = formatDndValues(dropResult);

    const sourceColumnState = state.column.value[sourceColumn.index];
    const destinationColumnState = state.column.value[destinationColumn.index];

    const columnsOrderResult = formatColumnsOrderResult(draggedTaskId, sourceColumnState, destinationColumnState);
    
    await columnService.patchReorder(columnsOrderResult);
  }
);

export const columnSlice = createSlice({
  name: "column",
  initialState,

  reducers: {
    reorder(state, action: PayloadAction<DropResult>) {
      const {draggedTaskId, sourceColumn, destinationColumn} = formatDndValues(action.payload);
      
      const sourceColumnState = state.value[sourceColumn.index];
      const destinationColumnState = state.value[destinationColumn.index];
      
      const draggedTask = sourceColumnState.tasks.filter((task) => task.id === draggedTaskId)[0];

      let sourceNewTasks = Array.from(sourceColumnState.tasks);
      sourceNewTasks.splice(sourceColumn.taskIndex, 1);
      sourceColumnState.tasks = sourceNewTasks;
      
      const isMultiColumnReorder = sourceColumn !== destinationColumn;
      if (isMultiColumnReorder) {
        let destinationNewTasks = Array.from(destinationColumnState.tasks);
        destinationNewTasks.splice(destinationColumn.taskIndex, 0, draggedTask);
  
        destinationColumnState.tasks = destinationNewTasks
      }
            
      // debugDropResult(action.payload);     

      // // //TODO: check if needs reorder on frontend
      // sourceColumnState.taskIdsOrder = columnsOrderResult.sourceColumn.taskIdsOrder || null;
      // destinationColumnState.taskIdsOrder = columnsOrderResult.destinationColumn.taskIdsOrder || null;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(
      findColumns.pending, 
      (state) => {
        state.isLoading = true;
        state.isSuccess = true;
        state.isError = false;
      }
    );

    builder.addCase(
      findColumns.fulfilled, 
      (state, action: PayloadAction<Column[]>) => {
        state.value = action.payload;
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
      }
    );

    builder.addCase(
      findColumns.rejected, 
      (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.error = action.error.message || "Something went wrong";
    });
  } 
});

export const { reorder } = columnSlice.actions;
export { findColumns, findColumnById, patchReorder };

export default columnSlice.reducer;

