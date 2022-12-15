import { Navigate, useParams } from "react-router-dom";
import { isLoggedIn, isUserOnTeam } from "../../helpers/localStorage/localStorageHelpers";

type PrivateRouteProps = {
  children: any;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({children}) => {
  const { teamId } = useParams();
  const teamIdNumber = Number(teamId);

  const isAuth = isLoggedIn() && isUserOnTeam(teamIdNumber);
  
  return (
    isAuth ? children : <Navigate to="/"/>
  )
}
