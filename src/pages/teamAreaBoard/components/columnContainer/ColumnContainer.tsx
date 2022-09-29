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
import { droppableId } from "../../../../shared/helpers/area/beautifulDndIdHelpers";
import { GoPlus } from "react-icons/go";
import { useState } from "react";
import { NewTaskModal } from "../newTaskModal/NewTaskModal";

type ColumnContainerProps = {
  column: Column;
  index: number,
};

export const ColumnContainer: React.FC<ColumnContainerProps> = ({ column, index }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => setModalVisible(!isModalVisible);

  const currentDroppableId = index + 1;
  return (
    <Container isDone={column.isForDoneTasks}>
      <Header>
        <ColumnTitleInput defaultValue={column.title} />
      </Header>
      <Scrollable>
        <Body>
          
          { !column.isForDoneTasks &&
          <>
            <AddTaskButton onClick={toggleModal}><span><GoPlus /></span></AddTaskButton>
            <NewTaskModal columnId={column.id} isModalVisible={isModalVisible} onBackDropClick={toggleModal}/>
          </>
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
