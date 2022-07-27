import { Task } from "../../../types";
import moment from "moment";
import { setDaysLimit } from "../../../helpers/dateHelpers";
import { userMock } from "../user/userMock";

export const taskMock: Task[] = [  
  {
    id: 1,
    title: "titulo1",
    description: "descricao1",
    createdAt: moment(),
    limitAt: setDaysLimit(moment(), 20),
    members: [
      userMock[0],
      userMock[1]
    ]
  },
  {
    id: 2,
    title: "titulo2",
    description: "descricao2",
    createdAt: moment(),
    limitAt: setDaysLimit(moment(), 10),
    members: [
      userMock[2],
      userMock[1]
    ]
  }
];