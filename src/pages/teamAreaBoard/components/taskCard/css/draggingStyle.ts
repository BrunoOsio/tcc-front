import { colors } from "../../../../../shared/globalStyles/globalValues"

export const draggingStyle = (isDragging: boolean, draggableStyle: any) => ({
  background: isDragging && `${colors.taskHover}`,
  ...draggableStyle
})