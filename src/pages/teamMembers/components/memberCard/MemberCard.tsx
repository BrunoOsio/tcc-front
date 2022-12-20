import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Icon } from "../../../../shared/components/icon/Icon";
import { User } from "../../../../shared/types";
import { useAppDispatch } from "../../../../states/app/hooks";
import { findUser } from "../../../../states/features/userSlice";
import { Container, Email, LeftInformations, Name, RightInformations, UserInformations } from "./styles";
import { MdClose } from "react-icons/md"
import { ConfirmDeleteModal } from "../confirmDeleteModal/ConfirmDeleteModal";
import { getStoredId, isUserTeamLeader } from "../../../../shared/helpers/localStorage/localStorageHelpers";
type MemberCardProps = {
  member: User
}

export const MemberCard: React.FC<MemberCardProps> = ({member}) => {
  const { teamId } = useParams();
  const teamIdNumber = Number(teamId);

  const dispatch = useAppDispatch();
  
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => setModalVisible(!isModalVisible);
  
  useEffect(() => {
    dispatch(findUser(member.id));
  })

  const isOwnCard = member.id === getStoredId();
  
  return (
    <Container>
      <LeftInformations>
        <Icon user={member} size={80}/>

        <UserInformations>
          <Name>{member.name}</Name>
          <Email>{member.email}</Email>
        </UserInformations>
      </LeftInformations>

      {(!isOwnCard && isUserTeamLeader(teamIdNumber)) && (
        <RightInformations>
          <span className="icon" onClick={toggleModal}><MdClose/></span>
          <ConfirmDeleteModal member={member} isModalVisible={isModalVisible} onBackDropClick={toggleModal}/>
        </RightInformations>
      )}
    </Container>
  );
}