import styled from "styled-components";
import { colors } from "../../shared/globalStyles/globalValues";

type TeamsProps = {
  listSize: number
}

export const Container = styled.main`
  width: 100vw;
  display: flex;
  flex-direction: column;
  `;

export const Header = styled.section`
  background: rgb(42,115,255);
  background: linear-gradient(180deg, rgba(42,115,255,1) 23%, rgba(87,147,255,1) 69%);
  width: 100%;
  height: 230px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  `;

export const UserCard = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -20px;
`;

export const Name = styled.span`
  color: ${colors.white};
  margin-top: 10px;
  font-size: 1.2rem;
`;

const headerOverlayPx = "-50px";
export const Teams = styled.section<TeamsProps>`
  background-color: ${colors.background};
  width: 800px;
  height: 490px;
  margin: 0 auto;
  padding: ${({listSize}) => listSize >= 5 && "100px"};
  padding-bottom: 20px;
  position: relative;
  top: ${headerOverlayPx};
  border-radius: 15px;
  overflow-y: auto;

  ::-webkit-scrollbar-track {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }

  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-columns: ${({listSize}) => listSize == 1 && "none"}; 

  grid-template-rows: ${({listSize}) => listSize > 2 && "repeat(2, 120px)"};

  justify-content: center;
  align-items: center;
  place-items: center;

  place-content: center;
  place-content: ${({listSize}) => listSize >= 5 && "inherit"};
  
  column-gap: ${({listSize}) => listSize ? "50px" : "0px"};
  row-gap: ${({listSize}) => listSize ? "100px" : "0px"};
`;

export const GridWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// export const NewTeamButton = styled.button`
//   font-size: 1.1rem;
//   padding: 5px 20px;
//   outline:none;
//   border: none;
//   background: transparent;
//   border: 3px solid white;
//   position: relative;
//   top: 10px;
//   z-index: 2;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: space-between;
//   background-color: ${colors.darkBlue};
//   border-radius: 10px;
//   column-gap: 5px;
//   transition: all .2s ease-in-out;

//   article {
//     color: white;
//     transition: all .2s ease-in-out;
//   }

//   span {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     font-size: 0.8rem;
//   }

//   &:hover {
//     cursor: pointer;
//     background-color: white;
//     border-color: ${colors.darkBlue};

//     article {
//       color: ${colors.darkBlue};
//     }

//     span {
//       transform: scale(1.2);
//       color: ${colors.darkBlue};
//     }
//   }
// `;

export const ButtonLabel = styled.div`
  font-size: 0.8rem;
`;