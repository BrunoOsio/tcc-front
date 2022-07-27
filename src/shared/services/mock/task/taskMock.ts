import { Task } from "../../../types";
import moment from "moment";
import { createDateOfNow, createLimitDate } from "../../../helpers/dateHelpers";
import { userMock } from "../user/userMock";

export const taskMock: Task[] = [  
  {
    id: 1,
    title: "titulo1",
    description: "descricao1",
    createdAt: createDateOfNow(),
    limitAt: createLimitDate(4),
    members: [
      userMock[0],
      userMock[1]
    ]
  },
  {
    id: 2,
    title: "titulo2",
    description: "descricao2",
    createdAt: createDateOfNow(),
    limitAt: createLimitDate(7),
    members: [
      userMock[2],
      userMock[1]
    ]
  }
];