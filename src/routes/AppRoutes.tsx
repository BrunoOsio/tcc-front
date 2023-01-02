import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TeamAreaBoard } from "../pages";
import { AreaSettings } from "../pages/areasSettings/AreasSettings";
import { CreateArea } from "../pages/createArea/CreateArea";
import { CreateTeam } from "../pages/createTeam/CreateTeam";
import { EditTeam } from "../pages/editTeam/EditTeam";
import { EditUser } from "../pages/editUser/EditUser";
import { JoinRequests } from "../pages/joinRequests/JoinRequests";
import { Login } from "../pages/login/Login";
import { NotLoggedPage } from "../pages/notLoggedPage/NotLoggedPage";
import { ProhibitedPage } from "../pages/prohibitedPage/ProhibitedPage";
import { Register } from "../pages/register/Register";
import { SearchTeam } from "../pages/searchTeam/SearchTeam";
import { TeamConfigurations } from "../pages/teamConfigurations/TeamConfigurations";
import { TeamDashboard } from "../pages/teamDashboard/TeamDashboard";
import { TeamMembers } from "../pages/teamMembers/TeamMembers";
import { TeamSelector } from "../pages/teamSelector/TeamSelector";
import { CheckIsLoggedIn } from "../shared/components/privateRoutes/checkIsLoggedIn/CheckIsLoggedIn";
import { CheckIsTeamLeader } from "../shared/components/privateRoutes/checkIsTeamLeader/CheckIsTeamLeader";
import { CheckUserTeams } from "../shared/components/privateRoutes/checkUserTeams/CheckUserTeams";

export const AppRoutes = () => {
  return(
    <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/" element={<CheckIsLoggedIn><TeamSelector/></CheckIsLoggedIn>}/>
            <Route path="/editUser" element={<CheckIsLoggedIn><EditUser/></CheckIsLoggedIn>}/>
            <Route path="/createTeam" element={<CheckIsLoggedIn><CreateTeam/></CheckIsLoggedIn>}/>
            <Route path="/searchTeam" element={<CheckIsLoggedIn><SearchTeam/></CheckIsLoggedIn>}/>
            <Route path="/team/:teamId/dashboard" element={<CheckUserTeams><TeamDashboard/></CheckUserTeams>}/>
            <Route path="/team/:teamId/createArea" element={<CheckUserTeams><CreateArea/></CheckUserTeams>}/>
            <Route path="/team/:teamId/configurations" element={<CheckIsTeamLeader><TeamConfigurations/></CheckIsTeamLeader>}/>
            <Route path="/team/:teamId/configurations/edit" element={<CheckUserTeams><EditTeam/></CheckUserTeams>}/>
            <Route path="/team/:teamId/configurations/members" element={<CheckUserTeams><TeamMembers/></CheckUserTeams>}/>
            <Route path="/team/:teamId/configurations/joinRequests" element={<CheckIsTeamLeader><JoinRequests/></CheckIsTeamLeader>}/>
            <Route path="/team/:teamId/configurations/areasSettings" element={<CheckIsTeamLeader><AreaSettings/></CheckIsTeamLeader>}/>
            <Route path="/team/:teamId/area/:areaId/board" element={<CheckUserTeams><TeamAreaBoard/></CheckUserTeams>}/>
            <Route path="/prohibited" element={<ProhibitedPage/>}/>
            <Route path="/notLogged" element={<NotLoggedPage/>}/>
          </Routes>
        </BrowserRouter>
  );
}