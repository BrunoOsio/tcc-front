import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { ImArrowRight } from "react-icons/im";
import { useLocation, useNavigate } from "react-router-dom";
import { NewTeamDTO } from "../../shared/dtos/team/NewTeamDTO";
import { getStoredId } from "../../shared/helpers/localStorageHelpers";
import { notifyError, notifySuccess } from "../../shared/helpers/notificationHelpers";
import { modalityMock } from "../../shared/services/mock/modality/modalityMock";
import teamService from "../../shared/services/team/teamService";
import userService from "../../shared/services/user/userService";
import { Modality, User } from "../../shared/types";
import { Loading } from "../login/components/loading/Loading";
import { Icon } from "./components/icon/Icon";
import { teamSchema } from "./schemas/teamSchema";
import { Container, Form, FormGroup, Input, Label, Error, Title, Select, Button, Header } from "./styles";

export const CreateTeam = () => {
  const [user, setUser] = useState<User>();

  const navigate = useNavigate(); 

  const onSubmit = async () => {
    const newTeam: NewTeamDTO = {
      name: values.name,
      modality: values.modality,
      number: values.number || undefined
    }

    const team = user && await teamService.createTeam(newTeam, user.id);
    
    if (team) {
      notifySuccess("Time criado com sucesso");

      goToTeamDashboard(team.id);
    } else {
      notifyError("Erro na criação, preencha os dados novamente");

      resetFormData();
    }
  }

  const initialValues = {
    name: "",
    modality: modalityMock[0].initials,  
    number: undefined,
  }

  const {values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit} = useFormik({
    initialValues,
    validationSchema: teamSchema,
    onSubmit
  });

  const userId = getStoredId();
  useEffect(() => {
    const getUser = async () => {
      const user = await userService.findUser(userId);
      setUser(user);
    };
    
    getUser();
  }, []);

  const isNumberedModality = (choosedModality: string | undefined) => {
    if (choosedModality === undefined) {
      return; 
    }

    const modalities = modalityMock;

    const modality: Modality = modalities.filter(modality => modality.initials === choosedModality)[0];

    return modality.hasNumber && true;
  }

  const goToTeamDashboard = (teamId: number) => {
    navigate(`/team/${teamId}/dashboard`)
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
      <Header>
        <Title>Criar novo time</Title>

        {user && <Icon user={user}/>}
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
            {modalityMock.map((modality) => <option key={modality.initials} value={modality.initials}>{modality.name}</option>)}
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
    </Container>
  );

}