export type TaskReferencedToColumnDTO = {
  columnId: number, 
  temporaryReduxId: number,
  title: string, 
  description: string, 
  createdAt: string, 
  limitAt?: string
}