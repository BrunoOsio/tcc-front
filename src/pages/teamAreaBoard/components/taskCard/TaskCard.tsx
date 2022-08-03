import { Task } from "../../../../shared/types";
import { Container } from "./styles";

type TaskCardProps = {
  task: Task
}

export const TaskCard: React.FC<TaskCardProps> = ({task}) => {
  return (
    <Container>
      <span>{task.title}</span>
    </Container>
  );
}