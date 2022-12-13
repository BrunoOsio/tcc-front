import { NonTechnicalSpecialization } from "./base/NonTechnicalSpecialization";
import { TechnicalSpecialization } from "./base/TechnicalSpecialization";

export type AreaSpecialization = {
  type: TechnicalSpecialization | NonTechnicalSpecialization;
  value: string;
}