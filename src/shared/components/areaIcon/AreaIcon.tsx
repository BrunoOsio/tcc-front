import { Border, Container, Icon } from "./styles";
import { Area, User } from "../../types";
import { areaSpecializationData } from "../../data/areaSpecializationData";

type AreaIconProps = {
  area: Area;
  size: number;
}

export const AreaIcon: React.FC<AreaIconProps> = ({area, size}) => {

  const getIcon = () => {
    const targetSpecialization = areaSpecializationData.filter(specializationData => specializationData.type === area.specialization)[0];

    return <targetSpecialization.icon/>
  }




  return (
    <Border size={size}>
      <Container>
        <Icon>{getIcon()}</Icon>
      </Container>
    </Border>
  );
}