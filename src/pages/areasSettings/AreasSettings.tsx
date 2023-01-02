import { useEffect } from "react";
import { AiOutlineTeam } from "react-icons/ai";
import { MdViewList } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { Navbar } from "../../shared/components/navbar/Navbar";
import { useAppDispatch, useAppSelector } from "../../states/app/hooks";
import { findTeam } from "../../states/features/teamSlice";
import { Border, Container, Divider, Footer, FooterButton, Main, NewRequestsNumber, Title, TitleContainer } from "../teamMembers/styles";
import routes from "../../routes/routes";
import { findAreas } from "../../states/features/areaSlice";
import { AreaCard } from "./components/areaCard/AreaCard";

export const AreaSettings = () => {
  const navigate = useNavigate();

  const { value: teamArray, isLoading: isTeamLoading} = useAppSelector((state) => state.team);
  const isTeamSuccess = teamArray && teamArray.length === 1;
  const team = teamArray && teamArray[0];

  const {value: areas} = useAppSelector((state) => state.area);

  const { teamId } = useParams();
  const teamIdNumber = Number(teamId);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(findTeam(teamIdNumber));
    dispatch(findAreas(teamIdNumber));
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

  const teamJoinRequestsLength = team?.joinRequests ? team.joinRequests?.length : 0;

  return (
    <>
      <Navbar/>

      <Container>
        <TitleContainer>
          { isTeamSuccess && (
            <Title>Áreas da equipe {team.name}</Title>
          )}
        </TitleContainer>

        <Main>
          {
            areas.map(area => <AreaCard key={area.id} area={area} team={team}/>)
          }
        </Main>

        <Divider/>

        <Footer>
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
          
          <FooterButton className="second" onClick={goToTeamMembers}>
            <span><AiOutlineTeam/></span>
            <span>Ir aos membros</span>
          </FooterButton>

          <FooterButton className="second" onClick={goToEditTeam}>
            <span><AiOutlineTeam/></span>
            <span>Ir à edição da equipe</span>
          </FooterButton>
        </Footer>        
      </Container>
    </>
  );
}