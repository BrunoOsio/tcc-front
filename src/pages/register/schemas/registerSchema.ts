import * as yup from "yup";

const requiredNameMessage = "Requer um nome";

const minimumNameLength = 4;
const shortNameMessage = `Requer um nome de no mínimo ${minimumNameLength} caracteres`;

const maximumNameLength = 60;
const longNameMessage = `Requer um nome de no máximo ${maximumNameLength} caracteres`;

const invalidEmailMessage = "Por favor, digite um email válido";
const requiredEmailMessage = "Requer um email";

const minimumPasswordLength = 8;
const shortPasswordMessage = `Requer uma senha de no mínimo ${minimumPasswordLength} caracteres`;

const maximumPasswordLength = 24;
const longPasswordMessage = `Requer uma senha de no máximo ${maximumPasswordLength} caracteres`;

const requiredPasswordMessage = "Requer uma senha";

const passwordPatternRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,24}$/;
const passwordNotAppliesRulesMessage = "A senha deve conter ao menos uma letra maiúscula, uma minúscula, e um número";

const passwordsMustMatchMessage = "As senhas precisam ser iguais";

const requiredConfirmPasswordMessage = "Requer a confirmação da senha";


export const registerSchema = yup.object().shape({
  name:
    yup.string()
    .trim()
    .min(minimumNameLength, shortNameMessage)
    .max(maximumNameLength, longNameMessage)
    .required(requiredNameMessage),

  email: 
    yup.string()
    .email(invalidEmailMessage)
    .required(requiredEmailMessage),

  password:    
    yup.string()
    .trim()
    .min(minimumPasswordLength, shortPasswordMessage)
    .max(maximumPasswordLength, longPasswordMessage)
    .matches(passwordPatternRegex, passwordNotAppliesRulesMessage)
    .required(requiredPasswordMessage),

  confirmPassword: 
    yup.string()
    .trim()
    .oneOf([yup.ref("password"), null], passwordsMustMatchMessage)
    .required(requiredConfirmPasswordMessage),
})