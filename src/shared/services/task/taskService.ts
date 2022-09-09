import { Task } from "../../types";
import { taskMock } from "../mock/task/taskMock";
import axios from "axios";

const BASE_URL = "http://127.0.0.1:3000/api/tasks/";

const findTaskByIdMock = (taskId: number): Task => {
  const targetTask = taskMock.find(task => task.id === taskId);

  if (!targetTask) return taskMock[0]; 
  
  return targetTask;
}

const findTaskById = async (taskId: number): Promise<Task> => {
  const endpoint = `${BASE_URL + taskId}`;

  const { data } = await axios.get(endpoint);
  
  return data;
}

const findTasksByColumnId = async (columnId: number): Promise<Task[]> => {
  const endpoint = `${BASE_URL}find?columnId=${columnId}`;
  const { data } = await axios.get(endpoint);
  console.log(data);

  return data;
}

export default {findTaskByIdMock, findTaskById, findTasksByColumnId};