import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { ImArrowRight } from "react-icons/im";
import { useNavigate, useParams } from "react-router-dom";
import { Icon } from "../../shared/components/icon/Icon";
import { IconBlank } from "../../shared/components/iconBlank/IconBlank";
import { Navbar } from "../../shared/components/navbar/Navbar";
import { NewAreaDTO } from "../../shared/dtos/area/NewAreaDTO";
import { getStoredId } from "../../shared/helpers/localStorage/localStorageHelpers";
import { notifyError, notifySuccess } from "../../shared/helpers/notificationHelpers";
import areaService from "../../shared/services/area/areaService";
import { areaSpecializationData } from "../../shared/data/areaSpecializationData";
import { useAppDispatch, useAppSelector } from "../../states/app/hooks";
import { findTeam } from "../../states/features/teamSlice";
import { findUser } from "../../states/features/userSlice";
import { Loading } from "../login/components/loading/Loading";
import { areaSchema } from "./schemas/areaSchema";
import { Form, FormGroup, Input, Label, Error, Title, Select, Button, Header, FormContainer, Container } from "./styles";
import { TechnicalSpecialization } from "../../shared/types/area/specialization/base/TechnicalSpecialization";
import { NonTechnicalSpecialization } from "../../shared/types/area/specialization/base/NonTechnicalSpecialization";
import routes from "../../routes/routes";

export const CreateArea = () => {

  const { teamId } = useParams();
  const teamIdNumber = Number(teamId);

  const { value: user, isLoading: isUserLoading, isSuccess: isUserSuccess } = useAppSelector((state) => state.user);
  const { value: team } = useAppSelector((state => state.team));

  const dispatch = useAppDispatch();
  const navigate = useNavigate(); 

  const onSubmit = async () => {

    const newArea: NewAreaDTO = {
      name: values.name,
      specialization: values.specialization as TechnicalSpecialization | NonTechnicalSpecialization,
    }

    const area = team && await areaService.createArea(newArea, team[0].id);

    if (area) {
      notifySuccess("Área criada com sucesso");
      goToTeamAreaBoard(area.id);
    } else {
      notifyError("Erro na criação, preencha os dados novamente");

      resetFormData();
    }
  }

  const initialValues = {
    name: "",
    specialization: areaSpecializationData[0].type
  }

  const {values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit} = useFormik({
    initialValues,
    validationSchema: areaSchema,
    onSubmit
  });

  const userId = getStoredId();
  useEffect(() => {
    dispatch(findUser(userId));
    dispatch(findTeam(teamIdNumber));
  }, []);

  const resetFormData = () => {
    values.name = initialValues.name;
    values.specialization = initialValues.specialization;
  }

  const goToTeamAreaBoard = (areaId: number) => {
    navigate(routes.teamAreaBoard(teamIdNumber, areaId));
  }

  const isNameInvalid = errors.name && touched.name;
  const isSpecializationInvalid = errors.specialization && touched.specialization;

  return (
    <Container>
      <Navbar/>
      <FormContainer>
        <Header>
          <Title>Criar nova área</Title>
          {isUserLoading && <IconBlank size={40}/>}
          {user && <Icon user={user} size={40}/>}
        </Header>
        <Form onSubmit={handleSubmit} autoComplete="off">
          <FormGroup>
            <Label htmlFor="name">Nome da área</Label>
              <Input 
                name="name"
                isError={isNameInvalid}
                value={values.name} 
                onChange={handleChange} 
                onBlur={handleBlur}
          />

              {(isNameInvalid) && <Error>{errors.name}</Error>}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="modality">Tipo de especialização</Label>
            <Select 
              name="specialization"
              placeholder="Selecione a especialização da área"
              isError={isSpecializationInvalid}
              onChange={handleChange} 
              onBlur={handleBlur}
            >
              {areaSpecializationData.map((specialization, index) => <option key={index} value={specialization.type}>{specialization.value}</option>)}
            </Select>

            {(isSpecializationInvalid) && <Error>{errors.specialization}</Error>}
          </FormGroup>

          <Button type="submit"><span>{isSubmitting ? <Loading/> : <ImArrowRight/>}</span></Button>
        </Form>
      </FormContainer>
    </Container>
    
  );

}