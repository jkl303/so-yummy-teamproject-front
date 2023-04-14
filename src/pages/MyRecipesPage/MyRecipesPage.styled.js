import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  margin: 61px auto 42px;

  @media screen and (max-width: 767px) {
    max-width: 345px;
  }
  @media screen and (min-width: 768px) {
    max-width: 713px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1240px;
  }
`;
