import { Container } from "./styles";
import { teamMock } from "../../shared/services/mock/team/teamMock";
import { ColumnContainer } from "./components/columnContainer/ColumnContainer";
import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import { useAppDispatch } from "../../states/app/hooks";
import { reorder } from "../../states/features/columnSlice";

const programmingArea = teamMock[0].areas[0];

export const TeamAreaBoard = () => {

  const dispatch = useAppDispatch();

  const onDragEnd = (result: DropResult) => {
    const {source, destination, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) return;

    // console.log("source index: ", source.index); //0
    // console.log("destination index: ", destination.index); //1
    // console.log("source droppableId", source.droppableId); //0
    // console.log("destination droppableId", destination.droppableId) //0
    // console.log("draggable id", draggableId);
    
    dispatch(reorder(result));
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        {programmingArea.columns.map((column) => {
          return (
            <ColumnContainer key={column.id} column={column} />
          );
        })}
      </Container>
    </DragDropContext>
  );
};
