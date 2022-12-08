import { useState } from 'react';
import { IconContext } from 'react-icons';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { SidebarData } from './data/SidebarData';
import Submenu from './components/submenu/Submenu';
import { Logo } from '../logo/Logo';
import { Header, Nav, OpenButton, SidebarNav, SidebarWrap } from './styles';
import { PositionCoordinates } from './types/PositionCoordinates';

type SidebarProps = {
  openButtonSize?: number;
  position: PositionCoordinates;
}

export const Sidebar: React.FC<SidebarProps> = ({openButtonSize, position}) => {

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const openButtonCoordinates: PositionCoordinates = {
    top: position.top,
    left: position.left,
  }

  return (
  <IconContext.Provider value={{ color: '#fff' }}>
    <Nav>
      <OpenButton 
        to="#"
        size={openButtonSize}
        position={openButtonCoordinates}
        onClick={showSidebar}
      >
        <AiOutlineMenu />
      </OpenButton>
    </Nav>
    <SidebarNav sidebar={sidebar} onMouseLeave={showSidebar}>

      
      <SidebarWrap>
        <Header>
          {/* <CloseButton to="#" onClick={showSidebar}>
            <AiOutlineClose />
          </CloseButton> */}

          <Logo theme={'white'}/>
        </Header>
        {SidebarData.map((item, index) =><Submenu item={item} key={index} />)}
      </SidebarWrap>
    </SidebarNav>
  </IconContext.Provider>
  );
};
