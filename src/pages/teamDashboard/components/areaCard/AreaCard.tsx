import { useNavigate, useParams } from "react-router-dom";
import { areaSpecializationData } from "../../../../shared/data/areaSpecializationData";
import { Area } from "../../../../shared/types";
import { Container, LinkArea, Specialization, Title } from "./styles";

type AreaCardProps = {
  area: Area;
}

export const AreaCard: React.FC<AreaCardProps> = ({area}) => {
  const navigate = useNavigate();

  const { teamId } = useParams();
  const teamIdNumber = Number(teamId);

  const getIcon = (specialization: string) => {
    const targetSpecialization = areaSpecializationData.filter(specializationData => specializationData.type === specialization)[0];

    return <targetSpecialization.icon/>
  }

  const goToAreaBoard = () => {
    navigate(`/team/${teamIdNumber}/area/${area.id}/board`);
  }

  return (
    <Container onClick={goToAreaBoard}>
        <Title>{area.name}</Title>

        <Specialization><span>{getIcon(area.specialization)}</span></Specialization>
    </Container>
  );
}