import styled from 'styled-components';

export const WrapperTitle = styled.div`
  max-width: 345px;
  margin-top: 70px;
  margin-bottom: 50px;
  padding-top: 50px;

  position: relative;
  


  @media screen and (min-width: 768px) {
    max-width: 713px;
    margin-top: 72px;
    margin-top: 100px;
    margin-bottom: 100px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1240px;
    margin-top: 110px;
  }
`;

export const Title = styled.h2`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.02em;
  @media screen and (max-width: 767px) {
    font-size: 28px;
  }
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 44px;
  }
`;

export const Img = styled.div`
  position: absolute;
  background: ${({ theme: { colors } }) => colors.txt};
  border-radius: 3px;
  transform: rotate(-25deg);
  @media screen and (max-width: 767px) {
    width: 6px;
    height: 6px;
    left: 232px;
    bottom: 0px;
  }
  @media screen and (min-width: 768px) {
    left: 405px;
    bottom: 0px;
    width: 12px;
    height: 12px;
  }
  @media screen and (min-width: 1440px) {
    left: 707px;
    bottom: 0px;
  }
`;

export const ImgR = styled.div`
  position: absolute;
  background: #8baa36;
  border-radius: 3px;
  transform: rotate(-25deg);
  @media screen and (max-width: 767px) {
    width: 8px;
    height: 8px;
    left: 334px;
    bottom: 22px;
  }
  @media screen and (min-width: 768px) {
    left: 694px;
    bottom: 39px;
    width: 14px;
    height: 14px;
  }
  @media screen and (min-width: 1440px) {
    left: 1150px;
    bottom: 65px;
  }
`;

export const ImgL = styled.div`
  position: absolute;
  background: #8baa36;
  border-radius: 3px;
  transform: rotate(-25deg);
  @media screen and (max-width: 767px) {
    width: 8px;
    height: 8px;
    left: 105px;
    top: 0px;
  }
  @media screen and (min-width: 768px) {
    left: 187px;
    top: 0px;
    width: 14px;
    height: 14px;
  }
  @media screen and (min-width: 1440px) {
    left: 228px;
    top: 0px;
  }
`;
