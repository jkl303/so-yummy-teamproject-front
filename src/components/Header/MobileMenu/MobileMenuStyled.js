import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';
import img from 'images/mobile/spinach-menu375.png';
import imgTab from 'images/tablet/spinach-menu768.png';
import { CgClose } from 'react-icons/cg';

const slideDown = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
`;

export const Wrap = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: #ececec;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: bottom right;
  animation-name: ${slideDown};
  animation-duration: 500ms;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  z-index: 101;

  @media screen and (min-width: 768px) {
    background-image: url(${imgTab});
  }
`;

export const LogoLink = styled(NavLink)`
  position: absolute;
  top: 18px;
  left: 16px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    top: 18px;
    left: 32px;
  }
`;

export const Button = styled.button`
  position: absolute;
  z-index: 10;
  top: 31.33px;
  top: 15px;
  right: 25px;

  @media screen and (min-width: 768px) {
    top: 23.33px;
    right: 31.33px;
  }

  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const IconClose = styled(CgClose)`
  color: #22252a;
  width: 50px;
  height: 50px;
  padding: 10px;
`;

export const SwitchWrap = styled.div`
  position: absolute;
  bottom: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
