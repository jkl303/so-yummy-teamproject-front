import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { mediaQueries } from 'style/mediaQueries';
import { ReactComponent as LogoFooter } from 'images/svg/logo-footer.svg';
import spinachMob from 'images/mobile/spinach-bottom-right375.png';
import spinachTab from 'images/tablet/spinach-bottom-right768.png';
import spinachDesk from 'images/desktop/spinach-bottom-right1440.png';

export const FooterComponent = styled.footer`
  margin: 0 auto;
  min-width: 375px;

  background: ${({ theme: { colors } }) => colors.bgFooter};

  ${mediaQueries('tablet')`
     min-width: 768px;`};

  ${mediaQueries('desktop')`
     min-width: 1440px;
     
     `};
`;

export const FooterMainBlock = styled.div`
  padding-top: 28px;

  ${mediaQueries('tablet')`
 padding-top: 50px;
   `};

  ${mediaQueries('desktop')`
    padding-top: 64px;
    padding-left: 100px;
    padding-right: 100px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 40.5px;`};
`;

export const FooterMainBlockItem = styled.div`
  ${mediaQueries('tablet')`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 32px;
    padding-right: 94px;
    margin-bottom: 72px;`};

  ${mediaQueries('desktop')`
    padding-left: 0;
    padding-right: 0;
    gap: 145px;
    margin-bottom: 0;`};
`;

export const DescroptionWrap = styled.div`
  ${mediaQueries('tablet')`
  display: flex;
  flex-direction: column;`};
`;

export const LogoWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-bottom: 32px;

  ${mediaQueries('tablet')`
    justify-content: flex-start;
    gap: 12px;
    margin-bottom: 24px;`};

  ${mediaQueries('desktop')`
    margin-bottom: 40;`};
`;

export const LogoLink = styled(NavLink)`
  cursor: pointer;
`;

export const Logo = styled(LogoFooter)`
  width: 32px;
  height: 32px;
  ${mediaQueries('tablet')`
  width: 44px;
  height: 44px;`};
`;

export const Link = styled(NavLink)`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 1;
  letter-spacing: 0.015em;
  color: var(--txt-dark);
  cursor: pointer;
  &:focus,
  &:hover {
    color: ${({ theme: { colors } }) => colors.btnFoot};
  }
  ${mediaQueries('tablet')`
  font-size: 28px;`};
`;

export const Copyright = styled.div`
  padding-top: 28px;
  padding-bottom: 28px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 1;
  letter-spacing: -0.01em;
  text-align: center;
color: ${({ theme: { colors } }) => colors.txtCopyright};
  background: url(${spinachMob}) 100% no-repeat;
  background-color: ${({ theme: { colors } }) => colors.bg};
  background-position-y: bottom;

  span:first-child {
    margin-right: 14px;
    font-weight: 500;
  };

  @media screen and (min-width: 768px) {
    padding-top: 32px;
    padding-bottom: 32px;
    font-size: 14px;
    background-image: url(${spinachTab});

    span:first-child {
      margin-right: 28px;
    }
  }

  @media screen and (min-width: 1440px) {
     padding-top: 50px;
    padding-bottom: 50px;
    background-image: url(${spinachDesk});

    span:first-child {
      margin-right: 40px;
  };

     span {
    opacity: 0.5;
  };
  

`;

// color: ${ ({ theme: { colors } }) => colors.txt };
//    span {
//     opacity: 0.5;
//   };
