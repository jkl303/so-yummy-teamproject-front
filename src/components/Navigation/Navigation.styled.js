import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { mediaQueries } from 'style/mediaQueries';

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  margin-bottom: 32px;

  ${mediaQueries('tablet')`
    align-items: flex-start;
    gap: 20px;
    margin-bottom: 0;`};

  ${mediaQueries('desktop')`
    gap: 24px;`};
`;

export const Link = styled(NavLink)`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 1.29;
letter-spacing: -0.02em;
color: var(--txt-dark);
  &.active {
    color: ${({ theme: { colors } }) => colors.btnFoot};    
  &:focus,
  &:hover {
    color: ${({ theme: { colors } }) => colors.btnFoot};
`;
