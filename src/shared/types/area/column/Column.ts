import { Task } from "../..";

export type Column = {
  id: number;
  title: string;
  tasks: Task[];
  tasksIdOrder: string | undefined;
  isForDoneTasks: boolean;
}