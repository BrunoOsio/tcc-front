import { useFormik } from "formik";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { ImArrowRight } from "react-icons/im";
import { useNavigate, useParams } from "react-router-dom";
import { Icon } from "../../shared/components/icon/Icon";
import { IconBlank } from "../../shared/components/iconBlank/IconBlank";
import { Navbar } from "../../shared/components/navbar/Navbar";
import { NewTeamDTO } from "../../shared/dtos/team/NewTeamDTO";
import { addLocalStorageWhenCreatedTeam, getStoredId } from "../../shared/helpers/localStorage/localStorageHelpers";
import { notifyError, notifySuccess } from "../../shared/helpers/notificationHelpers";
import { modalityData } from "../../shared/data/modalityData";
import teamService from "../../shared/services/team/teamService";
import { Modality, Photo } from "../../shared/types";
import { useAppDispatch, useAppSelector } from "../../states/app/hooks";
import { findUser } from "../../states/features/userSlice";
import { teamSchema } from "../createTeam/schemas/teamSchema";
import { Form, FormGroup, Input, Label, Error, Title, Select, Button, Header, FormContainer, Container, FileUpload, FileUploadButton, PhotoContainer, FileRemoveButton } from "./styles";
import routes from "../../routes/routes";
import { PreviewPhoto } from "../../shared/components/previewPhoto/PreviewPhoto";
import photoService from "../../shared/services/photo/photoService";
import { Loading } from "../../shared/components/loading/Loading";
import { findTeam } from "../../states/features/teamSlice";
import { TeamPhotoBlank } from "../../shared/components/teamPhotoBlank/TeamPhotoBlank";
import { TeamPhoto } from "../../shared/components/teamPhoto/TeamPhoto";
import { UpdateTeamDTO } from "../../shared/dtos/team/UpdateTeamDTO";

export const EditTeam = () => {
  const { value: user, isLoading: isUserLoading, isSuccess: isUserSuccess } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate(); 

  const { value: teamArray, isLoading: isTeamLoading} = useAppSelector((state) => state.team);
  const isTeamSuccess = teamArray && teamArray.length === 1;
  const team = teamArray && teamArray[0];

  const { teamId } = useParams();
  const teamIdNumber = Number(teamId);

  const [isChangedPhoto, setChangedPhoto] = useState(false);

  const fileRef = useRef<HTMLInputElement>(null);

  const onSubmit = async () => {

    const { name, modality, number, file } = values;

    const updateTeamDto: UpdateTeamDTO = {
      name: name,
      modality: modality,
      number: number || undefined,
      isChangedPhoto: isChangedPhoto
    }

    let photo: Photo | undefined = undefined;

    if (isChangedPhoto && !file) {
      updateTeamDto.photo = photo;
    }

    if (isChangedPhoto && file && file.size > 0) {
      photo = await photoService.create(file);
      updateTeamDto.photo = photo;
    }

    const team = user && await teamService.updateTeam(updateTeamDto, teamIdNumber);

    if (team) {
      notifySuccess("Time editado com sucesso");

      goToTeamDashboard(team.id);
    } else {
      notifyError("Erro na edição, preencha os dados novamente");

      resetFormData();
    }
  }

  const initialValues = {
    name: "",
    modality: modalityData[0].initials,  
    number:  undefined as number | undefined,
    file: undefined as File | undefined
  }

  const {values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit, setFieldValue} = useFormik({
    initialValues,
    validationSchema: teamSchema,
    onSubmit
  });

  const userId = getStoredId();
  useEffect(() => {
    dispatch(findUser(userId));
    dispatch(findTeam(teamIdNumber));
  }, []);

  useEffect(() => {
    if (!isTeamSuccess) return;

    initialValues.name = team.name;
    initialValues.number = team.number;
  }, [isTeamSuccess]);

  const isNumberedModality = (choosedModality: string | undefined) => {
    if (choosedModality === undefined) {
      return; 
    }

    const modality: Modality = modalityData.filter(modality => modality.initials === choosedModality)[0];

    return modality.hasNumber && true;
  }

  const handleFile = (event: ChangeEvent<HTMLInputElement>) => {
    
    const { files } = event.target;
    
    const file: File | undefined = files ? files[0] : undefined;
    
    setChangedPhoto(true);
    setFieldValue("file", file);
  }

  const handleRemoveFile = () => {
    
    setChangedPhoto(true);
    setFieldValue("file", undefined);
  }

  const handleRemoveCurrentPhoto = () => {
    setChangedPhoto(true);
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
  const isFileInvalid = errors.file;

  return (
    <Container>
      <Navbar/>
      <FormContainer isLoading={isSubmitting}>

        {isSubmitting && (<Loading size={100}/>)}

        <Header>
          <Title>Editar time {isTeamSuccess && team.name}</Title>
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

          <FormGroup>
            {(!team?.photo || isChangedPhoto) && (
              <PhotoContainer>
                {!values.file && (
                  <FileUploadButton type="button" onClick={() => fileRef?.current?.click()}>
                    <span>Upload da logo do time</span>
                  </FileUploadButton>
                )}

                {values.file && (
                  <FileRemoveButton type="button" onClick={handleRemoveFile}>
                    <span>Remover</span>
                  </FileRemoveButton>
                )}

                {values.file && <PreviewPhoto file={values.file!}/>}
              </PhotoContainer>
            )}

            {(team?.photo && !isChangedPhoto) && (
              <PhotoContainer>
                <FileRemoveButton type="button" onClick={handleRemoveCurrentPhoto}>
                  <span>Remover</span>
                </FileRemoveButton>

                {isTeamLoading && <TeamPhotoBlank size={50}/>}
                {isTeamSuccess && <TeamPhoto team={team} size={50}/>}
              </PhotoContainer>
            )}

            <FileUpload
              ref={fileRef}
              hidden
              type="file" 
              name="file"
              onChange={(event) => handleFile(event)}
            />
            {(isFileInvalid) && <Error>{errors.file}</Error>}
          </FormGroup>

          <Button type="submit" isLoading={isSubmitting}><span><ImArrowRight/></span></Button>
        </Form>        
      </FormContainer>
    </Container>
  );
}