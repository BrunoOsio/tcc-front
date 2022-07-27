import { Column } from "../../../../types";
import { taskMock } from "../../task/taskMock";

export const columnMock: Column[] = [
  {
    id: 1,
    title: "titulo1",
    tasks: [
      taskMock[0],
      taskMock[1]
    ]
  }
];