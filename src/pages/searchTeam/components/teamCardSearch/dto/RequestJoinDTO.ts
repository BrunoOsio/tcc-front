import { Team } from "../../../../../shared/types/team/Team";

export type RequestJoinDTO = {
  userId: number;
  team: Team;
}