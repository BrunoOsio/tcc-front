export type UpdateTaskDTO = {
  title: string, 
  description?: string, 
  createdAt: string, 
  limitAt: string | null,
  isFinished: boolean
}