import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { ImArrowRight } from "react-icons/im";
import { useNavigate, useParams } from "react-router-dom";
import { Icon } from "../../shared/components/icon/Icon";
import { IconBlank } from "../../shared/components/iconBlank/IconBlank";
import { Navbar } from "../../shared/components/navbar/Navbar";
import { getStoredId } from "../../shared/helpers/localStorage/localStorageHelpers";
import { notifyError, notifySuccess } from "../../shared/helpers/notificationHelpers";
import { useAppDispatch, useAppSelector } from "../../states/app/hooks";
import { findUser } from "../../states/features/userSlice";
import { Loading } from "../login/components/loading/Loading";
import { Form, FormGroup, Input, Label, Error, Title, Select, Button, Header, FormContainer, Container } from "./styles";
import routes from "../../routes/routes";
import { EditUserDTO } from "../../shared/dtos/user/EditUserDTO";
import userService from "../../shared/services/user/userService";
import { editUserSchema } from "./schemas/editUserSchema";

export const EditUser = () => {


  const { value: user, isLoading: isUserLoading, isSuccess: isUserSuccess } = useAppSelector((state) => state.user);
  const { value: team } = useAppSelector((state => state.team));

  const dispatch = useAppDispatch();
  const navigate = useNavigate(); 

  const onSubmit = async () => {

    const editUserDto: EditUserDTO = {
      name: values.name,
    }

    const user = team && await userService.update(editUserDto, userId);

    if (user) {
      notifySuccess("Usuário editado com sucesso");
      goToMainMenu();

    } else {
      notifyError("Erro na edição, preencha os dados novamente");

      resetFormData();
    }
  }

  const initialValues = {
    name: "",
  }

  const {values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit} = useFormik({
    initialValues,
    validationSchema: editUserSchema,
    onSubmit
  });

  const userId = getStoredId();
  useEffect(() => {
    dispatch(findUser(userId));
  }, []);

  useEffect(() => {
    if(isUserLoading) return;

    if(isUserSuccess) {
      initialValues.name = user!.name;
    }
  }, [isUserSuccess])

  const resetFormData = () => {
    values.name = initialValues.name;
  }

  const goToMainMenu = () => {
    navigate(routes.mainMenu());
  }

  const isNameInvalid = errors.name && touched.name;

  return (
    <Container>
      <Navbar/>
      <FormContainer>
        <Header>
          <Title>Editar Conta</Title>
          {isUserLoading && <IconBlank size={40}/>}
          {user && <Icon user={user} size={40}/>}
        </Header>
        <Form onSubmit={handleSubmit} autoComplete="off">
          <FormGroup>
            <Label htmlFor="name">Nome</Label>
              <Input 
                name="name"
                isError={isNameInvalid}
                value={values.name} 
                onChange={handleChange} 
                onBlur={handleBlur}
            />

            {(isNameInvalid) && <Error>{errors.name}</Error>}
          </FormGroup>

          <Button type="submit"><span>{isSubmitting ? <Loading/> : <ImArrowRight/>}</span></Button>
        </Form>
      </FormContainer>
    </Container>
    
  );

}