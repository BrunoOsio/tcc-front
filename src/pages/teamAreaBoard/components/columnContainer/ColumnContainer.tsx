import {
  Button,
  ColumnName,
  Container,
  Header,
  TasksContainer,
} from "./styles";
import { Column } from "../../../../shared/types/area/column/Column";
import { TaskCard } from "../taskCard/TaskCard";

type ColumnContainerProps = {
  column: Column;
};

export const ColumnContainer: React.FC<ColumnContainerProps> = ({ column }) => {
  return (
    <Container isDone={column.isDone}>
      <Header>
        <ColumnName>{column.title}</ColumnName>
        <Button>+</Button>
      </Header>

      <TasksContainer>
        {column.tasks.map((task) => {
          return <TaskCard key={task.id} task={task} />;
        })}
      </TasksContainer>
    </Container>
  );
};
