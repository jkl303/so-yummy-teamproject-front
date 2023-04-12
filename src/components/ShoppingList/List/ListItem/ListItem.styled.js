import styled from 'styled-components';
import { mediaQueries } from 'style/mediaQueries';

export const StyledSpan = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: ${props => props.color};
  ${mediaQueries('tablet')`
font-size: 18px;
line-height: 27px;
letter-spacing: 0em;
  `}
`;
