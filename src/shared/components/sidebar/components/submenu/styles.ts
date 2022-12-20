import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../../../globalStyles/globalValues";

type Props = {
  isTeam: boolean;
}

export const SidebarLink = styled(Link)<Props>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3.75rem;
    font-size: 1rem;
    padding: 2rem;
    text-decoration: none;
    color: #ffffff;

    &:hover {
        background-color: ${colors.navyBlue};
        background-color: ${({isTeam}) => isTeam && "rgba(255, 100, 100, 0.20)"};
        border-left: 4px solid ${colors.blue};
        border-left: ${({isTeam}) => isTeam && `4px solid ${colors.redSalmon}`};
    }
`;

export const SidebarLabel = styled.span`
    margin-left: 1rem;
`;

export const DropdownLink = styled(Link)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 3.75rem;
    font-size: 1rem;
    padding-left: 3rem;
    text-decoration: none;
    color: #ffffff;
    &:hover {
        background-color: ${colors.blue};
    }
`;