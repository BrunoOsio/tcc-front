import { Dropdown, Menu } from "antd";
import { GoPlus } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { ButtonLabel, Container } from "./styles";
import { RiPencilFill } from "react-icons/ri";
import { AiOutlineTeam } from "react-icons/ai";
import { DropboxAction } from "../../../../shared/helpers/dropbox/DropboxAction";
import { runAction } from "../../../../shared/helpers/dropbox/runAction";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import routes from "../../../../routes/routes";

enum IconEnum {
  DOWN = 0,
  NEW_TEAM = 1,
  COMMUNITY = 2
}

export const NewTeamButton = () => {
  const navigate = useNavigate();

  const [menuIcon, setMenuIcon] = useState<IconEnum | undefined>();

  const goToCreateTeam = () => {
    navigate(routes.createTeam());
  }

  const goToSearchTeam = () => {
    navigate(routes.searchTeam());
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
  
  const setButtonIcon = () => {

    switch(menuIcon) {
      case IconEnum.DOWN:
        return <BsChevronDown />
      case IconEnum.NEW_TEAM:
        return <RiPencilFill />
      case IconEnum.COMMUNITY:
        return <AiOutlineTeam/>
      default:
        return <GoPlus />
    }
  }

  const menu = <Menu 
    onClick={({key}) => {
      runAction(menuActions, key);
    }}

    items={[
      {
        label: "Criar novo time",
        key: menuActions[0].key,
        icon: <RiPencilFill />,
        onMouseEnter: () => setMenuIcon(IconEnum.NEW_TEAM),
        onMouseLeave: () => setMenuIcon(undefined)
      },
      {
        label: "Entrar em time existente",
        key: menuActions[1].key,
        icon: <AiOutlineTeam/>,
        onMouseEnter: () => setMenuIcon(IconEnum.COMMUNITY),
        onMouseLeave: () => setMenuIcon(undefined)
      },
    ]}>

  </Menu>


  return (
    <Dropdown
      overlay={menu}
      trigger={['click']}
    >
      <Container> 
        <article><span>
          {setButtonIcon()}
        </span></article>  
        <article><ButtonLabel>Novo time</ButtonLabel></article>
      </Container>
    </Dropdown>
  );
}