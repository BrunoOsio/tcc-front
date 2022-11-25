import styled from "styled-components";
import { colors } from "../../shared/globalStyles/globalValues";

export type BodyProps = {
  listSize: number
}

export const Container = styled.section`
  width: 100vw;
  margin: 0 auto;
  overflow-x: hidden;
`;

export const SearchBarGroup = styled.article`
  display: flex;
  flex-direction: column;
  background-color: ${colors.darkBlue};
  background: linear-gradient(180deg, rgba(42,115,255,1) 23%, rgba(87,147,255,1) 69%);
  width: 100%;
  transition: all .1s ease-in-out;

  &:hover {
    transform: scale(1.005);
  }
`;

export const SearchBarContainer = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  padding: 20px 0px;
  transition: all .1s ease-in-out;

  &:hover {
    box-shadow: 0px 21px 45px -29px rgba(0,0,0,0.40);
  }

  span {
    display: flex;
    align-items: center;
    align-content: center;
    font-size: 1.7rem;
    color: ${colors.white};
  }

  .search {
    position: relative;
    left: 40px;
  }

  .filter {
    position: relative;
    left: -40px;
    cursor: pointer;
  }
`;

export const SearchBar = styled.input`
  width: 100%;
  margin: 0 auto;
  outline: none;
  border: none;
  background-color: inherit;
  font-size: 1.6rem;
  padding: 10px 90px;
  color: ${colors.white};

  &::placeholder {
    color: ${colors.lightGreyBackgroundAddButton};
    font-size: 1.2rem;
  }

  &:hover {
    .group {
      border: 3px solid black;
    }
  }
`;

export const Body = styled.div<BodyProps>`
  width: 75%;
  margin: 30px auto 0px auto;

  display: grid;
  grid-template-columns: repeat(4, auto);

  justify-content: center;
  align-items: center;
  place-items: center;

  place-content: center;

  gap: 10px;
  gap: ${({listSize}) => listSize === 0 && "0px"};
`;

export const NoTeamsGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: 160px;
  color: ${colors.greyScrollbar};
  .icon {
    font-size: 1.6rem;
  }
`;