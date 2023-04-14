import styled from 'styled-components';

export const SectionNotFound = styled.section`
  margin-left: auto;
  margin-right: auto;
  max-width: 375px;
  padding-top: 220px;
  background-color: ${({ theme: { colors } }) => colors.bg};

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`;

export const TitleNotFound = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  font-size: 18px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: ${({ theme: { colors } }) => colors.txt};

  margin-top: 14px;
  margin-bottom: 8px;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 24px;
    margin-top: 32px;
    margin-bottom: 14px;
  }
`;

export const First = styled.div`
  position: absolute;

  width: 8px;
  height: 8px;
  left: 120px;
  top: 79.38px;

  background: #8baa36;
  border-radius: 3px;
  transform: rotate(-25deg);

  @media screen and (min-width: 768px) {
    left: 219px;
    top: 90.92px;
    width: 14px;
    height: 14px;
  }

  @media screen and (min-width: 1440px) {
    left: 328px;
    top: 121.92px;
  }
`;

export const Second = styled.div`
  position: absolute;
  width: 6px;
  height: 6px;
  left: 247px;
  top: 144px;

  background: #22252a;
  border-radius: 3px;
  transform: rotate(-25deg);

  @media screen and (min-width: 768px) {
    width: 12px;
    height: 12px;
    left: 437px;
    top: 160.07px;
  }

  @media screen and (min-width: 1440px) {
    left: 807px;
    top: 204.07px;
  }
`;

export const Third = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  left: 349px;
  top: 111.85px;

  background: #8baa36;
  border-radius: 3px;
  transform: rotate(-25deg);

  @media screen and (min-width: 768px) {
    width: 14px;
    height: 14px;
    left: 726px;
    top: 103.92px;
  }

  @media screen and (min-width: 1440px) {
    left: 1250px;
    top: 134.92px;
  }
`;

export const DescrNotFound = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;

  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;
  text-align: center;
  color: ${({ theme: { colors } }) => colors.txt};
  opacity: 0.5;
  margin-bottom: 100px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 204px;
  }
`;

export const ImgNotFound = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 259px;
  max-height: 170px;

  @media screen and (min-width: 768px) {
    max-width: 498px;
    max-height: 327px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 498px;
    max-height: 331px;
  }
`;
