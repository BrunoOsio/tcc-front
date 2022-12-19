import { BaseModal } from "../../../../shared/components/baseModal/BaseModal";
import { User } from "../../../../shared/types";
import { Container, BackButton, ButtonGroup, ConfirmButton, Title } from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import teamService from "../../../../shared/services/team/teamService";
import { RemoveMemberDTO } from "../dto/RemoveMemberDTO";
import routes from "../../../../routes/routes";

type BaseModalWrapperProps = {
  member: User,
  isModalVisible: boolean;
  onBackDropClick: () => void;
}

export const ConfirmDeleteModal: React.FC<BaseModalWrapperProps> = ({member, isModalVisible, onBackDropClick}) => {

  const navigate = useNavigate();

  const { teamId } = useParams();
  const teamIdNumber = Number(teamId);

  const handleRemoveMember = async () => {
    const removeMemberDto: RemoveMemberDTO = {
      teamId: teamIdNumber,
      userId: member.id
    }

    await teamService.removeMember(removeMemberDto);

    refreshPage();
  }

  const refreshPage = () => {
    navigate(routes.refresh());
  }

  if(!isModalVisible) return null;

  return (
    <BaseModal onBackDropClick={onBackDropClick}>
      <Container>
        <Title>Você realmente deseja remover "{member.name}" da equipe?</Title>
        <ButtonGroup>
          <BackButton onClick={onBackDropClick}>Voltar</BackButton>
          <ConfirmButton onClick={handleRemoveMember}>Remover</ConfirmButton>
        </ButtonGroup>
      </Container>
    </BaseModal>
  );
}