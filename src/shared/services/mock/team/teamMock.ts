import { Team } from "../../../types/team/Team";
import { areaMock } from "../area/areaMock";
import { modalityMock } from "../modality/modalityMock";
import { userMock } from "../user/userMock";
import { teamPhotoMock } from "./teamPhoto/teamPhotoMock";

export const teamMock: Team[] = [
  {
    id: 1,
    name: "The Brazilian Trail Blazers",
    number: 1772,
    photo: teamPhotoMock[0],
    modality: modalityMock[0],
    areas: [
      areaMock[0]
    ],
    joinRequests: [
      userMock[3],
      userMock[4]
    ],
    leader: userMock[0]
  },
];