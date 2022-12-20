import { User } from "../user/User";
import { NonTechnicalSpecialization } from "./specialization/base/NonTechnicalSpecialization";
import { TechnicalSpecialization } from "./specialization/base/TechnicalSpecialization";

export type Area = {
  id: number;
  name: string;
  specialization: TechnicalSpecialization | NonTechnicalSpecialization;
  leader: User;
}