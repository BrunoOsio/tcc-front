import { Container } from "./styles";
import { ColumnContainer } from "./components/columnContainer/ColumnContainer";
import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import { useAppDispatch, useAppSelector } from "../../states/app/hooks";
import { findColumns, patchReorder, reorder } from "../../states/features/columnSlice";
import { useEffect, useState } from "react";
import { droppableId } from "../../shared/helpers/area/beautifulDndIdHelpers";
import { store } from "../../states/app/store";
import { Loading } from "./components/loading/Loading";

export type TeamAreaBoardProps = {
  // area: Area
}

export const TeamAreaBoard: React.FC<TeamAreaBoardProps> = ({}) => {
  const { value: columns, isLoading } = useAppSelector((state) => state.column);
  const [columnIds, setColumnIds] = useState({});

  const dispatch = useAppDispatch();

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;

    const isDragSameThanBefore = destination.droppableId === source.droppableId && destination.index === source.index
    if (isDragSameThanBefore) return;

    dispatch(reorder(result));

    dispatch(patchReorder(result));
  };

  useEffect(() => {
    dispatch(findColumns());
  }, []);
  
  return (
    <Container>
      <DragDropContext onDragEnd={onDragEnd}>
        {isLoading && <Loading />}
        {columns.map((column, index) => {
          
          return <ColumnContainer key={index} column={column} index={index} />;
        })}
      </DragDropContext>
    </Container>
  );
};
