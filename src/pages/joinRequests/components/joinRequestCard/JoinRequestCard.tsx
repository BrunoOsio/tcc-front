import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Icon } from "../../../../shared/components/icon/Icon";
import { User } from "../../../../shared/types";
import { useAppDispatch } from "../../../../states/app/hooks";
import { findUser } from "../../../../states/features/userSlice";
import { Container, Email, LeftInformations, Name, RightInformations, UserInformations } from "./styles";
import { MdCheck, MdClose } from "react-icons/md"
import teamService from "../../../../shared/services/team/teamService";
import routes from "../../../../routes/routes";
type MemberCardProps = {
  member: User
}

export const JoinRequestCard: React.FC<MemberCardProps> = ({member}) => {
  const navigate = useNavigate();

  const { teamId } = useParams();
  const teamIdNumber = Number(teamId);

  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(findUser(member.id));
  })

  const handleAcceptRequest = async () => {
    await teamService.acceptRequest({teamId: teamIdNumber, userId: member.id});

    navigate(routes.refresh());
  }

  const handleRejectRequest = async () => {
    await teamService.rejectRequest({teamId: teamIdNumber, userId: member.id});

    navigate(routes.refresh());
  }

  return (
    <Container>
      <LeftInformations>
        <Icon user={member} size={80}/>

        <UserInformations>
          <Name>{member.name}</Name>
          <Email>{member.email}</Email>
        </UserInformations>
      </LeftInformations>


      <RightInformations>
        <span className="addIcon" onClick={handleAcceptRequest}><MdCheck/></span>
        <span className="removeIcon" onClick={handleRejectRequest}><MdClose/></span>
      </RightInformations>

    </Container>
  );
}