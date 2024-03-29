import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../states/app/hooks";
import { findTeams } from "../../states/features/teamSlice";
import { TeamCard } from "./components/teamCard/TeamCard";
import { Body, Container, GridWrapper, Header, Name, Teams, Title, TitleContainer, UserCard } from "./styles";
import { Icon } from "./components/icon/Icon";
import { getStoredId } from "../../shared/helpers/localStorage/localStorageHelpers";
import { NewTeamButton } from "./components/newTeamButton/NewTeamButton";
import { IconBlank } from "./components/iconBlank/IconBlank";
import { Loading } from "../../shared/components/loading/Loading";
import { findUser } from "../../states/features/userSlice";
import { Sidebar } from "../../shared/components/sidebar/Sidebar";
import { PositionCoordinates } from "../../shared/components/sidebar/types/PositionCoordinates";
import { useNavigate } from "react-router-dom";
import routes from "../../routes/routes";
import { UserDropdown } from "../../shared/components/userDropdown/UserDropdown";
import { NoItemsFound } from "../../shared/components/noItemsFound/NoItemsFound";

export const TeamSelector = () => {
  const navigate = useNavigate();

  const { value: user, isLoading: isUserLoading, isSuccess: isUserSuccess } = useAppSelector((state) => state.user);

  const { value: teams, isLoading: isTeamLoading, isSuccess: isTeamSuccess } = useAppSelector((state) => state.team);  const dispatch = useAppDispatch();

  const listSize = teams && teams.length;

  const userId = getStoredId();
  useEffect(() => {
    dispatch(findUser(userId));
    dispatch(findTeams(userId));

    if (isUserSuccess && !user) 
      navigate(routes.login());
  }, []);

  const openButtonSidebarCoordinates: PositionCoordinates = {
    top: "55px",
    left: "40px",
  } 
  
  return (
    <Container>
      <Sidebar position={openButtonSidebarCoordinates}/>
      <Header>
        
        {
          isUserLoading &&
          <UserCard>
            <UserDropdown user={user} size={80}/>
            <Name>Carregando</Name>
          </UserCard>
        }
        
        {
          user &&
          <UserCard>
            <UserDropdown user={user} size={80}/>
            <Name>{user.name}</Name>
          </UserCard>
        }
        
      </Header>
      
      <Body>
        <TitleContainer>
          <Title>Suas equipes</Title>
          <NewTeamButton/>
        </TitleContainer>
        
        <Teams listSize={listSize}>
          {
            isTeamLoading && (
              <Loading size={100}/>
            ) 
          }
          {
            isTeamSuccess && (
              teams.map((team, index) => <TeamCard key={index} team={team} />)
            )
          }

          {
            (isTeamSuccess && teams.length === 0) && (
              <NoItemsFound message="Você não está em nenhuma equipe ainda"/>
            )
          }
        </Teams>
      </Body>
        
    </Container>
  );
}