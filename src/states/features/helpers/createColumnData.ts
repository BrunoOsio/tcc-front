import taskService from "../../../shared/services/task/taskService";
import { Column, Task } from "../../../shared/types";

const DEFAULT_TASK_IDS_ORDER_SEPARATOR = " ";
export const createColumnData = async (column: Column): Promise<Column> => {
  const tasks: Task[] = [];

  const taskIdsArray = column.taskIdsOrder?.split(DEFAULT_TASK_IDS_ORDER_SEPARATOR)
    .map( id => Number(id));
  
  if (taskIdsArray) {
    for (let id of taskIdsArray)  {
      const task = await taskService.findTaskById(id);
      tasks.push(task);
    }
  }
  
  const newColumn = column;
  newColumn.tasks = tasks;

  return newColumn;
}