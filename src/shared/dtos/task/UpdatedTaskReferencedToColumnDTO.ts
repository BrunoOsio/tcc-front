export type UpdatedTaskReferencedToColumnDTO = {
  columnId: number, 
  id: number,
  title: string, 
  description: string, 
  createdAt: string, 
  limitAt: string | null,
  isFinished: boolean
}