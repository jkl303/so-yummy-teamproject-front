import styled from 'styled-components';
import spinachMob from 'images/mobile/spinach-bottom-left375.png';
import spinachTab from 'images/tablet/spinach-bottom-left768.png';
import spinachDesk from 'images/desktop/spinach-bottom-left1440.png';

export const Layout = styled.div`
  flex: 1 1 auto;
  min-width: 375px;
  margin: 0 auto;
  outline: solid green;
  position: relative;
  background-color: ${({ theme: { colors } }) => colors.bg};
  background-image:  url(${spinachMob});
  background-position:bottom left;
  background-size:  contain;
  filter: blur(4.5px), 0;
  background-repeat: no-repeat;

  @media screen and (min-width: 768px) {
    min-width: 768px;
    background-image: url(${spinachTab});
    background-position: bottom left;
    background-size: contain;
  }

  @media screen and (min-width: 1440px) {
    min-width: 1440px;
    background-image: url(${spinachDesk});
    background-position: bottom left;
    background-size: 696px 1032px;
  } ;
`;