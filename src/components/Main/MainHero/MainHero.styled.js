import styled from 'styled-components';
import { Link } from 'react-router-dom';
import spinachTop from 'images/mobile/spinach-top375.png';
import spinachTopTablet from 'images/tablet/spinach-top768.png';
import spinachTopDesk from 'images/desktop/spinach-top1440.png';
import spinach from 'images/mobile/spinach-leaves-main375.png';
import spinachTablet from 'images/tablet/spinach-leaves-main768.png';
import spinachDesk from 'images/desktop/spinach-leaves-main1440.png';
import arrow from 'images/tablet/arrow-main.png';
import { mediaQueries } from 'style/mediaQueries';

export const HeroWrap = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  max-width: 375px;
  padding: 132px 27px 147px;
  align-items: center;
  overflow: hidden;

  background-image: url(${spinach});
  background-position: 100%;
  background-repeat: no-repeat;
  background-size: contain;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    max-width: 768px;
    padding: 204px 10px 195px 32px;
    background-image: url(${spinachTablet});
  }
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    gap: 73px;
    padding: 226px 184px 267px 100px;
    background-image: url(${spinachDesk});
  }
`;

export const BgLeaveTop = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  z-index: -2;
  width: 40px;
  height: 184px;
  background-image: url(${spinachTop});
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (min-width: 768px) {
    top: 0;
    background-image: url(${spinachTopTablet});
    width: 60px;
    height: 315px;
  }
  @media screen and (min-width: 1440px) {
    background-image: url(${spinachTopDesk});
    width: 130px;
    height: 474px;
  }
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleStyled = styled.span`
  color: var(--accent);
`;

export const HeroTitle = styled.h1`
  font-size: 60px;
  line-height: 60px;
  letter-spacing: -0.005em;
  font-weight: 400;
  color: ${({ theme: { colors } }) => colors.title};
  margin-bottom: 14px;

  ${mediaQueries('tablet')` 
  font-size: 72px;
    line-height: 72px;
    margin-bottom: 24px;`}

  ${mediaQueries('desktop')`
     font-size: 100px;
    line-height: 100px;
    margin-bottom: 14px;`}
`;

export const HeroText = styled.p`
  text-align: center;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 44px;
  width: 248px;

  ${mediaQueries('tablet')`
  width: 340px;
   text-align: left;`}

  ${mediaQueries('desktop')`
   font-size: 18px;
   width: 465px;
    line-height: 24px;`}
`;

export const ImageWrap = styled.div`
  position: relative;
  width: 320px;

  ${mediaQueries('tablet')`
  width: 378px;`}

  ${mediaQueries('desktop')`
  width: 578px;
   `}
`;

export const ImageStyled = styled.img`
  ${mediaQueries('tablet')`
  position: absolute;
  top: -140px;
  right: 0;`}

  ${mediaQueries('desktop')`
  top: -260px;
  right: 0;
   `}
`;

export const DescrWrap = styled.div`
  position: absolute;
  top: 113px;
  right: 5px;

  width: 225px;
  height: 92px;
  padding: 8px;
  border-radius: 8px;
  color: ${({ theme: { colors } }) => colors.subtitle};
  background-color: ${({ theme: { colors } }) => colors.bgModal};

  ${mediaQueries('tablet')`
   width: 261px;
  height: 100px;
  padding: 12px;
  top: 70px;
  right: 32px;`}

  ${mediaQueries('desktop')`
   width: 298px;
  height: 114px;
  padding: 16px;
  top: 75px;
  right: -60px;
   `}
`;

export const DescrAccent = styled.span`
  color: var(--accent);
`;

export const Description = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.24px;

  ${mediaQueries('tablet')`
  font-size: 14px;`}

  ${mediaQueries('desktop')`
   line-height: 20px;
   `}
`;

export const LinkToRecipes = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 0.2px;
`;

export const ArrowBox = styled.div`
  display: none;
  width: 190px;
  height: 80px;
  background-image: url(${arrow});

  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (min-width: 768px) {
    display: block;
    background-position: 30px;
    transform: rotate(5deg);
  }

  @media screen and (min-width: 1440px) {
    width: 220px;
    height: 100px;
    background-position: 20px;
  }
`;

export const BgElement = styled.div`
  position: absolute;
  z-index: -1;
  left: 70%;
  bottom: 10%;
  background-color: var(--bg-accent);
  width: 506px;
  height: 542px;
  border-bottom-left-radius: 10%;
  transform: rotate(32deg);

  ${mediaQueries('tablet')`
  bottom: 0;
   width: 753px;
    height: 730px;
    transform: skewX(-5deg) rotate(27deg);`}

  ${mediaQueries('desktop')`
  left: 60%;
  bottom: 15%;
   width: 941px;
    height: 912px;
    border-bottom-left-radius: 200px;
    transform: skewX(-25deg) rotate(3deg);`}
`;
