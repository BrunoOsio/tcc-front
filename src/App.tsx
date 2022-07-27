import { formatDate } from "./shared/helpers/dateHelpers";
import { teamMock } from "./shared/services/mock/team/teamMock";

export const App = () => {

  const createdAt = teamMock[0].areas[0].columns[0].tasks[0].createdAt;
  const limitAt = teamMock[0].areas[0].columns[0].tasks[0].limitAt;
  return (
    <>
    {console.log("Hoje", formatDate(createdAt))}
    {console.log("Depois", formatDate(limitAt))}
    </>
  );
}

