import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Column, Task } from "../../shared/types";
import { BaseState } from "./types/BaseState";
import { teamMock } from "../../shared/services/mock/team/teamMock";
import { DropResult } from "@hello-pangea/dnd";
import { findTaskById } from "../../shared/services/task/findTaskById";
import { debugDropResult, getNumberId } from "../../shared/helpers/beautifulDndIdHelpers";
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
    //TODO: Refactor multi reorder
    reorder(state, action: PayloadAction<DropResult>) {
      const {source, destination} = action.payload;

      debugDropResult(action.payload);     

      //task
      const draggableId = getNumberId(action.payload.draggableId);
      const targetTask = findTaskById(draggableId);

      const sourceTaskIndex = source.index;
      const destinationTaskIndex = destination?.index || 0;

      //droppableId
      const sourceColumn = getNumberId(source.droppableId);
      const destinationColumn = getNumberId(destination?.droppableId);
      
      //column
      const sourceColumnIndex = sourceColumn - 1;
      const sourceColumnState = state.value[sourceColumnIndex];

      //state
      const destinationColumnIndex = destinationColumn - 1;
      const destinationColumnState = state.value[destinationColumnIndex];

      if (sourceColumn === destinationColumn) {
        //reorder
        let sourceNewTasks = Array.from(sourceColumnState.tasks);
        sourceNewTasks.splice(sourceTaskIndex, 1);
        sourceNewTasks.splice(destinationTaskIndex, 0, targetTask);
              
        sourceColumnState.tasks = sourceNewTasks;

      } else {
        //reorder multiple
        let sourceNewTasks = Array.from(sourceColumnState.tasks);
        sourceNewTasks.splice(sourceTaskIndex, 1);

        state.value[sourceColumnIndex].tasks = sourceNewTasks

        let destinationNewTasks = Array.from(destinationColumnState.tasks);
        destinationNewTasks.splice(destinationTaskIndex, 0, targetTask);

        destinationColumnState.tasks = destinationNewTasks
      }

      const rawSourceTasksIdOrder: string[] = state.value[sourceColumnIndex].tasks
        .map(task => `${task.id}`);

        console.log(rawSourceTasksIdOrder)

      const rawDestinationTasksIdOrder: string[] = state.value[destinationColumnIndex].tasks
        .map(task => String(`${task.id}`));

      const TASK_ORDER_SEPARATOR = " ";
      const sourceTasksIdOrder = rawSourceTasksIdOrder.join(TASK_ORDER_SEPARATOR);
      const destinationTasksIdOrder = rawDestinationTasksIdOrder.join(TASK_ORDER_SEPARATOR);
      
      //TODO: update on database columnsOrder
      const columnsOrderResult: ColumnsOrderResult = {
        sourceColumn: createColumnOrder(sourceColumnIndex, sourceTasksIdOrder),
        destinationColumn: createColumnOrder(destinationColumnIndex, destinationTasksIdOrder)
      }

      console.log(columnsOrderResult);

      state.value[sourceColumnIndex].tasksIdOrder = columnsOrderResult.sourceColumn.taskIdsOrder;
      state.value[destinationColumnIndex].tasksIdOrder = columnsOrderResult.destinationColumn.taskIdsOrder;
    },
  }
});

export const { reorder } = columnSlice.actions;
export { };

export default columnSlice.reducer;

