import { Task } from "../..";

export type Column = {
  id: number;
  title: string;
  tasks: Task[];
  isDone: boolean;
}