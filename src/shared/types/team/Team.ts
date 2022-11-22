import { Area, Modality, User } from "..";

export type Team = {
  id: number;
  name: string;
  modality: Modality;
  number: number;
  //Photo;
  areas: Area[];
  //leader: User;
  members: User[];
  joinRequests: User[];
}