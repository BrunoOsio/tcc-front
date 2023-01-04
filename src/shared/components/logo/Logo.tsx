import { useNavigate } from "react-router-dom";
import routes from "../../../routes/routes";
import { Container } from "./styles";

type LogoTheme = "dark" | "white";

type LogoProps = {
  theme: LogoTheme;
  pointerEvents: boolean;
};

export const Logo: React.FC<LogoProps> = ({ theme, pointerEvents }) => {

  const navigate = useNavigate();

  const goToMainPage = () => {
    navigate(routes.mainMenu());
  }

  const themeChoosen =
    theme === "white" ? "/darkbg_logo.png" : "/lightbg_logo.png";

  return <Container onClick={goToMainPage} src={themeChoosen} pointerEvents={pointerEvents} alt="Logo Teamlist"/>;
};
