import {
  AddTaskButton,
  Body,
  ColumnTitle,
  Container,
  Divider,
  Header,
  Scrollable,
  TasksList,
} from "./styles";
import { Column } from "../../../../shared/types/area/column/Column";
import { TaskCard } from "../taskCard/TaskCard";
import { Droppable } from "@hello-pangea/dnd";
import { droppableId } from "../../../../shared/helpers/area/beautifulDndIdHelpers";
import { GoPlus } from "react-icons/go";
import { useEffect, useState } from "react";
import { NewTaskModal } from "../newTaskModal/NewTaskModal";
import { BsGearFill } from "react-icons/bs";
import { EditColumnModal } from "./components/editColumnModal/EditColumnModal";

type ColumnContainerProps = {
  column: Column;
  index: number,
};

export const ColumnContainer: React.FC<ColumnContainerProps> = ({ column, index }) => {
  const [showEditColumnButton, toggleEditColumnButton] = useState<boolean>();

  useEffect(() => {
    toggleEditColumnButton(false);
  }, []);
  
  const [isNewTaskModalVisible, setNewTaskModalVisible] = useState(false);
  const toggleNewTaskModal = () => setNewTaskModalVisible(!isNewTaskModalVisible);

  const [isEditColumnModalVisible, setEditColumnModalVisible] = useState(false);
  const toggleEditColumnModal = () => setEditColumnModalVisible(!isEditColumnModalVisible);

  const screenHeight = window.innerHeight;
  const isSmallScreenHeight = screenHeight < 900;

  const currentDroppableId = index + 1;
  return (
    <Container isDone={column.isForDoneTasks}>
      <Header isHovering={showEditColumnButton!} onMouseEnter={() => toggleEditColumnButton(!showEditColumnButton)} onMouseLeave={() => toggleEditColumnButton(!showEditColumnButton)}>
          <ColumnTitle>{column.title}</ColumnTitle>
          <span onClick={toggleEditColumnModal}><BsGearFill/></span>
          <EditColumnModal column={column} toggleEditColumnButton={toggleEditColumnButton} isModalVisible={isEditColumnModalVisible} onBackDropClick={toggleEditColumnModal}/>
      </Header>
      <Scrollable>
        <Body>
          
          { !column.isForDoneTasks &&
          <>
            <AddTaskButton onClick={toggleNewTaskModal}><span><GoPlus /></span></AddTaskButton>
            <NewTaskModal column={column} isModalVisible={isNewTaskModalVisible} onBackDropClick={toggleNewTaskModal}/>
            <Divider/>
          </>
          }

          <Droppable droppableId={droppableId(currentDroppableId)}>
            {(provided, snapshot) => (
              <TasksList 
                {...provided.droppableProps} 
                ref={provided.innerRef}
                // style={dragOverStyle(snapshot.isDraggingOver)}
                isSmallScreenHeight={isSmallScreenHeight}
              >
                {column.tasks.map((task, index) => {
                  return <TaskCard key={task.id} index={index} task={task} columnId={column.id} isDone={column.isForDoneTasks}/>;
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
