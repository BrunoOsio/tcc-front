import * as yup from "yup";

const requiredNameMessage = "Requer um nome";

const minimumNameLength = 4;
const minimumNameMessage = `Requer um nome de no mínimo ${minimumNameLength} caracteres`;

const maximumNameLength = 30;
const maximumNameMessage = `Requer um nome de no máximo ${maximumNameLength} caracteres`;

export const editUserSchema = yup.object().shape({
  name: 
    yup.string()
    .trim()
    .min(minimumNameLength, minimumNameMessage)
    .max(maximumNameLength, maximumNameMessage)
    .required(requiredNameMessage)
})