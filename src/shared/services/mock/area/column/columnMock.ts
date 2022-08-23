import { Column } from "../../../../types";
import { taskMock } from "../../task/taskMock";

export const columnMock: Column[] = [
  {
    id: 1,
    title: "titulo1",
    tasks: [
      taskMock[0],
      taskMock[1],
      taskMock[2]
    ],
    isDone: false,
  },
  {
    id: 2,
    title: "titulo2",
    tasks: [
      taskMock[3],
      taskMock[4],
    ],
    isDone: false,
  },
  {
    id: 3,
    title: "titulo done",
    tasks: [
      
    ],
    isDone: true
  }
];