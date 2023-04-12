import styled from 'styled-components';

export const CategoryPageWrap = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 114px;

  @media screen and (min-width: 320px) {
    max-width: 375px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 136px;
  }

  @media screen and (min-width: 1439px) {
    max-width: 1440px;
    padding-left: 100px;
    padding-right: 100px;
    padding-top: 164px;
  }
`;
