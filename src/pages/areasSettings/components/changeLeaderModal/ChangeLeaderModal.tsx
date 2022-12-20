import { BaseModal } from "../../../../shared/components/baseModal/BaseModal";
import { Area, User } from "../../../../shared/types";
import { Container, BackButton, ButtonGroup, ConfirmButton, Title, Members, Member } from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import routes from "../../../../routes/routes";
import { useEffect, useState } from "react";
import { UpdateLeaderDTO } from "../../../../shared/dtos/area/UpdateLeaderDTO";
import areaService from "../../../../shared/services/area/areaService";
import { notifyError, notifySuccess } from "../../../../shared/helpers/notificationHelpers";

type BaseModalWrapperProps = {
  members: User[],
  area: Area,
  isModalVisible: boolean;
  onBackDropClick: () => void;
}

export const ChangeLeaderModal: React.FC<BaseModalWrapperProps> = ({members, area, isModalVisible, onBackDropClick}) => {
  const [selectedMember, setSelectedMember] = useState<User>();
  const navigate = useNavigate();

  const refreshPage = () => {
    navigate(routes.refresh());
  }

  const handleChangeMember = (member: User) => {
    setSelectedMember(member);
  }

  const submit = async () => {
    const updateLeaderDTO: UpdateLeaderDTO = {
      areaId: area.id,
      userId: selectedMember?.id!
    }

    const updatedArea = await areaService.updateLeader(updateLeaderDTO);

    if (!updatedArea) {
      notifyError("Erro na atualização do líder");
      return;
    }

    notifySuccess("Líder atualizado com sucesso");
    refreshPage();
  }

  const isSelected = (member: User): boolean => selectedMember?.id === member.id; 

  useEffect(() => {
    setSelectedMember(area.leader || members[0]);
  }, []);

  if(!isModalVisible) return null;

  return (
    <BaseModal onBackDropClick={onBackDropClick}>
      <Container>
        <Title>Selecione um membro para ser líder da área "{area.name}"</Title>

        <Members>
          { members.map((member) => <Member key={member.id} isSelected={isSelected(member)} onClick={() => handleChangeMember(member)}>{member.name}</Member>)}
        </Members>
        
        <ButtonGroup>
          <BackButton onClick={onBackDropClick}>Voltar</BackButton>
          <ConfirmButton onClick={submit}>Confirmar</ConfirmButton>
        </ButtonGroup>
      </Container>
    </BaseModal>
  );
}