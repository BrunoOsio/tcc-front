import {
  AddTaskButton,
  Body,
  Button,
  ColumnName,
  Container,
  Header,
  Scrollable,
  TasksList,
} from "./styles";
import { Column } from "../../../../shared/types/area/column/Column";
import { TaskCard } from "../taskCard/TaskCard";
import { Droppable } from "@hello-pangea/dnd";
import { droppableId } from "../../../../shared/helpers/beautifulDndIdHelpers";
import { GoPlus } from "react-icons/go";

type ColumnContainerProps = {
  column: Column;
};

export const ColumnContainer: React.FC<ColumnContainerProps> = ({ column }) => {
  return (
    <Container isDone={column.isDone}>
      <Header>
        <ColumnName>{column.title}</ColumnName>
      </Header>
      <Scrollable>
        <Body>
          
          { !column.isDone &&
            <AddTaskButton><span><GoPlus /></span></AddTaskButton>
          }

          <Droppable droppableId={droppableId(column.id)}>
            {(provided) => (
              <TasksList {...provided.droppableProps} ref={provided.innerRef}>
                {column.tasks.map((task, index) => {
                  return <TaskCard key={task.id} index={index} task={task} />;
                })}

                {provided.placeholder}
              </TasksList>
            )}
          </Droppable>
        </Body>
      </Scrollable>
      
    </Container>
  );
};
