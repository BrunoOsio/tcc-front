import { useEffect, useState } from "react";
import photoService from "../../services/photo/photoService";
import { Photo } from "../../types";
import { Team } from "../../types/team/Team";
import { Border, Container, Name, PhotoCard } from "./styles";

type TeamPhotoProps = {
  team: Team;
  size: number;
}

const SPACE = " ";
const FIRST_LETTER_INDEX = 0;
const NO_SPACE_BETWEEN_LETTERS = "";
const MAX_INITIALS_LENGTH = 3;

export const TeamPhoto: React.FC<TeamPhotoProps> = ({team, size}) => {

  const getFullname = () => {
    return team.name.toUpperCase();
  }

  return (
    <Border size={size}>
      <Container>
        {team.photo && (<PhotoCard src={team.photo.url}/>)}
        {!team.photo && (<Name size={size}>{getFullname()}</Name>)}
      </Container>
    </Border>
  );
}