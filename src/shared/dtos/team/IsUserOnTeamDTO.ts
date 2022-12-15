import { User } from "../../types"
import { Team } from "../../types/team/Team"

export type IsUserOnTeamDTO = {
  user: User,
  team: Team
}