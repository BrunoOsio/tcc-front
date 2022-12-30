import * as yup from "yup";
import { modalityData } from "../../../shared/data/modalityData";

const requiredNameMessage = "Requer um nome";

const minimumNameLength = 4;
const minimumNameMessage = `Requer um nome de no mínimo ${minimumNameLength} caracteres`;

const maximumNameLength = 40;
const maximumNameMessage = `Requer um nome de no máximo ${maximumNameLength} caracteres`;

const negativeNumberMessage = "O número da equipe precisa ser positivo";

const maximumNumberLength = 20000;
const maximumNumberMessage = `Requer um número de até ${maximumNumberLength}`;

const modalityNotMatchedMessage = "Isso não é uma modalidade";
const requiredModalityMessage = "Requer uma modalidade";

const getModalityInitials = modalityData.map((modality => modality.initials));

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];

const maxFileSize = 1024 * 1024;
const fileIsTooLarge = "A foto não pode ser maior que 1MB";
const notAcceptedExtension = "A foto deve ser do tipo [ .jpg / .jpeg / .png ]";

const fileDoesNotExist = () => true;

export const teamSchema = yup.object().shape({
  name: 
    yup.string()
    .trim()
    .min(minimumNameLength, minimumNameMessage)
    .max(maximumNameLength, maximumNameMessage)
    .required(requiredNameMessage),

  number:    
    yup.number()
    .positive(negativeNumberMessage)
    .max(maximumNumberLength, maximumNumberMessage),
      
  modality: 
    yup.string()
    .oneOf(getModalityInitials, modalityNotMatchedMessage)
    .required(requiredModalityMessage),

  file: yup.mixed() 
    .nullable()
    .test(
      'fileSize', 
      fileIsTooLarge, 
      (value) => {
        if (!value) return fileDoesNotExist();

        return value.size <= maxFileSize
      }) 

    .test(
      'fileType', 
      notAcceptedExtension, 
      (value) => {
        if (!value) return fileDoesNotExist();

        return SUPPORTED_FORMATS.includes(value.type)
      })
})