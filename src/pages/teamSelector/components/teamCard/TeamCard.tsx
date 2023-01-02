import { useNavigate } from "react-router-dom";
import routes from "../../../../routes/routes";
import { TeamPhoto } from "../../../../shared/components/teamPhoto/TeamPhoto";
import { Team } from "../../../../shared/types/team/Team";
import { Container } from "./styles";

type TeamCardProps = {
  team: Team,
}

export const TeamCard: React.FC<TeamCardProps> = ({team}) => {
  const navigate = useNavigate();

  const navigateToAreas = () => {
    navigate(routes.teamDashboard(team.id));
  }

  return (
    <Container onClick={navigateToAreas}>
      <TeamPhoto team={team} size={220}/>
    </Container>
  );
}