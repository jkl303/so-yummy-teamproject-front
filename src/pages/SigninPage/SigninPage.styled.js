import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

export const PageWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 87px;
  background-color: #fafafa;

  @media screen and (min-width: 768px) {
    padding-top: 96px;
  }
`;

export const Img = styled.img`
  width: 285px;
  height: 250px;

  @media screen and (min-width: 768px) {
    width: 409px;
    height: 359px;
  }
`;

export const BottomWrap = styled.div`
  clip-path: polygon(35% 10%, 65% 10%, 100% 0, 100% 100%, 0 100%, 0 0);
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: -15px;
  padding-top: 316px;
  padding-bottom: 142px;
  background-color: #1e1f28;

  @media screen and (min-width: 768px) {
    padding-top: 440px;
    padding-bottom: 102px;
  }
`;

export const IconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  margin-right: 24px;
  border-radius: 4px;
  background-color: #fafafa33;
  :hover,
  :focus {
    background-color: #fafafa11;
  }

  @media screen and (min-width: 768px) {
    width: 42px;
    height: 42px;
  }
`;

export const GoogleIcon = styled(FcGoogle)`
  width: 24px;
  height: 24px;

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

export const RegLink = styled(NavLink)`
  color: #fafafa;
  font-size: 14px;
  line-height: 21px;
  :hover,
  :focus {
    color: #8baa36;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;