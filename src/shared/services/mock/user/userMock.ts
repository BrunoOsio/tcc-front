import { User } from "../../../types";
import { userLoginMock } from "./userLogin/userLoginMock";
import { userPhotoMock } from "./userPhoto/userPhotoMock";

export const userMock: User[] = [
  {
    id: 1, 
    name: "Bruno Osio", 
    photo: userPhotoMock[0],
    loginCredentials: userLoginMock[3]
  },
  {
    id: 2, 
    name: "Gulherme Denck", 
    photo: userPhotoMock[2],
    loginCredentials: userLoginMock[2]
  },
  {
    id: 3, 
    name: "Gregori Nunes", 
    photo: userPhotoMock[3],
    loginCredentials: userLoginMock[0]
  },
  {
    id: 4, 
    name: "Gustavo Teichmann", 
    photo: undefined,
    loginCredentials: userLoginMock[5]
  },
  {
    id: 5, 
    name: "Bruno Ribeiro", 
    photo: userPhotoMock[5],
    loginCredentials: userLoginMock[6]
  },
  {
    id: 6, 
    name: "Pablo Meyer", 
    photo: undefined,
    loginCredentials: userLoginMock[2]
  }
]; 