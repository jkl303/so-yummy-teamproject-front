import styled from 'styled-components';
import spinachMob from 'images/mobile/spinach-bottom-left375.png';
import spinachTab from 'images/tablet/spinach-bottom-left768.png';
import spinachDesk from 'images/desktop/spinach-bottom-left1440.png';

export const Layout = styled.div`
  flex: 1 1 auto;
  min-width: 375px;
  margin: 0 auto;
  position: relative;

  @media screen and (min-width: 768px) {
    min-width: 768px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 1440px;
  }
`;

export const BgElement = styled.div`
  position: absolute;
  bottom: 300px;
  left: 0;
  z-index: -1;
  width: 346px;
  height: 482px;
  background-image: url(${spinachMob});
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (min-width: 768px) {
    bottom: 200px;
    width: 523px;
    height: 746px;
    background-image: url(${spinachTab});
  }

  @media screen and (min-width: 1440px) {
    bottom: 100px;
    width: 658px;
    height: 952px;
    background-image: url(${spinachDesk});
  } ;
`;
