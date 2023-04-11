import styled from 'styled-components';
import { mediaQueries } from 'style/mediaQueries';

export const StyledContainer = styled.div`
  width: 100%;
  padding: 0px 8px 0px 8px;
  margin-left: auto;
  margin-right: auto;
  max-width: 375px;

  ${mediaQueries('tablet')`
  padding: 0px 32px 0px 32px;
    max-width: 768px;
  `}
  ${mediaQueries('desktop')`
 padding: 0px 100px 0px 100px;
 max-width:1440px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1440px;
`}
`;
