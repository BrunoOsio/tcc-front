import { BaseModal } from "../../../../shared/components/baseModal/BaseModal";
import { Area } from "../../../../shared/types";
import { useNavigate } from "react-router-dom";
import routes from "../../../../routes/routes";
import { BackButton, ButtonGroup, Container, Title } from "../changeLeaderModal/styles";
import areaService from "../../../../shared/services/area/areaService";
import { ConfirmButton } from "../../../teamMembers/components/confirmDeleteModal/styles";

type BaseModalWrapperProps = {
  area: Area,
  isModalVisible: boolean;
  onBackDropClick: () => void;
}

export const ConfirmDeleteAreaModal: React.FC<BaseModalWrapperProps> = ({area, isModalVisible, onBackDropClick}) => {

  const navigate = useNavigate();

  const handleRemoveArea = async () => {

    await areaService.removeArea(area.id);

    refreshPage();
  }

  const refreshPage = () => {
    navigate(routes.refresh());
  }

  if(!isModalVisible) return null;

  return (
    <BaseModal onBackDropClick={onBackDropClick}>
      <Container>
        <Title>Você realmente deseja remover a área "{area.name}"?</Title>
        <ButtonGroup>
          <BackButton onClick={onBackDropClick}>Voltar</BackButton>
          <ConfirmButton onClick={handleRemoveArea}>Remover</ConfirmButton>
        </ButtonGroup>
      </Container>
    </BaseModal>
  );
}