import { storage } from "../../globalStyles/globalValues"
import { SaveLocalStorageDto } from "./SaveLocalStorageDto"

export const saveLocalStorage = (localStorageDto: SaveLocalStorageDto) => {
  const {id, teamsIds} = localStorageDto;
  clearLocalStorage();
  localStorage.setItem(storage.id, id);
  localStorage.setItem(storage.teamsIds, teamsIds);
}

export const clearLocalStorage = () => {
  localStorage.clear();
}

export const addLocalStorageNewTeamId = (newTeamId: number) => {
  const teamsIds = getStoredTeamsAsIdsList();

  console.log("stored", teamsIds);

  teamsIds.push(newTeamId);
  const formattedTeamsIds = mapToString(teamsIds);

  saveLocalStorage({id: String(getStoredId()), teamsIds: formattedTeamsIds});

  getStoredValues();
}

export const getStoredId = (): number => {
  return Number(localStorage.getItem(storage.id))
}

export const getStoredTeamIds = (): string | null => {
  return localStorage.getItem(storage.teamsIds);
}

export const mapToString = (teamsIdsNumberList: number[]): string => {
  return teamsIdsNumberList.join(" ");
}

export const mapRawTeamsIdsToString = (rawTeamsIds: number[]): string => {
  return rawTeamsIds
    .map(id => String(id))
    .join(" ");
}

export const getStoredTeamsAsIdsList = (): number[] => {
  const teamsIds = localStorage.getItem(storage.teamsIds)
  let teamsIdsAsList: number[] = [];

  if (teamsIds) {
    teamsIdsAsList = teamsIds.split(" ").map(string => Number(string));
  }

  return teamsIdsAsList;
}

export const getStoredValues = () => {
  console.log(`ID: ${getStoredId()}\n TEAMS_LIST: ${getStoredTeamsAsIdsList()}`)
}

export const isLoggedIn = (): boolean => {
  return getStoredId() != 0;
}

export const isUserOnTeam = (requestedTeamIdRoute: number): boolean => {
  const teamsIds = getStoredTeamsAsIdsList();
  
  const isUserOnTeam = teamsIds.some(id => id === requestedTeamIdRoute);
  console.log(isUserOnTeam)
  return isUserOnTeam;
}