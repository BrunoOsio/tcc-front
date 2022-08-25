import { colors } from "../../../../../shared/globalStyles/globalValues"

export const draggingStyle = (isDragging: boolean, draggableStyle: any) => ({
  background: isDragging && `${colors.taskHover}`,
  transition: isDragging && "all 0.4s ease-in-out",
  transform: isDragging && "scale(1.3)",
  ...draggableStyle
})