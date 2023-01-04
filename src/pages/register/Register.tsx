import { useFormik } from "formik";
import {
  Button,
  Container,
  Form,
  FormGroup,
  Error,
  Input,
  Label,
  LeftSide,
  RightSide,
  Title,
  Top,
  LogoContainer,
  Subtitle,
  ImageContainer,
  Image
} from "../login/styles";
import { ImArrowRight } from "react-icons/im";
import { registerSchema } from "./schemas/registerSchema";
import { trimmed } from "../../shared/helpers/stringHelpers";
import userService from "../../shared/services/user/userService";
import { NewUserDTO } from "../../shared/dtos/user/NewUserDTO";
import { notifyError, notifySuccess, notifyWarning } from "../../shared/helpers/notificationHelpers";
import { useNavigate } from "react-router-dom";
import routes from "../../routes/routes";
import { Logo } from "../../shared/components/logo/Logo";


export type RegisterFormValues = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const Register = () => {
  const navigate = useNavigate();
  const onSubmit = async () => {

    const user: NewUserDTO = {
      email: values.email,
      name: values.name,
      password: values.password
    } 

    const isUniqueEmail = await userService.isUniqueEmail(user.email);

    if (!isUniqueEmail) {
      notifyWarning("O email já está cadastrado")
      resetFormData();
      return;
    }

    const newUser = await userService.register(user);

    if (!newUser) {
      notifyError("Erro no cadastro");
      resetFormData();
      return; 
    }

    notifySuccess("Usuário cadastrado com sucesso");
    navigate(routes.login(), {state: user});
  };

  const initialValues: RegisterFormValues = {
    name: "",
    email: trimmed(""),
    password: trimmed(""),
    confirmPassword: trimmed("")
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema: registerSchema,
    onSubmit,
  });

  const resetFormData = () => {
    const {email, name, password, confirmPassword} = initialValues;

    values.email = email;
    values.name = name;
    values.password = password;
    values.confirmPassword = confirmPassword;
  }

  const isNameInvalid = errors.name && touched.name;
  const isEmailInvalid = errors.email && touched.email;
  const isPasswordInvalid = errors.password && touched.password;
  const isConfirmPasswordInvalid = errors.confirmPassword && touched.password;

  return (
    <Container>
      <LeftSide>
        <Title>Registrar</Title>
        <Form onSubmit={handleSubmit} autoComplete="off">
          <FormGroup>
            <Label htmlFor="name">Nome Completo</Label>
            <Input
              name="name"
              isError={isNameInvalid}
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            {isNameInvalid && <Error>{errors.name}</Error>}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              name="email"
              isError={isEmailInvalid}
              value={trimmed(values.email)}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            {isEmailInvalid && <Error>{errors.email}</Error>}
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

            {isPasswordInvalid && <Error>{errors.password}</Error>}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="confirmPassword">Confirmar Senha</Label>
            <Input
              name="confirmPassword"
              isError={isPasswordInvalid}
              value={trimmed(values.confirmPassword)}
              onChange={handleChange}
              onBlur={handleBlur}
              type="password"
            />

            {isConfirmPasswordInvalid && <Error>{errors.confirmPassword}</Error>}
          </FormGroup>
          <Button disabled={isSubmitting} type="submit">
            <span>
              <ImArrowRight />
            </span>
          </Button>
        </Form>
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
};
