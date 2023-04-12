import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { mediaQueries } from 'style/mediaQueries';

export const CategoryTitle = styled.h2`
  font-size: 28px;
  line-height: 28px;
  font-weight: 600;
  letter-spacing: -0.02em;
  margin-bottom: 32px;
  color: ${({ theme: { colors } }) => colors.title};

  ${mediaQueries('tablet')` 
  font-size: 44px;
    line-height: 44px;
    margin-bottom: 40px;`}

  ${mediaQueries('desktop')`margin-bottom: 50px;`}
`;

export const List = styled.ul`
  ${mediaQueries('tablet')` 
    display: flex;
    gap: 32px;`}

  ${mediaQueries('desktop')` gap: 14px;`}
`;

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-top: 24px;

  ${mediaQueries('tablet')`margin-top: 40px;`}

  ${mediaQueries('desktop')`margin-top: 50px;`}
`;

export const LinkStyled = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 94px;
  height: 38px;
  border: transparent;
  background-color: var(--accent);
  border-radius: 6px;
  color: var(--txt-dark);
  transition: background-color 250ms ease-in-out, color 250ms ease-in-out;

  &:hover,
  &:focus {
    background-color: ${({ theme: { colors } }) => colors.btn};
  }
`;
