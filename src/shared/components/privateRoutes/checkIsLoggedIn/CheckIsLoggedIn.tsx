import { Navigate } from "react-router-dom";
import { getStoredId, isLoggedIn } from "../../../helpers/localStorage/localStorageHelpers";

type PrivateRouteProps = {
  children: any;
}

export const CheckIsLoggedIn: React.FC<PrivateRouteProps> = ({children}) => {

  const isAuth = isLoggedIn();
  console.log(getStoredId());
  return (
    isAuth ? children : <Navigate to="/notLogged"/>
  )
}
