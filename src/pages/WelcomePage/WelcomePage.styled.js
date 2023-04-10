import styled from 'styled-components';
import useWindowDimensions from 'hooks/useWindowDimensions';
import { ReactComponent as SvgLogo } from 'images/svg/logo.svg';
import bgImg375 from 'images/mobile/start-bg375.jpg';
import bgImg768 from 'images/tablet/start-bg768.jpg';
import bgImg1440 from 'images/desktop/start-bg1440.jpg';

export const WelcomWrapper = styled.div`
  width: 100%;
  min-height: 360px;
  height: ${() => {
    const { height } = useWindowDimensions();
    return `${height}px`;
  }};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${bgImg375});
  background-size: cover;
  color: #fafafa;

  @media screen and (min-width: 768px) {
    background-image: url(${bgImg768});
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${bgImg1440});
  }
`;

export const Logo = styled(SvgLogo)`
  width: 54px;
  height: 54px;
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    width: 68px;
    height: 68px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 14px;
  font-size: 24px;
  font-weight: 600;
  line-height: 1;

  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`;

export const Text = styled.p`
  display: inline-block;
  width: 304px;
  margin-bottom: 44px;
  text-align: center;
  font-size: 14px;
  line-height: 1.29;

  @media screen and (min-width: 768px) {
    width: 492px; //500
    margin-bottom: 40px;
    font-size: 18px;
  }

  @media screen and (min-width: 1440px) {
    width: 532px; //540
  }
`;