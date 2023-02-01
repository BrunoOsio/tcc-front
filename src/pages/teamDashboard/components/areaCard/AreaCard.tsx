import { useNavigate, useParams } from "react-router-dom";
import routes from "../../../../routes/routes";
import { areaSpecializationData } from "../../../../shared/data/areaSpecializationData";
import { Area } from "../../../../shared/types";
import { Container, Specialization, Title } from "./styles";

type AreaCardProps = {
  area: Area;
  hoverColor: string; 
}

export const AreaCard: React.FC<AreaCardProps> = ({area, hoverColor}) => {
  const navigate = useNavigate();
  console.log(`${area.name} ${hoverColor}`);
  const { teamId } = useParams();
  const teamIdNumber = Number(teamId);

  const getIcon = (specialization: string) => {
    const targetSpecialization = areaSpecializationData.filter(specializationData => specializationData.type === specialization)[0];

    return <targetSpecialization.icon/>
  }

  const goToAreaBoard = () => {
    navigate(routes.teamAreaBoard(teamIdNumber, area.id));
  }

  return (
    <Container onClick={goToAreaBoard} hoverColor={hoverColor}>
        <Title>{area.name}</Title>

        <Specialization><span>{getIcon(area.specialization)}</span></Specialization>
    </Container>
  );
}