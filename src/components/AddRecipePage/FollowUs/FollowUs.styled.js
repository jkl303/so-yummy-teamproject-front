import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FollowList = styled.ul`
  display: flex;
  justify-content: left;
  gap: 20px;
  margin-top: 40px;
  padding: 0;
`;

export const FollowLink = styled(Link)`
  cursor: pointer;
  svg {
    width: 30px;
    height: 30px;
    color: var(--accent);
    transition: color 250ms ease-in-out;
    &:focus,
    &:hover {
      color: ${({ theme: { colors } }) => colors.title};
    }
  }
`;
