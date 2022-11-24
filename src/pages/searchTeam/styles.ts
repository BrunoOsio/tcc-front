import styled from "styled-components";
import { colors } from "../../shared/globalStyles/globalValues";

export type BodyProps = {
  listSize: number
}

export const Container = styled.section`
  width: 100vw;
  margin: 0 auto;
`;

export const SearchBarGroup = styled.article`
  display: flex;
  flex-direction: column;
  background-color: ${colors.darkBlue};
  width: 100%;
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

  column-gap: 10px;
  row-gap: 10px;


`;