import { useEffect } from "react";
import { AiOutlineTeam } from "react-icons/ai";
import { MdLeaderboard, MdViewList } from "react-icons/md";
import { RiPencilFill } from "react-icons/ri";
import { useNavigate, useParams } from "react-router-dom";
import routes from "../../routes/routes";
import { Navbar } from "../../shared/components/navbar/Navbar";
import { isUserTeamLeader } from "../../shared/helpers/localStorage/localStorageHelpers";
import { useAppDispatch, useAppSelector } from "../../states/app/hooks";
import { findTeam } from "../../states/features/teamSlice";
import { Border, Container, Divider, Footer, FooterButton, NewRequestsNumber, Title, TitleContainer } from "./styles";

export const TeamConfigurations = () => {
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

  const goToJoinRequests = () => {
    navigate(routes.teamJoinRequests(teamIdNumber));
  }

  const goToEditTeam = () => {
    navigate(routes.editTeam(teamIdNumber));
  }

  const goToAreasSettings = () => {
    navigate(routes.areasSettings(teamIdNumber));
  }

  const goToTeamMembers = () => {
    navigate(routes.teamMembers(teamIdNumber));
  }

  const teamMembers = team?.members ? team.members : [];
  const teamJoinRequestsLength = team?.joinRequests ? team.joinRequests?.length : 0;
  
  return (
    <>
      <Navbar/>

      <Container>
        <TitleContainer>
          { isTeamSuccess && (
            <Title>Configurações da equipe {team.name}</Title>
          )}
        </TitleContainer>

        {
          isUserTeamLeader(teamIdNumber) && (
            <>
              <Divider/>

              <Footer>
                <FooterButton className="first" onClick={goToEditTeam}>
                  <span><RiPencilFill/></span>
                  <span>Ir à Edição do time</span>
                </FooterButton>

                <FooterButton className="first" onClick={goToJoinRequests}>
                  {
                    teamJoinRequestsLength > 0 && (
                      <Border>
                        <NewRequestsNumber><span>{teamJoinRequestsLength}</span></NewRequestsNumber>
                      </Border>
                    )
                  }

                  {
                    teamJoinRequestsLength === 0 && (
                      <span><MdViewList/></span>
                    )
                  }
              
                  <span>Ir às solicitações para entrar na equipe</span>
                </FooterButton>
            
                <FooterButton className="second" onClick={goToAreasSettings}>
                  <span><MdLeaderboard/></span>
                  <span>Ir à configuração das áreas</span>
                </FooterButton>

                <FooterButton className="second" onClick={goToTeamMembers}>
                  <span><AiOutlineTeam/></span>
                  <span>Ir à membros</span>
                </FooterButton>
              </Footer>        
            </>
          )
        }

      </Container>
    </>
  );
}