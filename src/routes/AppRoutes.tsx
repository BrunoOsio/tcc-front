import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TeamAreaBoard } from "../pages";
import { CreateArea } from "../pages/createArea/CreateArea";
import { CreateTeam } from "../pages/createTeam/CreateTeam";
import { Login } from "../pages/login/Login";
import { NotLoggedPage } from "../pages/notLoggedPage/NotLoggedPage";
import { ProhibitedPage } from "../pages/prohibitedPage/ProhibitedPage";
import { Register } from "../pages/register/Register";
import { SearchTeam } from "../pages/searchTeam/SearchTeam";
import { TeamDashboard } from "../pages/teamDashboard/TeamDashboard";
import { TeamSelector } from "../pages/teamSelector/TeamSelector";
import { CheckIsLoggedIn } from "../shared/components/privateRoutes/checkIsLoggedIn/CheckIsLoggedIn";
import { CheckUserTeams } from "../shared/components/privateRoutes/checkUserTeams/CheckUserTeams";

export const AppRoutes = () => {
  return(
    <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/" element={<CheckIsLoggedIn><TeamSelector/></CheckIsLoggedIn>}/>
            <Route path="/createTeam" element={<CheckIsLoggedIn><CreateTeam/></CheckIsLoggedIn>}/>
            <Route path="/searchTeam" element={<CheckIsLoggedIn><SearchTeam/></CheckIsLoggedIn>}/>
            <Route path="/team/:teamId/dashboard" element={<CheckUserTeams><TeamDashboard/></CheckUserTeams>}/>
            <Route path="/team/:teamId/createArea" element={<CheckUserTeams><CreateArea/></CheckUserTeams>}/>
            <Route path="/team/:teamId/area/:areaId/board" element={<CheckUserTeams><TeamAreaBoard/></CheckUserTeams>}/>
            <Route path="/prohibited" element={<ProhibitedPage/>}/>
            <Route path="/notLogged" element={<NotLoggedPage/>}/>
          </Routes>
        </BrowserRouter>
  );
}