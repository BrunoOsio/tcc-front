import { Container } from "./styles";
import { ColumnContainer } from "./components/columnContainer/ColumnContainer";
import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import { useAppDispatch, useAppSelector } from "../../states/app/hooks";
import { reorder } from "../../states/features/columnSlice";

export const TeamAreaBoard = () => {
  const {
    value: columns,
  } = useAppSelector((state) => state.column);

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
        {columns.map((column) => {
          return (
            <ColumnContainer key={column.id} column={column} />
          );
        })}
      </Container>
    </DragDropContext>
  );
};
