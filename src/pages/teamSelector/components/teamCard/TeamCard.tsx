import { useEffect, useState } from "react";
import { MdViewList } from "react-icons/md";
import { RiVipCrownFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import routes from "../../../../routes/routes";
import { TeamPhoto } from "../../../../shared/components/teamPhoto/TeamPhoto";
import { AreasInformationsDTO } from "../../../../shared/dtos/area/AreasInformationsDTO";
import { getStoredId } from "../../../../shared/helpers/localStorage/localStorageHelpers";
import areaService from "../../../../shared/services/area/areaService";
import teamService from "../../../../shared/services/team/teamService";
import userService from "../../../../shared/services/user/userService";
import { Team } from "../../../../shared/types/team/Team";
import { AreasLeadered, AreasLeaderedGroup, Container, LeaderGroup, LeaderStats, LeftInformations, Modality, RightInformations, RightTop, TeamName, TeamNameAndModalityGroup, TodoTasks, TodoTasksGroup } from "./styles";
import { RiFileCopyLine } from "react-icons/ri";

type TeamCardProps = {
  team: Team,
}

export const TeamCard: React.FC<TeamCardProps> = ({team}) => {
  const navigate = useNavigate();

  const [teamRelations, setTeamRelations] = useState<Team>();
  const [areasInformations, setAreasInformations] = useState<AreasInformationsDTO>();

  useEffect(() => {
    const fetchTeam = async () => {
      const teamFound = await teamService.findTeam(team.id);
      setTeamRelations(teamFound);
    }
    fetchTeam();

    const fetchAreaInformations = async () => {
      const areasInformationsFound = await userService.countLeaderedAreaTasks(getStoredId(), team.id);

      setAreasInformations(areasInformationsFound);
    }
    fetchAreaInformations();

  }, [])
  
  const navigateToAreas = () => {
    navigate(routes.teamDashboard(team.id));
  }

  const getTeamLeader = () => {
    if (!teamRelations?.leaders) return "Carregando";

    if (teamRelations.leaders.length === 0) return "Nenhum Líder";
    
    return teamRelations.leaders[0].name;
  }

  const getModalityAndNumber = `${team.modality}${team.number || ""}`;

  const getAreasLeadered = () => {
    if (!areasInformations) return;

    if (areasInformations.areasLeaderedLength === 0) return "Nenhuma área";
    
    if (areasInformations.areasLeaderedLength === 1) return "Lidera 1 área";

    return `Lidera ${areasInformations.areasLeaderedLength} áreas`;
  }

  const isMemberLeadsArea = areasInformations?.areasLeaderedLength! > 0 ?? false;

  const getTodoTasks = () => {
    if (!areasInformations) return;

    if (areasInformations.undoneTasksLength === 0) return "Nenhuma tarefa pendente";
    
    if (areasInformations.undoneTasksLength === 1) return "Lidera 1 tarefa pendente";

    return `Lidera ${areasInformations.undoneTasksLength} tarefas`;
  }

  return (
    <Container onClick={navigateToAreas}>
      <LeftInformations>
        <TeamPhoto team={team} size={160}/>
        
        <TeamNameAndModalityGroup>
          <TeamName>{team.name}</TeamName>
          <Modality>{getModalityAndNumber}</Modality>
        </TeamNameAndModalityGroup>
      </LeftInformations>

      <RightInformations>
        <RightTop isMemberLeadsArea={isMemberLeadsArea}>
          <LeaderGroup>
            <section><RiVipCrownFill/></section>
            <span>{getTeamLeader()}</span>
          </LeaderGroup>

          <LeaderStats isMemberLeadsArea={isMemberLeadsArea}>
            <AreasLeaderedGroup>
              <span><RiFileCopyLine/></span>
              <AreasLeadered>{getAreasLeadered()}</AreasLeadered>
            </AreasLeaderedGroup>
  
            <TodoTasksGroup>
              <span><MdViewList/></span>
              <TodoTasks>{getTodoTasks()}</TodoTasks>
            </TodoTasksGroup>
          </LeaderStats>
          
        </RightTop>

      </RightInformations>
      
    </Container>
  );
}