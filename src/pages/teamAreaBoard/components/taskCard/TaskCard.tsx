import { Draggable } from "@hello-pangea/dnd";
import { draggableId } from "../../../../shared/helpers/beautifulDndIdHelpers";
import { Task } from "../../../../shared/types";
import { Container } from "./styles";

type TaskCardProps = {
  index: number
  task: Task
}

export const TaskCard: React.FC<TaskCardProps> = ({ task, index }) => {

  return (
    <Draggable key={task.id} draggableId={draggableId(task.id)} index={index}>
      {
        (provided) => (
          <Container {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
            <span>{task.title}</span>
          </Container>
        )
      }

    </Draggable>
  );
}