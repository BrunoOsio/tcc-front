import { Column } from "../../../../types";
import { taskMock } from "../../task/taskMock";

export const columnMock: Column[] = [
  {
    id: 1,
    title: "Ideias",
    tasks: [
      taskMock[0],
      taskMock[1],
      taskMock[2],
      taskMock[3]
    ],
    isDone: false,
  },
  {
    id: 2,
    title: "A fazer",
    tasks: [
      taskMock[5],
      taskMock[4],
    ],
    isDone: false,
  },
  {
    id: 3,
    title: "A fazer",
    tasks: [
      taskMock[5],
      taskMock[4],
    ],
    isDone: false,
  },
  {
    id: 4,
    title: "A fazer",
    tasks: [
      taskMock[5],
      taskMock[4],
    ],
    isDone: false,
  },
  {
    id: 5,
    title: "A fazer",
    tasks: [
      taskMock[5],
      taskMock[4],
    ],
    isDone: false,
  },
  {
    id: 6,
    title: "Concluído",
    tasks: [
      
    ],
    isDone: true
  }
];