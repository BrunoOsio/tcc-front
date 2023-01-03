import { storage } from "../../globalStyles/globalValues"
import { SaveLocalStorageDto } from "./SaveLocalStorageDto"

export const saveLocalStorage = (localStorageDto: SaveLocalStorageDto) => {
  const {id, name, teamsIds, leaderedTeamsIds} = localStorageDto;

  clearLocalStorage();

  localStorage.setItem(storage.id, id);
  localStorage.setItem(storage.name, name);
  localStorage.setItem(storage.teamsIds, teamsIds);
  localStorage.setItem(storage.leaderedTeamsIds, leaderedTeamsIds);
}

export const clearLocalStorage = () => {
  localStorage.clear();
}

export const addLocalStorageWhenCreatedTeam = (newTeamId: number) => {
  const teamsIds = getStoredTeamsAsIdsList();
  const leaderedTeamsIds = getStoredLeaderedTeamsAsIdsList();

  teamsIds.push(newTeamId);
  leaderedTeamsIds.push(newTeamId);

  const formattedTeamsIds = mapToString(teamsIds);
  const formattedLeaderedTeamsIds = mapToString(teamsIds);

  saveLocalStorage({
    id: String(getStoredId()), 
    name: getStoredName(),
    teamsIds: formattedTeamsIds,
    leaderedTeamsIds: formattedLeaderedTeamsIds
  });
}

export const addLocalStorageWhenEnteredTeam = (newLeaderedTeamId: number) => {
  const teamsIds = getStoredTeamsAsIdsList();

  teamsIds.push(newLeaderedTeamId);
  const formattedTeamsIds = mapToString(teamsIds);

  saveLocalStorage({
    id: String(getStoredId()),
    name: getStoredName(),
    teamsIds: formattedTeamsIds,
    leaderedTeamsIds: getStoredLeaderedTeamIds() || ""
  });
}

export const getStoredId = (): number => {
  return Number(localStorage.getItem(storage.id))
}

export const getStoredName = (): string => {
  return String(localStorage.getItem(storage.name));
}

export const getStoredTeamIds = (): string | null => {
  return localStorage.getItem(storage.teamsIds);
}

export const getStoredLeaderedTeamIds = (): string | null => {
  return localStorage.getItem(storage.leaderedTeamsIds);
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

export const getStoredLeaderedTeamsAsIdsList = (): number[] => {
  const leaderedTeamsIds = localStorage.getItem(storage.leaderedTeamsIds)
  let leaderedTeamsIdsAsList: number[] = [];

  if (leaderedTeamsIds) {
    leaderedTeamsIdsAsList = leaderedTeamsIds.split(" ").map(string => Number(string));
  }

  return leaderedTeamsIdsAsList;
}


export const getStoredValues = () => {
  console.log(`ID: ${getStoredId()}\n TEAMS_LIST: ${getStoredTeamsAsIdsList()}\n LEADERED_TEAMS_LIST: ${getStoredLeaderedTeamsAsIdsList()}`)
}

export const isLoggedIn = (): boolean => {
  return getStoredId() != 0;
}

export const isUserOnTeam = (requestedTeamIdRoute: number): boolean => {
  const teamsIds = getStoredTeamsAsIdsList();
  
  const isUserOnTeam = teamsIds.some(id => id === requestedTeamIdRoute);

  return isUserOnTeam;
}

export const isUserTeamLeader = (requestedTeamIdRoute: number): boolean => {
  const teamsIds = getStoredLeaderedTeamsAsIdsList();
  
  const isUserTeamLeader = teamsIds.some(id => id === requestedTeamIdRoute);

  return isUserTeamLeader;
}