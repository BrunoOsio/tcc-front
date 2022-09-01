import { Task } from "../..";

export type Column = {
  id: number;
  title: string;
  tasks: Task[];
  tasksIdOrder: number[];
  isForDoneTasks: boolean;
}