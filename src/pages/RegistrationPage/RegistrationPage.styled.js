import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import useWindowDimensions from 'hooks/useWindowDimensions';

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

  @media screen and (min-width: 1440px) {
    padding-top: 444px;
  }
`;

export const Img = styled.img`
  width: 285px;
  height: 250px;

  @media screen and (min-width: 768px) {
    width: 409px;
    height: 359px;
  }

  @media screen and (min-width: 1440px) {
    position: absolute;
    z-index: 1;
    top: 115px;
    left: 7.8%;
    width: 532px;
    height: 468px;
  }
  @media screen and (min-width: 1920px) {
    left: 15%;
  }
`;

export const BottomWrap = styled.div`
  clip-path: polygon(35% 10%, 65% 10%, 100% 0, 100% 100%, 0 100%, 0 0);
  display: flex;
  justify-content: center;
  margin-top: -15px;
  background-color: #1e1f28;
  width: 100%;
  height: ${() => {
    const { height } = useWindowDimensions();
    return `${height - 322}px`;
  }};

  @media screen and (min-width: 768px) {
    height: ${() => {
      const { height } = useWindowDimensions();
      return `${height - 440}px`;
    }};
  }

  @media screen and (min-width: 1440px) {
    height: ${() => {
      const { height } = useWindowDimensions();
      return `${height - 430}px`;
    }};
  }
`;

export const LinkWrap = styled.div`
  position: absolute;
  top: 673px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    top: 942px;
  }

  @media screen and (min-width: 1440px) {
    top: 624px;
    right: calc(12.5% + 250px);
    transform: translateX(50%);
  }
  
  @media screen and (min-width: 1920px) {
    right: calc(18% + 250px);
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
  background-color: #fafafa11;
  :hover,
  :focus {
    background-color: #fafafa33;
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
