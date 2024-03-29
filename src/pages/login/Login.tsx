import { useFormik } from "formik"
import { loginSchema } from "./schemas/loginSchema";
import { Button, Container, Form, FormGroup, Error, Input, Label, LeftSide, RightSide, Title, DividerContainer, Line, TextDivider, NotRegisteredText, Top, LogoContainer, Subtitle, Image, ImageContainer } from "./styles";
import { ImArrowRight } from "react-icons/im";
import { trimmed } from "../../shared/helpers/stringHelpers";
import { useLocation, useNavigate } from "react-router-dom";
import userService from "../../shared/services/user/userService";
import { UserLoginDTO } from "../../shared/dtos/user/UserLoginDTO";
import { notifyError, notifySuccess } from "../../shared/helpers/notificationHelpers";
import { Loading } from "./components/loading/Loading";
import { UserLoginStorageDTO } from "../../shared/dtos/user/UserLoginStorageDTO";
import teamService from "../../shared/services/team/teamService";
import { clearLocalStorage, mapRawTeamsIdsToString, saveLocalStorage } from "../../shared/helpers/localStorage/localStorageHelpers";
import { SaveLocalStorageDto } from "../../shared/helpers/localStorage/SaveLocalStorageDto";
import { useAppSelector } from "../../states/app/hooks";
import { useDispatch } from "react-redux";
import { findUser } from "../../states/features/userSlice";
import { useEffect } from "react";
import routes from "../../routes/routes";
import { Logo } from "../../shared/components/logo/Logo";

export type LoginFormValues = {
  email: string,
  password: string
}

export const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { value: user, isLoading: isUserLoading, isSuccess: isUserSuccess } = useAppSelector((state) => state.user);

  const onSubmit = async () => {
    const userLogin: UserLoginDTO = {
      email: values.email,
      password: values.password
    } 

    const login = await userService.checkLogin(userLogin);
    
    if (login) {

      const userLoginStorage: UserLoginStorageDTO = {
        id: login.id,
        name: login.name,
        email: login.email
      }

      await configureLoginStorage(userLoginStorage);

      notifySuccess("Usuário logado com sucesso");

      goToTeamSelector();
    } else {
      notifyError("Usuário ou senha inválidos");

      resetFormData();
    }
  }

  const fillEmail = (): string => {
    return trimmed(location.state ? location.state.email : "");
  }
  
  const initialValues: LoginFormValues = {
    email: fillEmail(),
    password: trimmed("")
  }

  const {values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit} = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit
  });

  useEffect(() => {
    clearLocalStorage();
  }, []);

  const configureLoginStorage = async (user: UserLoginStorageDTO) => {
    
    const teams = await teamService.findTeams(user.id);
    const leaderedTeams = await userService.findLeaderedTeams(user.id);

    const teamsIds = mapRawTeamsIdsToString(teams.map(team => team.id));
    const leaderedTeamsIds = mapRawTeamsIdsToString(leaderedTeams.map(team => team.id));

    const localStorageDto: SaveLocalStorageDto = {
      id: String(user.id),
      name: user.name,
      teamsIds: teamsIds,
      leaderedTeamsIds: leaderedTeamsIds
    }
    
    saveLocalStorage(localStorageDto);
  }

  const resetFormData = () => {
    const {email, password} = initialValues;

    values.email = email;
    values.password = password;
  }

  const goToRegister = () => {
    navigate(routes.register());
  }

  const goToTeamSelector = () => {
    navigate(routes.mainMenu());
  }
  
  const isEmailInvalid = errors.email && touched.email;
  const isPasswordInvalid = errors.password && touched.password;

  return (
    <Container>
      <LeftSide>
        <Title>Login</Title>
        <Form onSubmit={handleSubmit} autoComplete="off">
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input 
              name="email"
              isError={isEmailInvalid}
              value={trimmed(values.email)} 
              onChange={handleChange} 
              onBlur={handleBlur}
            />

            {(isEmailInvalid) && <Error>{errors.email}</Error>}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="password">Senha</Label>
            <Input 
              name="password"
              isError={isPasswordInvalid}
              value={trimmed(values.password)} 
              onChange={handleChange} 
              onBlur={handleBlur}
              type="password"
            />

          {(isPasswordInvalid) && <Error>{errors.password}</Error>}
          </FormGroup>
          <Button type="submit"><span>{isSubmitting ? <Loading/> : <ImArrowRight/>}</span></Button>
        </Form>
        <DividerContainer>
          <Line/>
          <TextDivider>OU</TextDivider>
        </DividerContainer>

        <NotRegisteredText onClick={goToRegister}>Não tenho cadastro</NotRegisteredText>
      </LeftSide>
      <RightSide>
        <Top>
          <LogoContainer>
            <Logo theme={"dark"} pointerEvents={false}/>
          </LogoContainer>
          <Subtitle>Gerenciador de tarefas para equipes de robótica</Subtitle>
        </Top>
        <ImageContainer>
          <Image src="login.svg"/>
        </ImageContainer>
      </RightSide>
    </Container>
  );
}