import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TeamAreaBoard } from "../pages";
import { CreateTeam } from "../pages/createTeam/CreateTeam";
import { Login } from "../pages/login/Login";
import { Register } from "../pages/register/Register";
import { SearchTeam } from "../pages/searchTeam/SearchTeam";
import { TeamDashboard } from "../pages/teamDashboard/TeamDashboard";
import { TeamSelector } from "../pages/teamSelector/TeamSelector";

export const AppRoutes = () => {
  return(
    <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/" element={<TeamSelector/>}/>
            <Route path="/createTeam" element={<CreateTeam/>}/>
            <Route path="/searchTeam" element={<SearchTeam/>}/>
            <Route path="/team/:teamId/dashboard" element={<TeamDashboard/>}/>
            <Route path="/team/:teamId/area/:areaId" element={<TeamAreaBoard/>}/>
          </Routes>
        </BrowserRouter>
  );
}