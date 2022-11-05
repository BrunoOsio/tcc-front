import { useNavigate } from "react-router-dom";
import { Team } from "../../../../shared/types/team/Team";
import { Container, Name, Photo } from "./styles";

type TeamCardProps = {
  team: Team,
}

export const TeamCard: React.FC<TeamCardProps> = ({team}) => {
  const navigate = useNavigate();

  const navigateToAreas = () => {
    navigate(`/team/${team.id}/dashboard`);
  }

  return (
    <Container onClick={navigateToAreas}>
      <Photo/><br />
      <Name>{team.name}</Name>
    </Container>
  );
}