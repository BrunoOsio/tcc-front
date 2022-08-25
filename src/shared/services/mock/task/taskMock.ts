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
    isFinished: false,
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

    ]
  },
  {
    id: 4,
    title: "titulo4",
    description: undefined,
    createdAt: createDateOfNow(),
    limitAt: undefined,
    isFinished: false,
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
    isFinished: false,
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
    isFinished: false,
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
    isFinished: false,
    owner: userMock[0],
    members: [

    ]
  },
  {
    id: 8,
    title: "titulo8",
    description: undefined,
    createdAt: createDateOfNow(),
    limitAt: undefined,
    isFinished: false,
    owner: userMock[0],
    members: [

    ]
  },
  {
    id: 9,
    title: "titulo9",
    description: undefined,
    createdAt: createDateOfNow(),
    limitAt: createDaysLimitOf(7),
    isFinished: false,
    owner: userMock[0],
    members: [
      userMock[2],
      userMock[1]
    ]
  },
  {
    id: 10,
    title: "titulo10",
    description: undefined,
    createdAt: createDateOfNow(),
    limitAt: createDaysLimitOf(30),
    isFinished: false,
    owner: userMock[0],
    members: [

    ]
  },
  {
    id: 11,
    title: "titulo11",
    description: undefined,
    createdAt: createDateOfNow(),
    limitAt: undefined,
    isFinished: false,
    owner: userMock[0],
    members: [
      userMock[2],
    ]
  },
  {
    id: 12,
    title: "titulo12",
    description: undefined,
    createdAt: createDateOfNow(),
    limitAt: createDaysLimitOf(1),
    isFinished: false,
    owner: userMock[0],
    members: [

    ]
  },
  {
    id: 13,
    title: "titulo13",
    description: undefined,
    createdAt: createDateOfNow(),
    limitAt: createDaysLimitOf(1),
    isFinished: false,
    owner: userMock[0],
    members: [

    ]
  },
  {
    id: 14,
    title: "titulo14",
    description: undefined,
    createdAt: createDateOfNow(),
    limitAt: createDaysLimitOf(1),
    isFinished: false,
    owner: userMock[0],
    members: [

    ]
  },
  {
    id: 15,
    title: "titulo15",
    description: undefined,
    createdAt: createDateOfNow(),
    limitAt: createDaysLimitOf(1),
    isFinished: false,
    owner: userMock[0],
    members: [

    ]
  },
  {
    id: 16,
    title: "titulo16",
    description: undefined,
    createdAt: createDateOfNow(),
    limitAt: createDaysLimitOf(1),
    isFinished: false,
    owner: userMock[0],
    members: [

    ]
  },
  {
    id: 17,
    title: "titulo17",
    description: undefined,
    createdAt: createDateOfNow(),
    limitAt: createDaysLimitOf(1),
    isFinished: false,
    owner: userMock[0],
    members: [

    ]
  },
  {
    id: 18,
    title: "titulo18",
    description: undefined,
    createdAt: createDateOfNow(),
    limitAt: createDaysLimitOf(1),
    isFinished: false,
    owner: userMock[0],
    members: [

    ]
  },
  {
    id: 19,
    title: "titulo19",
    description: undefined,
    createdAt: createDateOfNow(),
    limitAt: createDaysLimitOf(1),
    isFinished: false,
    owner: userMock[0],
    members: [

    ]
  },
  {
    id: 20,
    title: "titulo20",
    description: undefined,
    createdAt: createDateOfNow(),
    limitAt: createDaysLimitOf(1),
    isFinished: false,
    owner: userMock[0],
    members: [

    ]
  }
];