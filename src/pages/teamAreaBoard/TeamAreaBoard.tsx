import { Container } from "./styles";
import { ColumnContainer } from "./components/columnContainer/ColumnContainer";
import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import { useAppDispatch, useAppSelector } from "../../states/app/hooks";
import { reorder } from "../../states/features/columnSlice";

export const TeamAreaBoard = () => {
  const { value: columns } = useAppSelector((state) => state.column);

  const dispatch = useAppDispatch();

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    dispatch(reorder(result));
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        {columns.map((column, index) => {
          return <ColumnContainer key={index} column={column} />;
        })}
      </Container>
    </DragDropContext>
  );
};
