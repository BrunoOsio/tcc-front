import { useNavigate } from "react-router-dom";
import { Container } from "./styles";

type LogoTheme = "dark" | "white";

type LogoProps = {
  theme: LogoTheme;
};

export const Logo: React.FC<LogoProps> = ({ theme }) => {

  const navigate = useNavigate();

  const goToMainPage = () => {
    navigate("/");
  }

  const themeChoosen =
    theme === "white" ? "/darkbg_logo.png" : "/lightbg_logo.png";

  return <Container onClick={goToMainPage} src={themeChoosen} alt="Logo Teamlist"/>;
};
