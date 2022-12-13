import { NonTechnicalSpecialization } from "../../types/area/specialization/base/NonTechnicalSpecialization";
import { TechnicalSpecialization } from "../../types/area/specialization/base/TechnicalSpecialization";

export type NewAreaDTO = {
  name: string;
  specialization: TechnicalSpecialization | NonTechnicalSpecialization;
}