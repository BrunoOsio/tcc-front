import { Area, Modality, User } from "..";

export type Team = () => {
  id: number;
  name: string;
  modality: Modality;
  number: number;
  logo: string; //TODO: how to do that
  areas: Area[];
  leader: User;
  joinRequests: User[];
}