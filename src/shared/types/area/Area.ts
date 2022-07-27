import { AreaSpecialization, Column, User } from "..";

export type Area = {
  id: number;
  title: number;
  specialization: AreaSpecialization;
  leader: User;
  columns: Column[];
}