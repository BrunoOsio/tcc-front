import { Draggable } from "@hello-pangea/dnd";
import { draggableId } from "../../../../shared/helpers/area/beautifulDndIdHelpers";
import { Task } from "../../../../shared/types";
import { Container, dateLabelColors, Informations, LimitAt, LimitDateLabel, MemberPhoto, Members, Title } from "./styles";
import { RiTimer2Fill } from "react-icons/ri";
import { draggingStyle } from "./snapshot/draggingStyle";
import moment from "moment";

type TaskCardProps = {
  index: number
  task: Task
}

export const TaskCard: React.FC<TaskCardProps> = ({ task, index }) => {

  const handleLimitDateLabel = (limitDate: string): string => {
    const date = moment(limitDate).toDate();

    return `${date.getDate()}/${date.getMonth() + 1} às ${String(date.getHours())}:${String(date.getMinutes())}`;
  }

  const handleDateColorLabel = (limitAt: string) => {
    const now = moment();
    const limit = moment(limitAt);

    let color = dateLabelColors.normal;
    if (now.isSame(limit, "day")) color = dateLabelColors.warning;
    else if (now.isAfter(limit)) color = dateLabelColors.late;

    return color;
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
          >
            <Informations>
              <Title>{task.title}</Title>

              {task.limitAt &&
                <LimitAt>
                  <RiTimer2Fill color={handleDateColorLabel(task.limitAt)}/>
                  <LimitDateLabel color={handleDateColorLabel(task.limitAt)}>{handleLimitDateLabel(task.limitAt)}</LimitDateLabel>
                </LimitAt>
              }
              
            </Informations>
            <Members>

              {task.members &&
                task.members.map((member, index) => {
                  const membersAmount = index + 1;

                  //TODO SET MAX AMOUNT MEMBERS
                  return (
                        <MemberPhoto key={index} amount={index}>{member.id}</MemberPhoto>
                  );
                })
              }

            </Members>
          </Container>
        )
      }

    </Draggable>
  );
}