import styled from 'styled-components';
import { HiMenuAlt2 } from 'react-icons/hi';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin-left: 12px;

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const IconOpen = styled(HiMenuAlt2)`
  color: #22252a;
  width: 40px;
  height: 40px;

  @media screen and (min-width: 768px) {
    .svg {
      width: 24px;
      height: 16px;
    }
  }
`;
