import styled from 'styled-components';
import { mediaQueries } from 'style/mediaQueries';

export const StyledContainer = styled.div`
  width: 100%;
  padding: 0px 8px 0px 8px;
  margin-left: auto;
  margin-right: auto;

  ${mediaQueries('tablet')`
  padding: 0px 32px 0px 32px;
  `}
  ${mediaQueries('desktop')`
 padding: 0px 100px 0px 100px;
 max-width:1440px;
  margin-left: auto;
  margin-right: auto;
`}
`;
