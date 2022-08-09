import {
  Button,
  ColumnName,
  Container,
  Header,
  TasksContainer,
} from "./styles";
import { Column } from "../../../../shared/types/area/column/Column";
import { TaskCard } from "../taskCard/TaskCard";
import { Droppable } from "react-beautiful-dnd";
import { useState } from "react";
import { Task } from "../../../../shared/types";

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
        <Droppable droppableId={String(column.id)}>
          {
            (provided) => (
              <TasksContainer ref={provided.innerRef} {...provided.droppableProps}>
                {column.tasks.map((task, index) => {
                  return (
                    <>
                      <TaskCard key={task.id} index={index} task={task} />
                      {provided.placeholder}
                    </>
                  );  
                })}
              </TasksContainer>
            )
          }
        </Droppable>
      </Container>
  );
};
