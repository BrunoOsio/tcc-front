import { ColumnOrder } from "../../../../states/features/types/column/ColumnOrder";

export const createColumnOrder = (columnId: number, taskIdsOrder: string): ColumnOrder => {
  return {
    id: columnId,
    taskIdsOrder: taskIdsOrder
  }
}