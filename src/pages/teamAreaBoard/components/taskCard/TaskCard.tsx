import { Draggable } from "@hello-pangea/dnd";
import { draggableId } from "../../../../shared/helpers/area/beautifulDndIdHelpers";
import { Task } from "../../../../shared/types";
import { Container, Informations, LimitAt, LimitDateLabel, MemberPhoto, Members, Title } from "./styles";
import { RiTimer2Fill } from "react-icons/ri";
import { getFrom } from "./helpers/formatLimitDate";
import { draggingStyle } from "./snapshot/draggingStyle";

type TaskCardProps = {
  index: number
  task: Task
}

export const TaskCard: React.FC<TaskCardProps> = ({ task, index }) => {

  const limitDate = (limitDate: string): string => {
    const [date, hours] = getFrom(limitDate); 
    return `${date} às ${hours}`;
  }
  console.log(task.id);
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
                  <RiTimer2Fill />
                  <LimitDateLabel>{limitDate(task.limitAt)}</LimitDateLabel>
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