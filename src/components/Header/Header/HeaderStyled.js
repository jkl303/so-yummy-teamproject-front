import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as SvgLogo } from 'images/svg/logo.svg';

export const HeaderBlock = styled.header`
  /* position: absolute; */
  width: 100%;
  z-index: 10;
`;

export const Container = styled.div`
  max-width: 375px;
  padding-left: 16px;
  padding-right: 16px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding-left: 100px;
    padding-right: 100px;
  }
`;

export const HeaderElement = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: auto;
  padding-top: 21px;

  @media screen and (min-width: 768px) {
    padding-top: 19px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 14px;
    justify-content: start;
  }
`;

export const LogoWrap = styled.div`
  @media screen and (min-width: 1440px) {
    margin-right: 187px;
  }
`;

export const LogoLink = styled(NavLink)`
  cursor: pointer;
`;

export const Logo = styled(SvgLogo)`
  width: 40px;
  height: 40px;

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;
