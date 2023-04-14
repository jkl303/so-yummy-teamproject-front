import styled from 'styled-components';
import { mediaQueries } from 'style/mediaQueries';

export const SectionFavorite = styled.section`
  padding: 114px 0 40px 0;
  ${mediaQueries('tablet')`
    padding: 136px 0px 50px;
  `}
  ${mediaQueries('desktop')`
    padding: 164px 0px 50px;
  `}
`;

export const WrapperSectionTitle = styled.div`
  position: relative;
`;
export const First = styled.div`
  position: absolute;

  width: 8px;
  height: 8px;
  left: 104px;
  top: -27.37px;

  background: #8baa36;
  border-radius: 3px;
  transform: rotate(-25deg);

  @media screen and (min-width: 768px) {
    left: 184px;
    top: -42px;
    width: 14px;
    height: 14px;
  }

  @media screen and (min-width: 1440px) {
    left: 228px;
    top: -29px;
  }
`;

export const Second = styled.div`
  position: absolute;
  width: 6px;
  height: 6px;
  left: 231px;
  top: 27.46px;

  background: ${({ theme: { colors } }) => colors.btn};
  border-radius: 3px;
  transform: rotate(-25deg);

  @media screen and (min-width: 768px) {
    width: 12px;
    height: 12px;
    left: 405px;
    top: 23px;
  }

  @media screen and (min-width: 1440px) {
    left: 707px;
    top: 37px;
  }
`;

export const Third = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  left: 333px;
  top: -5.54px;

  background: #8baa36;
  border-radius: 3px;
  transform: rotate(-25deg);

  @media screen and (min-width: 768px) {
    width: 14px;
    height: 14px;
    left: 694px;
    top: -19.4px;
  }

  @media screen and (min-width: 1440px) {
    left: 1150px;
    top: -15.4px;
  }
`;
export const ContainerFavorite = styled.div`
  margin: 0 auto;
  width: 343px;

  ${mediaQueries('tablet')`
    width: 704px;
  `}
  ${mediaQueries('desktop')`
    width: 1240px;
  `}
`;

export const TitleH1 = styled.h1`
  margin-bottom: 50px;

  /* font-family: 'Poppins';
  font-style: normal; */
  font-weight: 600;
  font-size: 28px;
  line-height: 28px;
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;
  color: ${({ theme: { colors } }) => colors.title};

  ${mediaQueries('tablet')`
    font-size: 32px;
    line-height: 32px;
    margin-bottom: 100px;
    // padding: 72px 0 100px 32px;
  `}
  ${mediaQueries('desktop')`
    font-size: 44px;
    line-height: 44px;
    // padding: 100px 0 100px 100px;
  `}
`;

export const CardWrapper = styled.div`
  /* @media (min-width: 375px) {
    padding: 0 16px;
  }
  @media (min-width: 768px) {
    padding: 0 32px;
  }
  @media (min-width: 1440px) {
    padding: 0 100px;
  } */
`;
