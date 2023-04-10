import styled from 'styled-components';
import { mediaQueries } from 'style/mediaQueries';
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
  background-image: url(${rectGreenMob}), url(${rectBlackMob}),
    url(${rectGreenMob}), url(${spinachMob});
  background-position: top 12px left 120px, top 78px left 247px,
    top 45px right 15.5px, bottom -280px left;
  background-size: 8px 8px, 6px 6px, 8px 8px, contain;
  filter: blur(4.5px), 0;
  background-repeat: no-repeat;

  ${mediaQueries('tablet')`
     max-width: 768px;
    background-image: url(${rectGreenTab}), url(${rectBlackTab}),
      url(${rectGreenTab}), url(${spinachTab});
    background-position: top 21px left 219px, top 91px left 437px,
      top 34px right 23.4px, bottom -450px left;
    background-size: 14px 14px, 12px 12px, 14px 14px, contain;`};

  ${mediaQueries('desktop')`
    max-width: 1440px;
    background-image: url(${rectGreenDesk}), url(${rectBlackDesk}),
      url(${rectGreenDesk}), url(${spinachDesk});
    background-position: top 56px left 328px, top 139px left 807px,
      top 69px right 171.4px, bottom -415px left;
    background-size: 14px 14px, 12px 12px, 14px 14px, contain;`};
`;

export const ContainerComponent = styled.div`
  max-width: 375px;
  margin: 0 auto;
  padding: 0 16px;
  background-color: ${({ theme: { colors } }) => colors.bg};

  ${mediaQueries('tablet')`
    max-width: 768px;
    padding: 0 32px;`};

  ${mediaQueries('desktop')`
    max-width: 1440px;
    padding: 0 100px;`};
`;

export const TitlePage = styled.h2`
  margin: 0;
  padding-top: 50px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;
  color: ${({ theme: { colors } }) => colors.title};

  ${mediaQueries('tablet')`
    padding-top: 72px;
    font-size: 32px;`};

  ${mediaQueries('desktop')`
    padding-top: 104px;
    font-size: 44px;`};
`;
