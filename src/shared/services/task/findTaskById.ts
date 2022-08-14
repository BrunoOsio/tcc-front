import { Task } from "../../types";
import { taskMock } from "../mock/task/taskMock";

export const findTaskById = (taskId: number): Task | undefined => {
  const targetTask = taskMock.find(task => task.id === taskId);
  
  return targetTask;
}