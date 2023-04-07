import styled from 'styled-components';
import { mediaQueries } from 'style/mediaQueries';

export const StyledShoppingListHeader = styled.h1`
  margin-bottom: 50px;
  margin-top: 53px;
  font-size: 28px;
  line-height: 28px;
  letter-spacing: -0.02em;

  ${mediaQueries('tablet')`
   margin-bottom: 72px;
    margin-top: 73px;
  `}
  ${mediaQueries('desktop')`
      margin-top: 102px;
  `}
`;
