import { ColumnOrder } from "../../../states/features/types/column/ColumnOrder";

export const createColumnOrder = (columnId: number, tasksId: number[]): ColumnOrder => {
  return {
    id: columnId,
    taskIds: tasksId
  }
}