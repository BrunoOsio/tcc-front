import { useParams } from "react-router-dom";
import { Area} from "../../../../shared/types";
import { AreaInformations, ChangeLeaderButton, CloseIcon, Container, LeaderGroup, LeaderName, LeftInformations, Name, RightInformations } from "./styles";
import { MdClose } from "react-icons/md";
import { RiVipCrownFill } from "react-icons/ri";
import { AreaIcon } from "../../../../shared/components/areaIcon/AreaIcon";
import { useState } from "react";
import { useAppSelector } from "../../../../states/app/hooks";
import { Team } from "../../../../shared/types/team/Team";
import { ChangeLeaderModal } from "../changeLeaderModal/ChangeLeaderModal";
import areaService from "../../../../shared/services/area/areaService";
import { ConfirmDeleteAreaModal } from "../confirmDeleteAreaModal/ConfirmDeleteAreaModal";

type AreaCardProps = {
  area: Area,
  team: Team
}

export const AreaCard: React.FC<AreaCardProps> = ({area, team}) => {

  const [isLeaderModalVisible, setLeaderModalVisible] = useState(false);
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);

  const toggleLeaderModal = () => setLeaderModalVisible(!isLeaderModalVisible);
  const toggleDeleteModal = () => setDeleteModalVisible(!isDeleteModalVisible);

  const formatAreaLeader = () => {
    if(!area.leader) return "Nenhum líder";

    return area.leader.name;
  };

  const teamMembers = team?.members ? team.members : [];

  return (
    <Container>
      <LeftInformations>
        <AreaIcon area={area} size={80}/>

        <AreaInformations>
          <Name>{area.name}</Name>

          <LeaderGroup>
            <span><RiVipCrownFill/></span>
            <LeaderName>{formatAreaLeader()}</LeaderName>
          </LeaderGroup>

        </AreaInformations>
      </LeftInformations>

      <RightInformations>
        <ChangeLeaderButton className="changeLeaderButton" onClick={toggleLeaderModal}>Mudar líder</ChangeLeaderButton>
        <ChangeLeaderModal members={teamMembers} area={area} isModalVisible={isLeaderModalVisible} onBackDropClick={toggleLeaderModal}/>
        
        <CloseIcon className="icon" onClick={toggleDeleteModal}><MdClose/></CloseIcon>
        <ConfirmDeleteAreaModal area={area} isModalVisible={isDeleteModalVisible} onBackDropClick={toggleDeleteModal}/>
      </RightInformations>

    </Container>
  );
}