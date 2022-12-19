import { Navigate } from "react-router-dom";
import routes from "../../../../routes/routes";
import { getStoredId, isLoggedIn } from "../../../helpers/localStorage/localStorageHelpers";

type PrivateRouteProps = {
  children: any;
}

export const CheckIsLoggedIn: React.FC<PrivateRouteProps> = ({children}) => {

  const isAuth = isLoggedIn();

  return (
    isAuth ? children : <Navigate to={routes.notLogged()}/>
  )
}
