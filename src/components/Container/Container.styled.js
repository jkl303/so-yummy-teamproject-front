import styled from 'styled-components';
import spinachMob from 'images/mobile/spinach-bottom-left375.png';
import spinachTab from 'images/tablet/spinach-bottom-left768.png';
import spinachDesk from 'images/desktop/spinach-bottom-left1440.png';
import rectGreenMob from 'images/mobile/rectGreenMob.png';
import rectBlackMob from 'images/mobile/rectBlackMob.png';
import rectGreenTab from 'images/tablet/rectGreenTab.png';
import rectBlackTab from 'images/tablet/rectBlackTab.png';
import rectGreenDesk from 'images/desktop/rectGreenDesk.png';
import rectBlackDesk from 'images/desktop/rectBlackDesk.png';

export const ContainerWrap = styled.div`
  max-width: 375px;
  margin: 0 auto;
  outline: solid green;
  background-color: #ececec;
  background-image: url(${rectGreenMob}), url(${rectBlackMob}),
    url(${rectGreenMob}), url(${spinachMob});
  background-position: top 76px left 120px, top 141.5px left 247px,
    top 108.5px right 15.5px, bottom -290px left;
  background-size: 8px 8px, 6px 6px, 8px 8px, contain;
  filter: blur(4.5px), 0;
  background-repeat: no-repeat;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    background-image: url(${rectGreenTab}), url(${rectBlackTab}),
      url(${rectGreenTab}), url(${spinachTab});
    background-position: top 85px left 219px, top 155px left 437px,
      top 98px right 23.4px, bottom -450px left;
    background-size: 14px 14px, 12px 12px, 14px 14px, contain;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    background-image: url(${rectGreenDesk}), url(${rectBlackDesk}),
      url(${rectGreenDesk}), url(${spinachDesk});
    background-position: top 116px left 328px, top 199px left 807px,
      top 129px right 171.4px, bottom -415px left;
    background-size: 14px 14px, 12px 12px, 14px 14px, contain;
  } ;
`;

export const ContainerComponent = styled.div`
  max-width: 375px;
  margin: 0 auto;
  padding: 0 16px;
  outline: solid red;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 0 100px;
  } ;
`;

export const TitlePage = styled.h2`
  margin: 0;
  padding-top: 114px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;
  color: #001833;

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }

  @media screen and (min-width: 768px) {
    font-size: 44px;
  } ;
`;
