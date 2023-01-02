import { Draggable } from "@hello-pangea/dnd";
import { draggableId } from "../../../../shared/helpers/area/beautifulDndIdHelpers";
import { Task } from "../../../../shared/types";
import { Container, dateLabelColors, EditContainer, Informations, LimitAt, LimitDateLabel, MemberPhoto, Members, Title } from "./styles";
import { RiTimer2Fill } from "react-icons/ri";
import { draggingStyle } from "./snapshot/draggingStyle";
import moment from "moment";
import { colors } from "../../../../shared/globalStyles/globalValues";
import { useEffect, useState } from "react";
import { TaskDetailsModal } from "./components/taskDetailsModal/TaskDetailsModal";
import { BsArrowsAngleExpand } from "react-icons/bs";

type TaskCardProps = {
  index: number;
  task: Task;
  columnId: number;
  isDone: boolean;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task, index, columnId, isDone }) => {
  const [showEditButton, setShowEditButton] = useState(false);

  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => { 
    setModalVisible(!isModalVisible);
  };

  useEffect(() => {
    if(!isModalVisible) {
      setShowEditButton(false);
    }
    
  }, [isModalVisible]);

  const handleLimitDateLabel = (limitDate: string): string => {
    const date = moment(limitDate).toDate();

    let day: unknown = date.getDate();
    day = String(day).padStart(2, "0");

    let month: unknown = date.getMonth() + 1;
    month = String(month).padStart(2, "0");

    return `${day}/${month}`;
  }

  const handleDateColorLabel = (limitAt: string) => {
    const now = moment();
    const limit = moment(limitAt);

    let color = dateLabelColors.normal;

    if (isDone) color = dateLabelColors.done;
    else if (now.isSame(limit, "day")) color = dateLabelColors.warning;
    else if (now.isAfter(limit)) color = dateLabelColors.late;

    return color;
  }

  const toggleEditButton = () => {
    setShowEditButton(!showEditButton);
  }

  return (
    <Draggable key={task.id} draggableId={draggableId(task.id)} index={index}>
      {
        (provided, snapshot) => (
          <Container 
            {...provided.draggableProps} 
            {...provided.dragHandleProps} 
            ref={provided.innerRef}
            style={draggingStyle(snapshot.isDragging, provided.draggableProps.style)}
            onMouseEnter={toggleEditButton}
            onMouseLeave={toggleEditButton}
          >
            <Informations>
              <Title>{task.title}</Title>

              {task.limitAt &&
                <LimitAt isDone={isDone} color={handleDateColorLabel(task.limitAt)}>
                  <span><RiTimer2Fill/></span>
                  <LimitDateLabel>{handleLimitDateLabel(task.limitAt)}</LimitDateLabel>
                </LimitAt>
              }
              
            </Informations>
            
            {showEditButton && (
              <EditContainer onClick={toggleModal}>
                <span><BsArrowsAngleExpand/></span>
                <TaskDetailsModal 
                  task={task} 
                  columnId={columnId}
                  setShowEditButton={setShowEditButton} 
                  isModalVisible={isModalVisible} 
                  onBackDropClick={toggleModal}
                />
              </EditContainer>
            )}  
          </Container>
        )
      }

    </Draggable>
  );
}