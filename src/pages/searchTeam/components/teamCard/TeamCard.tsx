import { useEffect, useState } from "react";
import { getStoredId } from "../../../../shared/helpers/localStorageHelpers";
import userService from "../../../../shared/services/user/userService";
import { User } from "../../../../shared/types";
import { Team } from "../../../../shared/types/team/Team";
import { Leader, LeaderGroup, MainInformationGroup, MembersGroup, MembersLength, Modality, Name } from "./styles";
import { Icon } from "../icon/Icon";
import { Container } from "./styles";
import { RiVipCrownFill } from "react-icons/ri";
import { AiOutlineTeam } from "react-icons/ai";
import { IconBlank } from "../iconBlank/Icon";

export type TeamCardProps = {
  team: Team;
}

export const TeamCard: React.FC<TeamCardProps> = ({team}) => {
  const [user, setUser] = useState<User>();

  const userId = getStoredId();
  useEffect(() => {
    const getUser = async () => {
      const user = await userService.findUser(userId);
      setUser(user);
    };
    getUser();

  }, []);

  return (
    <Container>
      <MainInformationGroup>
        {!user && 
        <>
          <IconBlank/>
          <Name>Carregando</Name>
        </>
        }

        {user && 
        <>
          <Icon user={user}/>
          <Name>{team.name}</Name>
        </>
        }
          
      </MainInformationGroup>

      <LeaderGroup>
        <span><RiVipCrownFill/></span>
        <Leader>Gabriel dos Santos Neto Oliveira</Leader>
      </LeaderGroup>

      <Modality>{team.modality.name}</Modality>

      <MembersGroup>
        <span><AiOutlineTeam/></span>
        <MembersLength>8 Membros</MembersLength>
      </MembersGroup>
      
    </Container>
  );
}