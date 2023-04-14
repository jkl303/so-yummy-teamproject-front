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

  ///// !!!!!
  // background: url(${leavesLeftMob}) 100% no-repeat;
  // background-position: 0% 260%;
  // background-clip: padding-box;
  // background-size: auto;
  // position: relative;

  background-color: transparent;

  // &:before {
  //   content: '';
  //   display: block;
  //   position: absolute;
  //   left: 0;
  //   bottom: 0px;

  //   // width: 100%;
  //   // height: 100px;
  //   background: url(${leavesLeftMob}) 100% no-repeat;
  //   background-size: cover;
  //   height: 100%;
  //   width: 100%;
  //   z-index: -1;
  //   @media screen and (min-width: 768px) {
  //     height: 100%;
  //     width: 100%;
  //     background: url(${leavesLeftTab}) 100% no-repeat;
  //   }

  //   @media screen and (min-width: 1440px) {
  //     height: 50%;
  //     width: 48%;
  //     background: url(${leavesLeftDesk}) 100% no-repeat;
  //   }
  // }

  //// !!!!
  // @media screen and (min-width: 768px) {
  //   background: url(${leavesLeftTab}) 100% no-repeat;
  //   background-position: 0% 195%;
  // }
  // @media screen and (min-width: 1440px) {
  //   background: url(${leavesLeftDesk}) 100% no-repeat;
  //   background-position: 0% 375%;
  // }

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

export const ContainerWrapperShopping = styled.div`
  background-color: transparent;
  position: relative;
  min-height: 100px;
  &:before {
    content: '';
    display: block;
    position: absolute;
    left: 0px;
    bottom: -550px;
    width: 100%;
    height: 600px;
    background: url(${leavesLeftDesk}) no-repeat;
    background-size: contain;
    z-index: -1;
    // background-attachment: scroll;
  }
`;
