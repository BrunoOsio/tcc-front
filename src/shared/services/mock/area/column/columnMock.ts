import { Column } from "../../../../types";
import { taskMock } from "../../task/taskMock";

export const columnMock: Column[] = [
  {
    id: 254,
    title: "Ideias",
    tasks: [
      taskMock[0],
      taskMock[1],
      taskMock[2],
      taskMock[3]
    ],
    tasksIdOrder: undefined,
    isForDoneTasks: false,
  },
  {
    id: 765,
    title: "A fazer",
    tasks: [
      taskMock[4],
      taskMock[5],
    ],
    tasksIdOrder: undefined,
    isForDoneTasks: false,
  },
  {
    id: 3,
    title: "A fazer",
    tasks: [

    ],
    tasksIdOrder: undefined,
    isForDoneTasks: false,
  },
  {
    id: 4,
    title: "A fazer",
    tasks: [
      taskMock[6],
    ],
    tasksIdOrder: undefined,
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
    tasksIdOrder: undefined,
    isForDoneTasks: false,
  },
  {
    id: 6,
    title: "Concluído",
    tasks: [

    ],
    tasksIdOrder: undefined,
    isForDoneTasks: true
  }
];