import styled from 'styled-components';
import { mediaQueries } from 'style/mediaQueries';

export const List = styled.ul`
  list-style-type: disc;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;
  padding: 0px;
  gap: 10px;
  color: var(--txt-dark);
`;

export const Item = styled.li``;

export const Text = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;

  ${mediaQueries('desktop')`
  font-size: 18px;
  line-height: 1.33;`};
`;
