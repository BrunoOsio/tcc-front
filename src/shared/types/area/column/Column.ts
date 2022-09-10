import { Task } from "../..";

export type Column = {
  id: number;
  title: string;
  tasks: Task[];
  taskIdsOrder: string | null;
  isForDoneTasks: boolean;
}