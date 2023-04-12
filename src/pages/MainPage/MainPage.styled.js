import styled from 'styled-components';
import { mediaQueries } from 'style/mediaQueries';

export const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 320px) {
    max-width: 375px;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 100px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1439px) {
    max-width: 1440px;
    padding-left: 100px;
    padding-right: 100px;
    padding-bottom: 118px;
  }
`;

export const CategoryList = styled.ul`
  display: flex;
  flex-direction: column;

  gap: 32px;

  ${mediaQueries('tablet')`gap: 50px;`}

  ${mediaQueries('desktop')` gap: 100px;`}
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  ${mediaQueries('tablet')` margin-top: 32px;`}

  ${mediaQueries('desktop')`  margin-top: 14px;`}
`;
