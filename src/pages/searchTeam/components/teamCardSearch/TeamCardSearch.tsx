import { useEffect, useState } from "react";
import { getStoredId, isUserOnTeam } from "../../../../shared/helpers/localStorage/localStorageHelpers";
import { Team } from "../../../../shared/types/team/Team";
import { ColumnWrapper, EnterButton, EnterButtonPlaceholder, Leader, LeaderGroup, MainInformationGroup, MembersGroup, MembersLength, Modality, Name, WaitingLabel, Number, ExtraInformations } from "./styles";
import { Container } from "./styles";
import { RiVipCrownFill } from "react-icons/ri";
import { AiOutlineTeam } from "react-icons/ai";
import { Icon } from "../icon/Icon";
import { RequestJoinDTO } from "./dto/RequestJoinDTO";
import { useAppDispatch, useAppSelector } from "../../../../states/app/hooks";
import { removeJoinUser, requestJoinUser } from "../../../../states/features/userSlice";
import { patchRemoveJoinUser, patchRequestJoinUser } from "../../../../states/features/teamSlice";
import { findUser } from "../../../../states/features/userSlice";
import { notifySuccess, notifyWarning } from "../../../../shared/helpers/notificationHelpers";
import { getModalityInitials } from "../../../../shared/types/modality/helpers/getModalityInitials";

export type TeamCardProps = {
  team: Team;
}

const ONE_MEMBER = 1;

export const TeamCardSearch: React.FC<TeamCardProps> = ({team}) => {
  const dispatch = useAppDispatch();
  const { value: user, isLoading: isUserLoading, isSuccess: isUserSuccess } = useAppSelector((state) => state.user);

  const [isEnterButton, setEnterButton] = useState<boolean>(false);

  const userId = getStoredId();
  useEffect(() => {
    dispatch(findUser(userId));
  }, []);

  const toggleEnterButton = () => {
    setEnterButton(!isEnterButton);
  }

  const toggleJoinRequest = async (team: Team) => {
    if (isUserOnTeam(team.id)) {
      notifyWarning("Você já está no time");
      return;
    }

    if (isRemoveRequest(team.id)) {
      handleRemoveRequest(team);
    } else {
      handleJoinRequest(team);
    }
  }
  
  const isRemoveRequest = (teamId: number) => {
    if (!user) return;
    const target = user.joinRequests.filter(teamRequest => teamRequest.id === teamId);

    const isRemoveRequest = target.length > 0;

    return isRemoveRequest;
  }

  const handleJoinRequest = async (team: Team) => {
    if (!user) return;

    const requestJoin: RequestJoinDTO = {userId: user.id, team: team};

    dispatch(requestJoinUser(requestJoin));
    dispatch(patchRequestJoinUser(requestJoin));

    notifySuccess(`Pedido para entrar enviado`);
  }

  const handleRemoveRequest = (team: Team) => {
    if (!user) return;
    
    const requestJoin: RequestJoinDTO = {userId: user.id, team: team};

    dispatch(removeJoinUser(requestJoin));
    dispatch(patchRemoveJoinUser(requestJoin));

    notifyWarning(`Pedido para entrar retirado`);
  }

  const checkIsUserWaitingRequestResponse = (teamId: number): boolean | undefined => {
    if (!user) return;

    const target = user.joinRequests.filter(teamRequest => teamRequest.id === teamId);
    const isWaiting = target.length > 0;

    return isWaiting;
  }

  const formatMembers = () => {
    const length = team.members.length;
    let message = "Nenhum membro";
    
    if (length > ONE_MEMBER) message = `${length} membros`;
    else if (length === ONE_MEMBER) message = `${length} membro`;

    return message;
  }

  const teamLeader = team?.leaders ? team.leaders[0]?.name : "Carregando";

  return (
    <Container 
      onClick={() => toggleJoinRequest(team)}
      onMouseEnter={toggleEnterButton} 
      onMouseLeave={toggleEnterButton}
    >
      <MainInformationGroup>

        {(user) && 
        <>
          <Icon team={team} size={90}/>
          <ColumnWrapper>
            <ExtraInformations>
              <Modality>{getModalityInitials(team.modality)}</Modality>
              <Number>{team.number}</Number>
            </ExtraInformations>
            <Name>{team.name}</Name>
          </ColumnWrapper>
        </>
        }
          
      </MainInformationGroup>

      <LeaderGroup>
        <span><RiVipCrownFill/></span>
        <Leader>{teamLeader}</Leader>
      </LeaderGroup>

      <Modality>{team.modality.name}</Modality>

      <MembersGroup>
        <span><AiOutlineTeam/></span>
        <MembersLength>{formatMembers()}</MembersLength>
      </MembersGroup>
      
      {!isEnterButton && <EnterButtonPlaceholder/>}

      {
        (checkIsUserWaitingRequestResponse(team.id) && !isUserOnTeam(team.id)) && (
          isEnterButton && <WaitingLabel>Pedido pendente</WaitingLabel>
        )
      }

      {
        (!checkIsUserWaitingRequestResponse(team.id) && !isUserOnTeam(team.id)) && (
          isEnterButton && <EnterButton>Pedir para entrar</EnterButton>
        )
      }

      {
        isUserOnTeam(team.id) && (
          isEnterButton && <WaitingLabel>Já está no time</WaitingLabel>
        )
      }
      
    </Container>
  );
}