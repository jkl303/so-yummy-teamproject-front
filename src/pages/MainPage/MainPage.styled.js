import styled from 'styled-components';
import { mediaQueries } from 'style/mediaQueries';

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
  margin-bottom: 100px;

  ${mediaQueries('tablet')` margin-top: 32px;`}

  ${mediaQueries('desktop')`  margin-top: 14px;
  margin-bottom: 118px;`}
`;
