import { useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import { AiFillRobot, AiOutlineMenu } from 'react-icons/ai';
import { TbArrowBackUp } from "react-icons/tb"
import { sidebarData } from './data/SidebarData';
import Submenu from './components/submenu/Submenu';
import { Logo } from '../logo/Logo';
import { Divider, Header, Nav, OpenButton, SidebarNav, SidebarWrap } from './styles';
import { PositionCoordinates } from './types/PositionCoordinates';
import { useNavigate } from 'react-router-dom';
import routes from '../../../routes/routes';
import { useAppDispatch, useAppSelector } from '../../../states/app/hooks';
import { getStoredId } from '../../helpers/localStorage/localStorageHelpers';
import { SidebarItem } from "../../components/sidebar/types/SidebarItem";
import { Team } from '../../types/team/Team';
import teamService from '../../services/team/teamService';

type SidebarProps = {
  openButtonSize?: number;
  position: PositionCoordinates;
}

export const Sidebar: React.FC<SidebarProps> = ({openButtonSize, position}) => {
  const { value: teamArray, isLoading: isTeamLoading} = useAppSelector((state) => state.team);
  const { value: user, isLoading: isUserLoading, isSuccess: isUserSuccess } = useAppSelector((state) => state.user);

  const [teams, setTeams] = useState<Team[]>();

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  useEffect(() => {
    const fetchTeams = async () => {
      const teams = await teamService.findTeams(getStoredId());

      setTeams(teams);
    }

    fetchTeams();
  }, []);
    
  const openButtonCoordinates: PositionCoordinates = {
    top: position.top,
    left: position.left,
  }


  const goHistoryBack = () => {
    navigate(routes.backHistory());
  }

  const sidebarTeams = () => {
    if (!teams) return;

    let sidebarTeams: SidebarItem[] = [];
    
    teams.forEach((team) => {
      const teamData: SidebarItem = {
        title: team.name,
        path: routes.teamDashboard(team.id),
        icon: <AiFillRobot/>
      }

      sidebarTeams.push(teamData);
    });

    return sidebarTeams;
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
          <span onClick={goHistoryBack}><TbArrowBackUp/></span>
          <Logo theme={'white'}/>
        </Header>

        {sidebarTeams()?.map((item, index) => <Submenu item={item} key={index} />)}
        <Divider/>
        {sidebarData.map((item, index) => <Submenu item={item} key={index} />)}
      </SidebarWrap>
    </SidebarNav>
  </IconContext.Provider>
  );
};
