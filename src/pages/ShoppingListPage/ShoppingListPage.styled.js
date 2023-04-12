import styled from 'styled-components';
import { mediaQueries } from 'style/mediaQueries';

import leavesLeftMob from 'images/mobile/spinach-bottom-left375.png';
import leavesLeftTab from 'images/tablet/spinach-bottom-left768.png';
import leavesLeftDesk from 'images/desktop/spinach-bottom-left1440.png';

export const StyledContainer = styled.div`
  width: 100%;
  padding: 0px 8px 0px 8px;

  margin-left: auto;
  margin-right: auto;
  max-width: 375px;

  padding-bottom: 100px;
  background-color: ${({ theme: { colors } }) => colors.bg};

  background: url(${leavesLeftMob}) 100% no-repeat;
  background-position: 0% 260%;
  background-clip: padding-box;
  background-size: auto;

  @media screen and (min-width: 768px) {
    background: url(${leavesLeftTab}) 100% no-repeat;
    background-position: 0% 195%;
  }
  @media screen and (min-width: 1440px) {
    background: url(${leavesLeftDesk}) 100% no-repeat;
    background-position: 0% 375%;
  }

  ${mediaQueries('tablet')`
  padding: 0px 32px 0px 32px;
    max-width: 768px;
    padding-bottom: 200px;
   
  `}
  ${mediaQueries('desktop')`
 padding: 0px 100px 0px 100px;
 max-width:1440px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1440px;
  padding-bottom: 195px;
 

`}
`;
