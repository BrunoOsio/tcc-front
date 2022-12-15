import { useFormik } from "formik"
import { loginSchema } from "./schemas/loginSchema";
import { Button, Container, Form, FormGroup, Error, Input, Label, LeftSide, RightSide, Title, DividerContainer, Line, TextDivider, NotRegisteredText } from "./styles";
import { ImArrowRight } from "react-icons/im";
import { trimmed } from "../../shared/helpers/stringHelpers";
import { useLocation, useNavigate } from "react-router-dom";
import userService from "../../shared/services/user/userService";
import { UserLoginDTO } from "../../shared/dtos/user/UserLoginDTO";
import { notifyError, notifySuccess } from "../../shared/helpers/notificationHelpers";
import { Loading } from "./components/loading/Loading";
import { UserLoginStorageDTO } from "../../shared/dtos/user/UserLoginStorageDTO";
import teamService from "../../shared/services/team/teamService";
import { getStoredId, mapRawTeamsIdsToString, saveLocalStorage } from "../../shared/helpers/localStorage/localStorageHelpers";
import { SaveLocalStorageDto } from "../../shared/helpers/localStorage/SaveLocalStorageDto";
import { useAppSelector } from "../../states/app/hooks";
import { useDispatch } from "react-redux";
import { findUser } from "../../states/features/userSlice";

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

      configureLoginStorage(userLoginStorage);

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

  const configureLoginStorage = async (user: UserLoginStorageDTO) => {
    
    const teams = await teamService.findTeams(user.id);
    const teamsIds = mapRawTeamsIdsToString(teams.map(team => team.id));

    const localStorageDto: SaveLocalStorageDto = {id: String(user.id), teamsIds: teamsIds}
    saveLocalStorage(localStorageDto);
  }

  const resetFormData = () => {
    const {email, password} = initialValues;

    values.email = email;
    values.password = password;
  }

  const goToRegister = () => {
    navigate("/register");
  }

  const goToTeamSelector = () => {
    navigate("/");
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
        Right Side
      </RightSide>
    </Container>
  );
}