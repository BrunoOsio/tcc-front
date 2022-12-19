import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import routes from "../../routes/routes";
import { Navbar } from "../../shared/components/navbar/Navbar";
import { useAppDispatch, useAppSelector } from "../../states/app/hooks";
import { findTeam } from "../../states/features/teamSlice";
import { JoinRequestCard } from "./components/joinRequestCard/JoinRequestCard";
import { Container, Divider, Header, HeaderButton, Members, Title } from "./styles";

export const JoinRequests = () => {
  const navigate = useNavigate();

  const { value: teamArray, isLoading: isTeamLoading} = useAppSelector((state) => state.team);
  const isTeamSuccess = teamArray && teamArray.length === 1;
  const team = teamArray && teamArray[0];

  const { teamId } = useParams();
  const teamIdNumber = Number(teamId);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(findTeam(teamIdNumber))
  }, [])

  const goToMembers = () => {
    navigate(routes.teamMembers(teamIdNumber));
  }

  const joinRequests = team?.joinRequests ? team.joinRequests : [];
  
  return (
    <>
      <Navbar/>

      <Container>
        <Header>
          <HeaderButton className="first" onClick={goToMembers}>Ir para membros</HeaderButton>
          <HeaderButton className="second">Atribuir líderes às áreas</HeaderButton>
        </Header>
        <Divider/>

        { isTeamSuccess && (
          <Title>Solicitações para entrar na equipe {team.name}</Title>
        )}

        <Members>
          {
            joinRequests.map(member => <JoinRequestCard key={member.id} member={member}/>)
          }
        </Members>
        
      </Container>
    </>
  );
}