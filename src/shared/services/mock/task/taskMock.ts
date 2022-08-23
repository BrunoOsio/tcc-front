import { Task } from "../../../types";
import { createDateOfNow, createDaysLimitOf } from "../../../helpers/dateHelpers";
import { userMock } from "../user/userMock";

export const taskMock: Task[] = [  
  {
    id: 1,
    title: "titulo1",
    description: "descricao1",
    createdAt: createDateOfNow(),
    limitAt: createDaysLimitOf(4),
    isFinished: false,
    owner: userMock[0],
    members: [
      userMock[0],
      userMock[1],
      userMock[2],
    ]
  },
  {
    id: 2,
    title: "titulo2",
    description: undefined,
    createdAt: createDateOfNow(),
    limitAt: undefined,
    isFinished: true,
    owner: userMock[0],
    members: [
      userMock[2],
      userMock[1]
    ]
  },
  {
    id: 3,
    title: "titulo3",
    description: undefined,
    createdAt: createDateOfNow(),
    limitAt: undefined,
    isFinished: false,
    owner: userMock[1],
    members: [
      userMock[1],
      userMock[2]
    ]
  },
  {
    id: 4,
    title: "titulo4",
    description: undefined,
    createdAt: createDateOfNow(),
    limitAt: undefined,
    isFinished: true,
    owner: userMock[0],
    members: [
      userMock[2],
      userMock[1]
    ]
  },
  {
    id: 5,
    title: "titulo5",
    description: undefined,
    createdAt: createDateOfNow(),
    limitAt: undefined,
    isFinished: true,
    owner: userMock[0],
    members: [
      userMock[2],
      userMock[1]
    ]
  },
  {
    id: 6,
    title: "titulo6",
    description: undefined,
    createdAt: createDateOfNow(),
    limitAt: undefined,
    isFinished: true,
    owner: userMock[0],
    members: [
      userMock[2],
      userMock[1]
    ]
  },
  {
    id: 7,
    title: "titulo7",
    description: undefined,
    createdAt: createDateOfNow(),
    limitAt: undefined,
    isFinished: true,
    owner: userMock[0],
    members: [
      userMock[2],
      userMock[1]
    ]
  },
  {
    id: 8,
    title: "titulo8",
    description: undefined,
    createdAt: createDateOfNow(),
    limitAt: undefined,
    isFinished: true,
    owner: userMock[0],
    members: [
      userMock[2],
      userMock[1]
    ]
  }
];