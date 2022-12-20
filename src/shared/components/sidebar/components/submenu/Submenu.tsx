import { FC, useState } from "react";

import { SidebarItem } from "../../types/SidebarItem";
import { DropdownLink, SidebarLabel, SidebarLink } from "./styles";

type SidebarLinkProps = {
  item: SidebarItem;
  isTeam: boolean;
};

const Submenu: React.FC<SidebarLinkProps> = ({ item, isTeam }) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink isTeam={isTeam} to={item.path} onClick={showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item?.subnav && subnav ? item?.iconOpened : item?.iconClosed}
        </div>
      </SidebarLink>
      {subnav &&
        item?.subnav?.map((subnavItem, index) => {
          return (
            <DropdownLink to={subnavItem.path} key={index}>
              {subnavItem.icon}
              <SidebarLabel>{subnavItem.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default Submenu;
