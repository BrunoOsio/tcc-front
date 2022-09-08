import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Column, Task } from "../../shared/types";
import { BaseState } from "./types/BaseState";
import { teamMock } from "../../shared/services/mock/team/teamMock";
import { DropResult } from "@hello-pangea/dnd";
import { findTaskById } from "../../shared/services/task/findTaskById";
import { debugDropResult, formatDndValues, getNumberId } from "../../shared/helpers/beautifulDndIdHelpers";
import { ColumnsOrderResult } from "./types/column/ColumnsOrderResult";
import { createColumnOrder } from "../../shared/helpers/column/createColumnOrder";

const tempAreaMock = teamMock[0].areas[0];

type ColumnState = BaseState<Column>;

const initialState: ColumnState = {
  value: [
    tempAreaMock.columns[0], 
    tempAreaMock.columns[1], 
    tempAreaMock.columns[2],
    tempAreaMock.columns[3],
    tempAreaMock.columns[4],
    tempAreaMock.columns[5]
  ],
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
    //TODO: Refactor columnOrderResult
    reorder(state, action: PayloadAction<DropResult>) {
      const {draggedTask, sourceColumn, destinationColumn} = formatDndValues(action.payload);

      debugDropResult(action.payload);     

      const sourceColumnState = state.value[sourceColumn.index];
      const destinationColumnState = state.value[destinationColumn.index];

      let sourceNewTasks = Array.from(sourceColumnState.tasks);
      sourceNewTasks.splice(sourceColumn.taskIndex, 1);
      sourceNewTasks.splice(destinationColumn.taskIndex, 0, draggedTask);

      sourceColumnState.tasks = sourceNewTasks;
      
      const isMultiColumnReorder = sourceColumn !== destinationColumn;

      if (isMultiColumnReorder) {
        let destinationNewTasks = Array.from(destinationColumnState.tasks);
        destinationNewTasks.splice(destinationColumn.taskIndex, 0, draggedTask);
  
        destinationColumnState.tasks = destinationNewTasks
      }
      
      const rawSourceTasksIdOrder: string[] = sourceColumnState.tasks
        .map(task => `${task.id}`);

      const rawDestinationTasksIdOrder: string[] = destinationColumnState.tasks
        .map(task => String(`${task.id}`));

      const TASK_ORDER_SEPARATOR = " ";
      const sourceTasksIdOrder = rawSourceTasksIdOrder.join(TASK_ORDER_SEPARATOR);
      const destinationTasksIdOrder = rawDestinationTasksIdOrder.join(TASK_ORDER_SEPARATOR);
      
      //TODO: update on database columnsOrder
      const columnsOrderResult: ColumnsOrderResult = {
        sourceColumn: createColumnOrder(sourceColumn.index, sourceTasksIdOrder),
        destinationColumn: createColumnOrder(destinationColumn.index, destinationTasksIdOrder)
      }

      console.log(columnsOrderResult);

      sourceColumnState.tasksIdOrder = columnsOrderResult.sourceColumn.taskIdsOrder;
      destinationColumnState.tasksIdOrder = columnsOrderResult.destinationColumn.taskIdsOrder;
    },
  }
});

export const { reorder } = columnSlice.actions;
export { };

export default columnSlice.reducer;

