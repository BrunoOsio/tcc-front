import { Container } from "./styles";
import { teamMock } from "../../shared/services/mock/team/teamMock";
import { ColumnContainer } from "./components/columnContainer/ColumnContainer";

const programmingArea = teamMock[0].areas[0];

export const TeamAreaKanban = () => {
  return (
    <Container>
      {programmingArea.columns.map((column) => {
        return (
          <ColumnContainer column={column} />
        );
      })}
    </Container>
  );
};
