import { Team } from "../team/Team";

export type User = {
  id: number;
  name: string;
  //photo?: UserPhoto; //TODO: how to do that
  email: string;
  password: string;
  teams: Team[];
  teamsLeadered: Team[];
  joinRequests: Team[]
}