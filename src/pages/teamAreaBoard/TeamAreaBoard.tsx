import { Container } from "./styles";
import { teamMock } from "../../shared/services/mock/team/teamMock";
import { ColumnContainer } from "./components/columnContainer/ColumnContainer";
import { DragDropContext } from "react-beautiful-dnd";

const programmingArea = teamMock[0].areas[0];

export const TeamAreaBoard = () => {

  // const onDragEnd = (result) => {

  // }

  return (
    // <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        {programmingArea.columns.map((column) => {
          return (
            <ColumnContainer key={column.id} column={column} />
          );
        })}
      </Container>
    // </DragDropContext>
  );
};
