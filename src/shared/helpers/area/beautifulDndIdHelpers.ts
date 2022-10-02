import { DropResult } from "@hello-pangea/dnd";
import { ColumnsOrderResult } from "../../../states/features/types/column/ColumnsOrderResult";
import taskService from "../../services/task/taskService";
import { Column } from "../../types";
import { createColumnOrder } from "./column/createColumnOrder";

const DEFAULT_SEPARATOR = "-";

const createBeautifulDndId = (id: number, prefix: string): string => {

  return `${prefix + DEFAULT_SEPARATOR + id}`;
}

export const draggableId = (id: number, prefix = "draggable"):string => {
  return createBeautifulDndId(id, prefix);
}

export const droppableId = (index: number, prefix = "droppable"): string => {
  return createBeautifulDndId(index, prefix);
}

export const getNumberId = (id: string | undefined): number => {
  if (!id) return -1;

  return Number(id.split(DEFAULT_SEPARATOR)[1]);
}

export const getColumnIndex = (columnDndId: number) => {
  return columnDndId - 1;
}

export const formatDndValues = (dropResult: DropResult) => {
  const {source, destination, draggableId: rawDraggableId} = dropResult;

  const draggableId = getNumberId(rawDraggableId);

  const sourceTaskIndex = source.index;
  const destinationTaskIndex = destination?.index || 0;

  //droppableId
  const sourceColumnDroppableId = getNumberId(source.droppableId);
  const destinationColumnDroppableId = getNumberId(destination?.droppableId);
  
  //columnIndex
  const sourceColumnIndex = getColumnIndex(sourceColumnDroppableId);

  const destinationColumnIndex = getColumnIndex(destinationColumnDroppableId);

  const formattedDndValues = {
    draggedTaskId: draggableId,

    sourceColumn: {
      id: sourceColumnDroppableId,
      index: sourceColumnIndex,
      taskIndex: sourceTaskIndex,
    },

    destinationColumn: {
      id: destinationColumnDroppableId,
      index: destinationColumnIndex,
      taskIndex: destinationTaskIndex
    }
  }

  return formattedDndValues;
}

export const formatColumnsOrderResult = (draggedTaskId: number, sourceColumn: Column, destinationColumn: Column): ColumnsOrderResult => {
  const rawSourceTasksIdOrder: string[] = sourceColumn.tasks
    .map(task => String(task.id));

  const rawDestinationTasksIdOrder: string[] = destinationColumn.tasks
    .map(task => String(task.id));

  const TASK_ORDER_SEPARATOR = " ";
  const sourceTasksIdOrder = rawSourceTasksIdOrder.join(TASK_ORDER_SEPARATOR);
  const destinationTasksIdOrder = rawDestinationTasksIdOrder.join(TASK_ORDER_SEPARATOR);

  const columnsOrderResult: ColumnsOrderResult = {
    taskId: draggedTaskId,
    sourceColumn: createColumnOrder(sourceColumn.id, sourceTasksIdOrder),
    destinationColumn: createColumnOrder(destinationColumn.id, destinationTasksIdOrder)
  }

  return columnsOrderResult;
}

export const updateTaskOrderOnNewTask = (taskId: number, tasksOrder: string): string | null => {
  if(!tasksOrder) return null;

  const tasksOrderArray = tasksOrder.split(" ");
  tasksOrderArray.unshift(String(taskId));
  const newTasksOrder = tasksOrderArray.join(" ");

  return newTasksOrder;
}

export const debugDropResult = (dropResult: DropResult): void => {
  console.log(`
  --------------------
  > Lista reordenada <

  Tarefa ID: ${dropResult.draggableId}

  Coluna origem: ${dropResult.source.droppableId}
  ::: posicao inicial da tarefa no indice = ${dropResult.source.index} :::

  Coluna destino: ${dropResult.destination?.droppableId}
  ::: posicao final da tarefa no indice = ${dropResult.destination?.index} :::
  --------------------

  `);
}