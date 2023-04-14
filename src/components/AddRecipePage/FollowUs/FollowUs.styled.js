import styled from 'styled-components';
import { mediaQueries } from 'style/mediaQueries';

export const FollowUsStyled = styled.div`
  padding-top: 115px;
  ${mediaQueries('tablet')`
  padding-top: 100px;`};

  ${mediaQueries('desktop')``};
`;
