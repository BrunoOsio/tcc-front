import { Task } from "../../types";
import axios from "axios";
import { NewTaskDTO } from "../../dtos/task/NewTaskDTO";
import { TaskReferencedToColumnDTO } from "../../dtos/task/TaskReferencedToColumnDTO";
import { UpdateTaskDTO } from "../../dtos/task/UpdateTaskDTO";
import { UpdatedTaskReferencedToColumnDTO } from "../../dtos/task/UpdatedTaskReferencedToColumnDTO";

const BASE_URL = "http://127.0.0.1:3000/api/tasks/";

const findTaskById = async (taskId: number): Promise<Task> => {
  const endpoint = `${BASE_URL + taskId}`;

  const { data } = await axios.get(endpoint);
  
  return data;
}

const isTaskExist = async (taskId: number): Promise<boolean> => {
  const endpoint = `${BASE_URL}${taskId}/isExist`;

  const { data } = await axios.get(endpoint);

  return data;
}

const findTasksByColumnId = async (columnId: number): Promise<Task[]> => {
  const endpoint = `${BASE_URL}find?columnId=${columnId}`;
  const { data } = await axios.get(endpoint);

  return data;
}

const createTask = async (taskReferencedToColumnDTO: TaskReferencedToColumnDTO) => {
  const { columnId, title, description, createdAt, limitAt } = taskReferencedToColumnDTO;
  const endpoint = `${BASE_URL}?columnId=${columnId}`;

  const newTaskDTO: NewTaskDTO = {
    title: title,
    description: description,
    createdAt: createdAt,
    limitAt: limitAt || undefined
  }

  const { data } = await axios.post(endpoint, newTaskDTO);

  return data;
}

const updateTask = async (updatedTaskReferencedToColumnDTO: UpdatedTaskReferencedToColumnDTO) => {
  const endpoint = `${BASE_URL}${updatedTaskReferencedToColumnDTO.id}`;

  const updateTaskDTO: UpdateTaskDTO = {
    title: updatedTaskReferencedToColumnDTO.title,
    description: updatedTaskReferencedToColumnDTO.description,
    createdAt: updatedTaskReferencedToColumnDTO.createdAt,
    limitAt: updatedTaskReferencedToColumnDTO.limitAt,
    isFinished: false
  }

  const { data } = await axios.patch(endpoint, updateTaskDTO);

  return data;
}

const findBiggestId = async (): Promise<number> => {
  const endpoint = `${BASE_URL}biggestId`;

  const { data } = await axios.get(endpoint);

  return data;
}

const remove = async (id: number): Promise<void> => {
  const endpoint = `${BASE_URL}${id}`;

  const { data } = await axios.delete(endpoint);

  return data;
}

export default { 
  findTaskById, 
  isTaskExist,
  findTasksByColumnId, 
  createTask, 
  updateTask, 
  findBiggestId,
  remove 
};