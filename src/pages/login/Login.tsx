import { useFormik } from "formik"
import { loginSchema } from "./schemas/loginSchema";
import { Button, Container, Form, FormGroup, Error, Input, Label, LeftSide, RightSide, Title, DividerContainer, Line, TextDivider, NotRegisteredText } from "./styles";
import { ImArrowRight } from "react-icons/im";

export type LoginFormValues = {
  email: string,
  password: string
}

export const Login = () => {

  const onSubmit = async () => {
    console.log("submitted");
  }

  const initialValues: LoginFormValues = {
    email: "sdfgs".trim(),
    password: "".trim()
  }

  const {values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit} = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit
  });

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
              value={values.email.trim()} 
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
              value={values.password.trim()} 
              onChange={handleChange} 
              onBlur={handleBlur}
              type="password"
            />

          {(isPasswordInvalid) && <Error>{errors.password}</Error>}
          </FormGroup>
          <Button disabled={isSubmitting} type="submit"><span><ImArrowRight/></span></Button>
        </Form>
        <DividerContainer>
          <Line/>
          <TextDivider>OU</TextDivider>
        </DividerContainer>

        <NotRegisteredText>Não tenho cadastro</NotRegisteredText>
      </LeftSide>
      <RightSide>
        Right Side
      </RightSide>
    </Container>
  );
}