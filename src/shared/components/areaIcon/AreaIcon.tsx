import { Border, Container, Icon } from "./styles";
import { Area } from "../../types";
import { areaSpecializationData } from "../../data/areaSpecializationData";
import { useNavigate, useParams } from "react-router-dom";
import routes from "../../../routes/routes";

type AreaIconProps = {
  area: Area;
  size: number;
  enableRoute?: boolean;
}

export const AreaIcon: React.FC<AreaIconProps> = ({area, size, enableRoute}) => {
  const { teamId } = useParams();
  const teamIdNumber = Number(teamId);

  const navigate = useNavigate();
  
  const getIcon = () => {
    const targetSpecialization = areaSpecializationData.filter(specializationData => specializationData.type === area.specialization)[0];

    return <targetSpecialization.icon/>
  }

  const goToArea = (areaId: number) => {
    if(!teamIdNumber || !enableRoute) return;
    
    navigate(routes.teamAreaBoard(teamIdNumber, areaId));
  }

  return (
    <Border size={size} onClick={() => goToArea(area.id)} enableRoute={enableRoute || false}>
      <Container>
        <Icon>{getIcon()}</Icon>
      </Container>
    </Border>
  );
}