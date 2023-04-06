import styled from "styled-components";
import { ReactComponent as BurgerMenu } from "../../../images/svg/burgerMenu.svg";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  cursor: pointer;

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const IconOpen = styled(BurgerMenu)`
  width: 40px;
  height: 40px;

  @media screen and (min-width: 768px) {
    .svg {
      width: 24px;
      height: 16px;
    }
  }
`;
