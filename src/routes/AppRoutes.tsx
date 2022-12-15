import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TeamAreaBoard } from "../pages";
import { CreateArea } from "../pages/createArea/CreateArea";
import { CreateTeam } from "../pages/createTeam/CreateTeam";
import { Login } from "../pages/login/Login";
import { Register } from "../pages/register/Register";
import { SearchTeam } from "../pages/searchTeam/SearchTeam";
import { TeamDashboard } from "../pages/teamDashboard/TeamDashboard";
import { TeamSelector } from "../pages/teamSelector/TeamSelector";
import { PrivateRoute } from "../shared/components/privateRoute/PrivateRoute";

export const AppRoutes = () => {
  return(
    <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/" element={<TeamSelector/>}/>
            <Route path="/createTeam" element={<CreateTeam/>}/>
            <Route path="/searchTeam" element={<SearchTeam/>}/>
            <Route path="/team/:teamId/dashboard" element={<PrivateRoute><TeamDashboard/></PrivateRoute>}/>
            <Route path="/team/:teamId/createArea" element={<CreateArea/>}/>
            <Route path="/team/:teamId/area/:areaId/board" element={<TeamAreaBoard/>}/>
          </Routes>
        </BrowserRouter>
  );
}