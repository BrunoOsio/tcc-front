import {
  AddTaskButton,
  Body,
  ColumnTitleInput,
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
import { ChangeEvent, useState } from "react";
import { useAppDispatch } from "../../../../states/app/hooks";
import { changeColumnTitle } from "../../../../states/features/columnSlice";
import { dragOverStyle } from "./snapshot/dragOverStyle";

type ColumnContainerProps = {
  column: Column;
};

export const ColumnContainer: React.FC<ColumnContainerProps> = ({ column }) => {
  const dispatch = useAppDispatch();

  return (
    <Container isDone={column.isForDoneTasks}>
      <Header>
        <ColumnTitleInput defaultValue={column.title} />
      </Header>
      <Scrollable>
        <Body>
          
          { !column.isForDoneTasks &&
            <AddTaskButton><span><GoPlus /></span></AddTaskButton>
          }

          <Droppable droppableId={droppableId(column.id)}>
            {(provided, snapshot) => (
              <TasksList 
                {...provided.droppableProps} 
                ref={provided.innerRef}
                // style={dragOverStyle(snapshot.isDraggingOver)}
              >
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
