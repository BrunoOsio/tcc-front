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
  DividerContainer,
  Line,
  TextDivider,
  NotRegisteredText,
} from "../login/styles";
import { ImArrowRight } from "react-icons/im";
import { registerSchema } from "./schemas/registerSchema";

export type RegisterFormValues = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const Register = () => {
  const onSubmit = async () => {
    console.log("submitted");
  };

  const initialValues: RegisterFormValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
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
              value={values.email.trim()}
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
              value={values.password.trim()}
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
              value={values.confirmPassword.trim()}
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
      <RightSide>Right Side</RightSide>
    </Container>
  );
};
