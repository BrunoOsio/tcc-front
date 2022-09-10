import { ColumnOrder } from "../../../../states/features/types/column/ColumnOrder";

export const createColumnOrder = (columnId: number, taskIdsOrder: string): ColumnOrder => {
  const formattedTaskIdsOrder = taskIdsOrder.length > 0 ? taskIdsOrder : null; 

  return {
    id: columnId,
    taskIdsOrder: formattedTaskIdsOrder
  }
}