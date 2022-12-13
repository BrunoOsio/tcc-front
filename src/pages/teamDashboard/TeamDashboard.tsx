import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Navbar } from "../../shared/components/navbar/Navbar";
import { useAppDispatch, useAppSelector } from "../../states/app/hooks";
import { findAreas } from "../../states/features/areaSlice";
import { AreaCard } from "./components/areaCard/AreaCard";
import { Areas, ButtonGroup, Container, Header, Label, LabelGroup, Leader, LeaderGroup, LeftInformations, Name, NameAndLeaderGroup, RightInformations, TeamInformationsGroup, Title } from "./styles";
import { RiVipCrownFill } from "react-icons/ri";
import { Icon } from "../../shared/components/icon/Icon";
import { findTeam } from "../../states/features/teamSlice";
import { TeamPhoto } from "../../shared/components/teamPhoto/TeamPhoto";
import { TeamPhotoBlank } from "../../shared/components/teamPhotoBlank/TeamPhotoBlank";
import { AiOutlineTeam } from "react-icons/ai";
import { GoPlus } from "react-icons/go";

export const TeamDashboard = () => {
  const navigate = useNavigate();

  const { teamId } = useParams();
  const teamIdNumber = Number(teamId);

  const { value: areas, isLoading } = useAppSelector((state) => state.area);
  const listSize = areas && areas.length;

  const { value: teamArray, isLoading: isTeamLoading} = useAppSelector((state) => state.team);
  const isTeamSuccess = teamArray && teamArray.length === 1;
  const team = teamArray[0];

  const dispatch = useAppDispatch();
  
  useEffect(() => {
      dispatch(findTeam(teamIdNumber));
      dispatch(findAreas(teamIdNumber));
  }, []);

  const goToNewArea = () => {
    navigate(`/team/${team.id}/createArea`);
  }

  const screenWidth = window.innerWidth;
  const MAX_MEMBERS_ON_LIST = (screenWidth > 1500) ? 6 : 5;
  const membersLengthReached = team ? team.members?.length > MAX_MEMBERS_ON_LIST : false;

  return (
    <Container>
      <Navbar />
      <TeamInformationsGroup>
        <LeftInformations>
          
          {isTeamLoading && <TeamPhotoBlank size={90}/>}
          {isTeamSuccess && <TeamPhoto team={team} size={90}/>}

          <NameAndLeaderGroup>
            { isTeamLoading && <Name>Carregando nome</Name>}
            { isTeamSuccess && <Name>{team.name}</Name>}
            <LeaderGroup>
              <span><RiVipCrownFill/></span>
              { isTeamLoading && <Leader>Carregando líder</Leader>}
              { isTeamSuccess && <Leader>{team.leaders[0].name}</Leader>}
            </LeaderGroup>
          </NameAndLeaderGroup>
        </LeftInformations>
        <RightInformations>
          <LabelGroup>
            <span><AiOutlineTeam/></span>
            <Label>Membros</Label>
          </LabelGroup>
          {isTeamSuccess && (

            team.members.map((member, index) => { 
              if (index < MAX_MEMBERS_ON_LIST) {
                return <Icon key={member.id} user={member} size={50}/>
              }
            })
          )}
          
          {membersLengthReached && <span className="icon"><GoPlus /></span>}
        </RightInformations>
      </TeamInformationsGroup>

      <Header>
        <Title>Áreas da equipe</Title>
        <ButtonGroup onClick={goToNewArea}>
          <span><GoPlus /></span>
          <Label>Novo</Label>
        </ButtonGroup>
      </Header>
      <Areas listSize={listSize}>
        {areas.map(area => <AreaCard key={area.id} area={area}/>)}
      </Areas>
    </Container>
  );
}