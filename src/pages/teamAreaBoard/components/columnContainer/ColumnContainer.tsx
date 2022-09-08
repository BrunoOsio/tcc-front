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

type ColumnContainerProps = {
  column: Column;
  index: number,
};

export const ColumnContainer: React.FC<ColumnContainerProps> = ({ column, index }) => {

  const currentDroppableId = index + 1;
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

          <Droppable droppableId={droppableId(currentDroppableId)}>
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
