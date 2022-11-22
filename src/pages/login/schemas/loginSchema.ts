import * as yup from "yup";

const invalidEmailMessage = "Por favor, digite um email válido";
const requiredEmailMessage = "Requer um email";

const minimumPasswordLength = 8;
const shortPasswordMessage = `Requer uma senha de no mínimo ${minimumPasswordLength} caracteres`;

const maximumPasswordLength = 24;
const longPasswordMessage = `Requer uma senha de no máximo ${maximumPasswordLength} caracteres`;

const requiredPasswordMessage = "Requer uma senha";

// const passwordPatternRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,24}$/;
// const passwordNotAppliesRulesMessage = "A senha deve conter ao menos uma letra maiúscula, uma minúscula, e um número"

export const loginSchema = yup.object().shape({
  email: 
    yup.string()
    .trim()
    .email(invalidEmailMessage)
    .required(requiredEmailMessage),

  password:    
    yup.string()
    .trim()
    .min(minimumPasswordLength, shortPasswordMessage)
    .max(maximumPasswordLength, longPasswordMessage)
    // .matches(passwordPatternRegex, passwordNotAppliesRulesMessage)
    .required(requiredPasswordMessage),
})