import { DropResult } from "@hello-pangea/dnd";

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