import styled, { keyframes } from 'styled-components';
import { ReactComponent as ArrowRight } from '../../../images/svg/arrow-right.svg';

const slideDown = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
`;

export const UserWrap = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const UserBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: 28px;
  position: static;

  @media screen and (min-width: 768px) {
    margin-right: 54px;
  }
  @media screen and (min-width: 1440px) {
    margin-right: 0px;
  }
`;

export const UserAvatar = styled.img`
  display: inline-block;
  background-color: #8baa36;
  border-radius: 50%;
  width: 34px;
  height: 34px;
  margin-right: 14px;
  object-fit: cover;
  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;

export const UserName = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: #22252a;
`;

export const Wrap = styled.div`
  background-color: #fafafa;
  position: absolute;
  top: 80px;
  width: 177px;
  height: 134px;
  border-style: none;
  border-radius: 8px;
  animation-name: ${slideDown};
  animation-duration: 700ms;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
`;

export const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 141px;
  height: 43px;
  padding: 0;
  margin: 18px;
  border: none;
  background-color: transparent;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #23262a;
  line-height: 1.6;
  cursor: pointer;
`;

export const ButtonLogout = styled.button`
  display: inline-flex;
  align-items: center;
  border: 0;
  background-color: #8baa36;
  border-radius: 18px 44px;
  color: #fafafa;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  line-height: inherit;
  height: 43px;
  width: 141px;
  margin-left: 18px;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
`;

export const ArrowIcon = styled(ArrowRight)`
  margin-left: 6px;
`;
