import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as SvgLogo } from '../../images/svg/logo.svg';
import spinachMob from 'images/mobile/spinach-bottom-right375.png';
import spinachTab from 'images/tablet/spinach-bottom-right768.png';
import spinachDesk from 'images/desktop/spinach-bottom-right1440.png';

export const FooterComponent = styled.footer`
  z-index: 10;
  margin-top: auto;
  padding-top: 28px;
  font-family: 'Poppins';
  font-style: normal;
  background: #22252a;
  @media screen and (min-width: 768px) {
    padding-top: 50px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 64px;
  } ;
`;

export const Div = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 175px;
    margin-bottom: 40.5px;
  } ;
`;

export const Wrap = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 175px;
    margin-bottom: 72px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 0;
  } ;
`;

export const FooterWrap = styled.div`
  @media screen and (min-width: 768px) {
   display: flex;
   flex-direction: column;
  justify-content: flex-start;
  align-items: center;
 
`;

export const LogoWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-bottom: 32px;
  @media screen and (min-width: 768px) {
    justify-content: flex-start;
    gap: 12px;
    margin-bottom: 24px;
    @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const LogoLink = styled(NavLink)`
  cursor: pointer;
`;

export const Logo = styled(SvgLogo)`
  width: 32px;
  height: 32px;
`;

export const Link = styled(NavLink)`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 1;
  letter-spacing: 0.015em;
  color: #fafafa;
  cursor: pointer;
  &:focus,
  &:hover {
    color: #8baa36;
  }
`;

export const Copyright = styled.div`
  display: flex;
  justify-content: center;
  gap: 14px;
  padding-top: 28px;
  padding-bottom: 28px;
  font-family: 'Poppins';
  font-style: normal;
  font-size: 10px;
  line-height: 1;
  letter-spacing: -0.01em;
  color: #22252a;
  background-color: #ececec;
  background-image: url(${spinachMob});
  background-position: 100%;
  background-repeat: no-repeat;
  background-position-y: bottom;

  @media screen and (min-width: 768px) {
    padding-top: 32px;
    padding-bottom: 32px;
    gap: 28px;
    font-size: 14px;
    background-image: url(${spinachTab});
  }

  @media screen and (min-width: 1440px) {
    padding-top: 50px;
    padding-bottom: 50px;
    gap: 40px;
    background-image: url(${spinachDesk});
  }
`;

export const CopyrightText = styled.p`
  margin: 0;
  font-weight: 500;
`;

export const CopyrightText2 = styled.p`
  margin: 0;
  font-weight: 400;
`;
