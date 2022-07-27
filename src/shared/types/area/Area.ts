import { AreaSpecialization, Column, User } from "..";

export type Area = {
  id: number;
  title: string;
  specialization: AreaSpecialization;
  leader: User;
  columns: Column[];
}