import { DropResult } from "@hello-pangea/dnd";
import { findTaskById } from "../services/task/findTaskById";

const DEFAULT_SEPARATOR = "-";

const createBeautifulDndId = (id: number, prefix: string): string => {

  return `${prefix + DEFAULT_SEPARATOR + id}`;
}

export const draggableId = (id: number, prefix = "draggable"):string => {
  return createBeautifulDndId(id, prefix);
}

export const droppableId = (id: number, prefix = "droppable"): string => {
  return createBeautifulDndId(id, prefix);
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
  const draggedTask = findTaskById(draggableId);

  const sourceTaskIndex = source.index;
  const destinationTaskIndex = destination?.index || 0;

  //droppableId
  const sourceColumnDroppableId = getNumberId(source.droppableId);
  const destinationColumnDroppableId = getNumberId(destination?.droppableId);
  

  //columnIndex
  const sourceColumnIndex = getColumnIndex(sourceColumnDroppableId);

  const destinationColumnIndex = getColumnIndex(destinationColumnDroppableId);

  const formattedDndValues = {
    draggedTask: draggedTask,

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