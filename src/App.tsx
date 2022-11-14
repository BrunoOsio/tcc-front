import { TeamAreaBoard } from "./pages";

import { GlobalStyle } from "./shared/globalStyles/globalStyles";
import { ToastContainer, toast } from "react-toastify";
import { TeamDashboard } from "./pages/teamDashboard/TeamDashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TeamSelector } from "./pages/teamSelector/TeamSelector";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";

export const App = () => {
  return (
    <>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/" element={<TeamSelector/>}/>
            <Route path="/team/:teamId/dashboard" element={<TeamDashboard/>}/>
            <Route path="/team/:teamId/dashboard/area/:areaId" element={<TeamAreaBoard/>}/>
          </Routes>
        </BrowserRouter>

        <ToastContainer 
          position="bottom-left"
          autoClose={2000}
          hideProgressBar={true}
          newestOnTop={true}
          rtl={false}
          pauseOnFocusLoss
          pauseOnHover
        />
    </>
  );
}

