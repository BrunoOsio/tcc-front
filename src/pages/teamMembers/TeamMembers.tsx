import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import routes from "../../routes/routes";
import { Navbar } from "../../shared/components/navbar/Navbar";
import { useAppDispatch, useAppSelector } from "../../states/app/hooks";
import { findTeam } from "../../states/features/teamSlice";
import { MemberCard } from "./components/memberCard/MemberCard";
import { Container, Divider, Header, HeaderButton, Members, Title } from "./styles";

export const TeamMembers = () => {
  const navigate = useNavigate();

  const { value: teamArray, isLoading: isTeamLoading} = useAppSelector((state) => state.team);
  const isTeamSuccess = teamArray && teamArray.length === 1;
  const team = teamArray && teamArray[0];

  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => setModalVisible(!isModalVisible);

  const { teamId } = useParams();
  const teamIdNumber = Number(teamId);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(findTeam(teamIdNumber))
  }, [])

  const goToJoinRequests = () => {
    navigate(routes.teamJoinRequests(teamIdNumber));
  }

  const teamMembers = team?.members ? team.members : [];
  
  return (
    <>
      <Navbar/>

      <Container>
        <Header>
          <HeaderButton className="first" onClick={goToJoinRequests}>Ir às solicitações para entrar na equipe</HeaderButton>
          <HeaderButton className="second">Atribuir líderes às áreas</HeaderButton>
        </Header>
        <Divider/>

        { isTeamSuccess && (
          <Title>Membros da equipe {team.name}</Title>
        )}

        <Members>
          {
            teamMembers.map(member => <MemberCard key={member.id} member={member}/>)
          }
        </Members>
        
      </Container>
    </>
  );
}