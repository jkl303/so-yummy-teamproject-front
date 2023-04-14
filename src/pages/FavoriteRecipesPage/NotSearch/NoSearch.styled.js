import styled from 'styled-components';

export const ContainerFavorite = styled.div`
  margin: 0 auto;
  width: 343px;

  @media (min-width: 768px) {
    width: 704px;
  }
  @media (min-width: 1440px) {
    width: 1240px;
  }
`;

export const WrapperNotSearch = styled.div`
  padding: 200px 0px;
  text-align: center;
  @media (min-width: 768px) {
    padding: 300px 0px;
  }
  @media (min-width: 1440px) {
    padding: 200px 0px;
  }
`;

export const ImgNotSearch = styled.img`
  @media (min-width: 768px) {
    width: 400px;
  }
  @media (min-width: 1440px) {
    width: 600px;
    display: inline-block;
  }
`;
export const NotSearchText = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;
  color: #000000;
  opacity: 0.5;
  margin-top: 30px;

  @media (min-width: 768px) {
    font-size: 34px;
  }
  @media (min-width: 1440px) {
    font-weight: 600;
    font-size: 50px;
  }
`;
