import { Dropdown, Menu } from "antd";
import { GoPlus } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { ButtonLabel, Container } from "./styles";
import { RiPencilFill } from "react-icons/ri";
import { AiOutlineTeam } from "react-icons/ai";
import { DropboxAction } from "../../../../shared/helpers/dropbox/DropboxAction";
import { runAction } from "../../../../shared/helpers/dropbox/runAction";

export const NewTeamButton = () => {
  const navigate = useNavigate();

  const goToCreateTeam = () => {
    navigate("/createTeam");
  }

  const goToSearchTeam = () => {
    navigate("/searchTeam");
  }

  const menuActions: DropboxAction[] = [
    {
      key: "create",
      action: goToCreateTeam
    },
    {
      key: "enter",
      action: goToSearchTeam
    }
  ] 

  const menu = <Menu 
    onClick={({key}) => {
      runAction(menuActions, key);
    }}

    items={[
      {
        label: "Criar novo time",
        key: menuActions[0].key,
        icon: <RiPencilFill />
      },
      {
        label: "Entrar em time existente",
        key: menuActions[1].key,
        icon: <AiOutlineTeam/>
      },
    ]}>

  </Menu>

  return (
    <Dropdown
      overlay={menu}
    >
      <Container> 
        <article><span><GoPlus/></span></article>  
        <article><ButtonLabel>Novo time</ButtonLabel></article>
      </Container>
    </Dropdown>
  );
}