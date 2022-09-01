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
    tasksIdOrder: [],
    isForDoneTasks: false,
  },
  {
    id: 2,
    title: "A fazer",
    tasks: [
      taskMock[4],
      taskMock[5],
    ],
    tasksIdOrder: [],
    isForDoneTasks: false,
  },
  {
    id: 3,
    title: "A fazer",
    tasks: [

    ],
    tasksIdOrder: [],
    isForDoneTasks: false,
  },
  {
    id: 4,
    title: "A fazer",
    tasks: [
      taskMock[6],
    ],
    tasksIdOrder: [],
    isForDoneTasks: false,
  },
  {
    id: 5,
    title: "A fazer",
    tasks: [
      taskMock[7],
      taskMock[8],
      taskMock[9],
      taskMock[10],
      taskMock[11],
      taskMock[12],
      taskMock[13],
      taskMock[14],
      taskMock[15],
      taskMock[16],
      taskMock[17],
      taskMock[18]

    ],
    tasksIdOrder: [],
    isForDoneTasks: false,
  },
  {
    id: 6,
    title: "Concluído",
    tasks: [

    ],
    tasksIdOrder: [],
    isForDoneTasks: true
  }
];