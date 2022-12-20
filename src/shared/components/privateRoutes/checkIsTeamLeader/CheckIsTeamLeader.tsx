import { Navigate, useParams } from "react-router-dom";
import routes from "../../../../routes/routes";
import { isLoggedIn, isUserOnTeam, isUserTeamLeader } from "../../../helpers/localStorage/localStorageHelpers";

type PrivateRouteProps = {
  children: any;
}

export const CheckIsTeamLeader: React.FC<PrivateRouteProps> = ({children}) => {
  const { teamId } = useParams();
  const teamIdNumber = Number(teamId);

  const isAuth = isLoggedIn() && isUserOnTeam(teamIdNumber) && isUserTeamLeader(teamIdNumber);
  
  return (
    isAuth ? children : <Navigate to={routes.prohibited()}/>
  )
}
