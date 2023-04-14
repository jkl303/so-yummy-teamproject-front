import styled from 'styled-components';
import { mediaQueries } from 'style/mediaQueries';

export const MainTitleStyled = styled.h1`
  font-size: 28px;
  line-height: 100%;
  font-weight: 600;
  letter-spacing: -0.02em;

  ${mediaQueries('tablet')`
  font-size: 32px;
  `}
  ${mediaQueries('desktop')`
  font-size: 44px;
  `}
`;
