import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../states/app/hooks";
import { findTeams } from "../../states/features/teamSlice";
import { TeamCard } from "./components/teamCard/TeamCard";
import { Container, GridWrapper, Header, Teams } from "./styles";

export const TeamSelector = () => {
  const tempUserId = 1;

  const { value: teams, isLoading } = useAppSelector((state) => state.team);
  const dispatch = useAppDispatch();

  const listSize = teams.length;

  useEffect(() => {
    dispatch(findTeams(tempUserId));
  }, []);
  
  return (
    <Container>
      <Header>
        {/* user */}
      </Header>
      <GridWrapper>
        <Teams listSize={listSize}>
          {
            teams.map((team, index) => <TeamCard key={index} team={team} />)
          }
        </Teams>
      </GridWrapper>
    </Container>
  );
}