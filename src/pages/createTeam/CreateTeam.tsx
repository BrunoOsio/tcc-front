import { useFormik } from "formik";
import { useEffect } from "react";
import { ImArrowRight } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { Icon } from "../../shared/components/icon/Icon";
import { IconBlank } from "../../shared/components/iconBlank/IconBlank";
import { Navbar } from "../../shared/components/navbar/Navbar";
import { NewTeamDTO } from "../../shared/dtos/team/NewTeamDTO";
import { addLocalStorageWhenCreatedTeam, getStoredId } from "../../shared/helpers/localStorage/localStorageHelpers";
import { notifyError, notifySuccess } from "../../shared/helpers/notificationHelpers";
import { modalityData } from "../../shared/data/modalityData";
import teamService from "../../shared/services/team/teamService";
import { Modality } from "../../shared/types";
import { useAppDispatch, useAppSelector } from "../../states/app/hooks";
import { findUser } from "../../states/features/userSlice";
import { Loading } from "../login/components/loading/Loading";
import { teamSchema } from "./schemas/teamSchema";
import { Form, FormGroup, Input, Label, Error, Title, Select, Button, Header, FormContainer, Container } from "./styles";
import routes from "../../routes/routes";

export const CreateTeam = () => {
  const { value: user, isLoading: isUserLoading, isSuccess: isUserSuccess } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate(); 

  const onSubmit = async () => {
    const newTeam: NewTeamDTO = {
      name: values.name,
      modality: values.modality,
      number: values.number || undefined,
    }

    const team = user && await teamService.createTeam(newTeam, user.id);

    if (team) {
      addLocalStorageWhenCreatedTeam(team.id);

      notifySuccess("Time criado com sucesso");

      goToTeamDashboard(team.id);
    } else {
      notifyError("Erro na criação, preencha os dados novamente");

      resetFormData();
    }
  }

  const initialValues = {
    name: "",
    modality: modalityData[0].initials,  
    number: undefined,
  }

  const {values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit} = useFormik({
    initialValues,
    validationSchema: teamSchema,
    onSubmit
  });

  const userId = getStoredId();
  useEffect(() => {
    dispatch(findUser(userId));
  }, []);

  const isNumberedModality = (choosedModality: string | undefined) => {
    if (choosedModality === undefined) {
      return; 
    }

    const modality: Modality = modalityData.filter(modality => modality.initials === choosedModality)[0];

    return modality.hasNumber && true;
  }

  const goToTeamDashboard = (teamId: number) => {
    navigate(routes.teamDashboard(teamId))
  }

  const resetFormData = () => {
    values.name = initialValues.name;
    values.number = initialValues.number;
    values.modality = initialValues.modality;
  }

  const isNameInvalid = errors.name && touched.name;
  const isModalityInvalid = errors.modality && touched.modality;
  const isNumberInvalid = errors.number && touched.number;

  return (
    <Container>
      <Navbar/>
      <FormContainer>
        <Header>
          <Title>Criar novo time</Title>
          {isUserLoading && <IconBlank size={40}/>}
          {user && <Icon user={user} size={40}/>}
        </Header>
        <Form onSubmit={handleSubmit} autoComplete="off">
          <FormGroup>
            <Label htmlFor="name">Nome do time</Label>
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
            <Label htmlFor="modality">Modalidade</Label>
            <Select 
              name="modality"
              placeholder="Selecione a modalidade"
              isError={isModalityInvalid}
              onChange={handleChange} 
              onBlur={handleBlur}
            >
              {modalityData.map((modality) => <option key={modality.initials} value={modality.initials}>{modality.name}</option>)}
            </Select>

            {(isModalityInvalid) && <Error>{errors.modality}</Error>}
          </FormGroup>

          {
            isNumberedModality(values.modality) && (
            
              <FormGroup>
                <Label htmlFor="number">Número de registro</Label>
                <Input 
                  type="number"
                  placeholder="Ex: 1772"
                  name="number"
                  isError={isNumberInvalid}
                  value={values.number} 
                  onChange={handleChange} 
                  onBlur={handleBlur}
              />

                {(isNumberInvalid) && <Error>{errors.number}</Error>}
              </FormGroup>
            )
          }

          <Button type="submit"><span>{isSubmitting ? <Loading/> : <ImArrowRight/>}</span></Button>
        </Form>
      </FormContainer>
    </Container>
  );
}