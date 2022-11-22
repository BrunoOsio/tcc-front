import * as yup from "yup";
import { modalityMock } from "../../../shared/services/mock/modality/modalityMock";

const requiredNameMessage = "Requer um nome";

const minimumNameLength = 4;
const minimumNameMessage = `Requer um nome de no mínimo ${minimumNameLength} caracteres`;

const maximumNameLength = 40;
const maximumNameMessage = `Requer um nome de no máximo ${maximumNameLength} caracteres`;

const negativeNumberMessage = "O número da equipe precisa ser positivo";

const maximumNumberLength = 20000;
const maximumNumberMessage = `Requer um número de até ${maximumNumberLength}`;

const requiredNumberMessage = "Requer um número";

const modalityNotMatchedMessage = "Isso não é uma modalidade";
const requiredModalityMessage = "Requer uma modalidade";


const getModalityInitials = modalityMock.map((modality => modality.initials));

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
    .max(maximumNumberLength, maximumNumberMessage)
    .required(requiredNumberMessage),
  
  modality: 
    yup.string()
    .oneOf(getModalityInitials, modalityNotMatchedMessage)
    .required(requiredModalityMessage)
})