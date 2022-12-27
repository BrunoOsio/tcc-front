import { Dropdown, Menu } from "antd";
import { BsGearFill } from "react-icons/bs";
import { IoMdExit } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import routes from "../../../routes/routes";
import { DropboxAction } from "../../helpers/dropbox/DropboxAction";
import { runAction } from "../../helpers/dropbox/runAction";
import { User } from "../../types";
import { Icon } from "../icon/Icon";
import { IconBlank } from "../iconBlank/IconBlank";

type UserDropdownProps = {
  user: User | undefined;
  size: number;
};

export const UserDropdown: React.FC<UserDropdownProps> = ({ user, size }) => {
  const navigate = useNavigate();

  const goToUserSettings = () => {
    navigate(routes.userSettings());
  };

  const goToLogin = () => {
    navigate(routes.login());
  };

  const menuActions: DropboxAction[] = [
    {
      key: "settings",
      action: goToUserSettings,
    },
    {
      key: "logout",
      action: goToLogin,
    },
  ];

  const menu = (
    <Menu
      onClick={({ key }) => {
        runAction(menuActions, key);
      }}
      items={[
        {
          label: "Editar conta",
          key: menuActions[0].key,
          icon: <BsGearFill />,
        },
        {
          label: "Deslogar",
          key: menuActions[1].key,
          icon: <IoMdExit />,
        },
      ]}
    ></Menu>
  );
  return (
    <Dropdown overlay={menu}>
      <div>
        {!user && <IconBlank size={size} />}
        {user && <Icon user={user!} size={size} isDropdown={true}></Icon>}
      </div>
    </Dropdown>
  );
};
