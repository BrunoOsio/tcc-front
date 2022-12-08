import { Area, Modality, User } from "..";

export type Team = {
  id: number;
  name: string;
  modality: Modality;
  number: number;
  //Photo;
  areas: Area[];
  leaders: User[];
  members: User[];
  joinRequests: User[];
}