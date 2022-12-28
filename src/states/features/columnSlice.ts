import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Column, Task } from "../../shared/types";
import { BaseState } from "./types/BaseState";
import { DropResult } from "@hello-pangea/dnd";
import { debugDropResult, formatColumnsOrderResult, formatDndValues, updateTaskOrderOnNewTask } from "../../shared/helpers/area/beautifulDndIdHelpers";

import columnService from "../../shared/services/column/columnService";
import { createColumnData } from "./helpers/createColumnData";
import { RootState } from "../app/store";
import { TaskReferencedToColumnDTO } from "../../shared/dtos/task/TaskReferencedToColumnDTO";
import taskService from "../../shared/services/task/taskService";
import { ColumnReferencedToAreaDTO } from "../../shared/dtos/column/ColumnReferencedToAreaDTO";
import { UpdatedTaskReferencedToColumnDTO } from "../../shared/dtos/task/UpdatedTaskReferencedToColumnDTO";
import { RemoveTaskDTO } from "../../shared/dtos/task/RemoveTaskDTO";
import { UpdateColumnDTO } from "../../shared/dtos/column/UpdateColumnDTO";

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

  async (areaId: number): Promise<Column[]> => {
    const formattedColumns: Column[] = [];

    const columns = await columnService.findColumns(areaId);
    
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
    const { column } = getState() as RootState;

    const {draggedTaskId, sourceColumn, destinationColumn} = formatDndValues(dropResult);

    const sourceColumnState = column.value[sourceColumn.index];
    const destinationColumnState = column.value[destinationColumn.index];

    const columnsOrderResult = formatColumnsOrderResult(draggedTaskId, sourceColumnState, destinationColumnState);
    
    await columnService.patchReorder(columnsOrderResult);
  }
);

const patchCreateTask = createAsyncThunk(
  "column/patchCreateTask",

  async (taskReferencedToColumnDTO: TaskReferencedToColumnDTO) => {
    await taskService.createTask(taskReferencedToColumnDTO);
  }
);

const patchUpdateTask = createAsyncThunk(
  "column/patchUpdateTask",

  async (task: UpdatedTaskReferencedToColumnDTO) => {
    await taskService.updateTask(task);
  }
);

const patchRemoveTask = createAsyncThunk(
  "column/patchRemoveTask",

  async (taskId: number) => {
    await taskService.remove(taskId);
  }
);

const patchCreateColumn = createAsyncThunk(
  "column/patchCreateColumn",

  async (columnReferencedToAreaDTO: ColumnReferencedToAreaDTO) => {
    await columnService.createColumn(columnReferencedToAreaDTO);
  }
);

const patchUpdateColumn = createAsyncThunk(
  "column/patchUpdateColumn",

  async (updateColumnDTO: UpdateColumnDTO) => {
    await columnService.updateColumn(updateColumnDTO);
  }
);

const patchRemoveColumn = createAsyncThunk(
  "column/patchRemoveColumn",

  async (columnId: number) => {
    await columnService.removeColumn(columnId);
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
    },

    createTask(state, action: PayloadAction<TaskReferencedToColumnDTO>) {
      const  { columnId, temporaryReduxId, title, description, createdAt, limitAt } = action.payload;

      const columnIndexState = state.value.findIndex(column => column.id === columnId);
  
      const newTask: Task = {
        id: temporaryReduxId!,
        title: title,
        description: description,
        createdAt: createdAt,
        limitAt: limitAt,
        isFinished: false,
        members: [],
        owner: undefined
      }
      
      const taskIdsOrder = state.value[columnIndexState].taskIdsOrder;
      state.value[columnIndexState].tasks.unshift(newTask);
      state.value[columnIndexState].taskIdsOrder = updateTaskOrderOnNewTask(newTask.id, taskIdsOrder!);
    },

    createColumn(state, action: PayloadAction<ColumnReferencedToAreaDTO>) {
      const {title, temporaryReduxId} = action.payload;

      const newColumn: Column = {
        id: temporaryReduxId,
        title: title,
        isForDoneTasks: false,
        taskIdsOrder: null,
        tasks: []
      }

      state.value.push(newColumn);
    },

    updateTask(state, action: PayloadAction<UpdatedTaskReferencedToColumnDTO>) {
      const {columnId, id: taskId, title, description, createdAt, limitAt, isFinished} = action.payload;

      const columnIndexState = state.value.findIndex(column => column.id === columnId);
      const oldTaskIndexState = state.value[columnIndexState].tasks.findIndex(task => task.id === taskId);

      const updatedTask: Task = {
        id: taskId,
        title: title,
        description: description,
        createdAt: createdAt,
        limitAt: limitAt,
        isFinished: isFinished,
        members: [],
        owner: undefined
      }

      state.value[columnIndexState].tasks[oldTaskIndexState] = updatedTask;
    },

    removeTask(state, action: PayloadAction<RemoveTaskDTO>) {
      const {columnId, task: targetRemoveTask} = action.payload;

      const columnIndexState = state.value.findIndex(column => column.id === columnId);
      const columnState = state.value[columnIndexState];

      let newTasks = Array.from(columnState.tasks);

      const targetRemoveTaskIndexState = state.value[columnIndexState].tasks.findIndex(task => task.id === targetRemoveTask.id);
      newTasks.splice(targetRemoveTaskIndexState, 1);

      columnState.tasks = newTasks;
    },

    updateColumn(state, action: PayloadAction<UpdateColumnDTO>) {
      const {id, title, isForDoneTasks} = action.payload;

      const columnIndexState = state.value.findIndex(column => column.id === id);
      let columnState = state.value[columnIndexState];

      columnState.title = title;
      columnState.isForDoneTasks = isForDoneTasks;
    },

    removeColumn(state, action: PayloadAction<Column>) {
      const { id } = action.payload;
      // const columnIndexState = state.value.findIndex(column => column.id === id);
      const newColumns = state.value.filter(column => column.id != id);

      state.value = newColumns;
    }
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

export const { 
  reorder, 
  createTask, 
  updateTask, 
  removeTask,
  createColumn, 
  updateColumn,
  removeColumn,
} = columnSlice.actions;

export { 
  findColumns, 
  findColumnById, 
  patchReorder, 
  patchCreateTask, 
  patchUpdateTask,
  patchRemoveTask,
  patchCreateColumn,
  patchUpdateColumn,
  patchRemoveColumn
};

export default columnSlice.reducer;

