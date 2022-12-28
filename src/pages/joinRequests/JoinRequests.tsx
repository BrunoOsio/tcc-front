import { useEffect } from "react";
import { AiOutlineTeam } from "react-icons/ai";
import { MdLeaderboard } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import routes from "../../routes/routes";
import { Navbar } from "../../shared/components/navbar/Navbar";
import { isUserTeamLeader } from "../../shared/helpers/localStorage/localStorageHelpers";
import { useAppDispatch, useAppSelector } from "../../states/app/hooks";
import { findTeam } from "../../states/features/teamSlice";
import { Footer, FooterButton, Main, Title, TitleContainer } from "../teamMembers/styles";
import { JoinRequestCard } from "./components/joinRequestCard/JoinRequestCard";
import { Container, Divider, Header, HeaderButton, Members } from "./styles";

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

  const goToAreasSettings = () => {
    navigate(routes.areasSettings(teamIdNumber));
  }

  const joinRequests = team?.joinRequests ? team.joinRequests : [];
  
  return (
    <>
      <Navbar/>

      <Container>
        <TitleContainer>
          { isTeamSuccess && (
            <Title>Solicitações para entrar na equipe {team.name}</Title>
          )}
        </TitleContainer>
        
        <Main>
          {
            joinRequests.map(member => <JoinRequestCard key={member.id} member={member}/>)
          }
        </Main>

        <Divider/>
        <Footer>
          <FooterButton className="first" onClick={goToMembers}>
            <span><AiOutlineTeam/></span>
            <span>Ir aos membros</span>
          </FooterButton>
          <FooterButton className="second" onClick={goToAreasSettings}>
            <span><MdLeaderboard/></span>
            <span>Ir à configuração das áreas</span>
          </FooterButton>
        </Footer>
      </Container>
    </>
  );
}