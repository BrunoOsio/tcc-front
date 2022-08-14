import { Area } from "../../../types";
import { userMock } from "../user/userMock";
import { columnMock } from "./column/columnMock";

export const areaMock: Area[] = [
  {
    id: 1,
    title: "titulo1",
    columns: [
      columnMock[0],
      // columnMock[1],
      // columnMock[2]
    ],
    specialization: "programming",
    leader: userMock[0]
  }
];