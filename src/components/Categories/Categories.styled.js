import styled from 'styled-components';

export const CategoriesWrap = styled.div`
  padding-left: 16px;
  @media screen and (min-width: 768px) {
    padding-left: 32px;
  }
  @media screen and (min-width: 1440px) {
    padding: 0px 100px 0px 100px;
  }
`;

export const TabList = styled.ul`
  padding: 10px 0px 0px 10px;
  @media screen and (min-width: 768px) {
  }
`;

export const TabWrap = styled.div`
  width: 100%;
  margin-top: 50px;
  padding-left: 19px;
  border-bottom: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    margin-top: 100px;
  }
`;

export const CategoriesTitle = styled.h1`
  margin-bottom: 50px;
  margin-top: 50px;
  padding: 0px;
  font-weight: 600;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.02em;
  @media screen and (min-width: 768px) {
    font-size: 32px;
    margin-top: 72px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 48px;
    margin-bottom: 100px;
    margin-top: 100px;
  }
`;
