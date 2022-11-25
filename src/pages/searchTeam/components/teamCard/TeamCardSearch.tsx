import { useEffect, useState } from "react";
import { getStoredId } from "../../../../shared/helpers/localStorageHelpers";
import userService from "../../../../shared/services/user/userService";
import { User } from "../../../../shared/types";
import { Team } from "../../../../shared/types/team/Team";
import { EnterButton, EnterButtonPlaceholder, Leader, LeaderGroup, MainInformationGroup, MembersGroup, MembersLength, Modality, Name } from "./styles";
import { Container } from "./styles";
import { RiVipCrownFill } from "react-icons/ri";
import { AiOutlineTeam } from "react-icons/ai";
import { Icon } from "../../../../shared/components/icon/Icon";
import { IconBlank } from "../../../../shared/components/iconBlank/IconBlank";

export type TeamCardProps = {
  team: Team;
}

export const TeamCardSearch: React.FC<TeamCardProps> = ({team}) => {
  const [user, setUser] = useState<User>();
  const [isEnterButton, setEnterButton] = useState<boolean>(false);

  const userId = getStoredId();
  useEffect(() => {
    const getUser = async () => {
      const user = await userService.findUser(userId);
      setUser(user);
    };
    getUser();

  }, []);

  const toggleEnterButton = () => {
    setEnterButton(!isEnterButton);
  }
  return (
    <Container onMouseEnter={toggleEnterButton} onMouseLeave={toggleEnterButton}>
      <MainInformationGroup>
        {!user && 
        <>
          <IconBlank size={90}/>
          <Name>Carregando</Name>
        </>
        }

        {user && 
        <>
          <Icon user={user} size={90}/>
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
      
      {!isEnterButton && <EnterButtonPlaceholder/>}
      {isEnterButton && <EnterButton/>}
    </Container>
  );
}