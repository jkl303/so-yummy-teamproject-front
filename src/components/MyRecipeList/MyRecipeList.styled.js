import styled from 'styled-components';

export const WrapperList = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-top: 50px;

  @media screen and (max-width: 767px) {
    max-width: 345px;
    gap: 18px;
  }
  @media screen and (min-width: 768px) {
    max-width: 713px;
    gap: 40px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1240px;
    gap: 50px;
  }
`;
