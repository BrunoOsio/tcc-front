import { Task } from "../../types";
import { taskMock } from "../mock/task/taskMock";

export const findTaskById = (taskId: number): Task => {
  const targetTask = taskMock.find(task => task.id === taskId);

  if (!targetTask) return taskMock[0]; 
  
  return targetTask;
}