import styled from 'styled-components';
import { mediaQueries } from 'style/mediaQueries';

export const StyledHeaderList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 10px 10px;
  margin-bottom: 32px;
  background-color: #8baa36;
  ${mediaQueries('tablet')`
  padding: 20px 20px;
    margin-bottom: 50px;
  `}
  ${mediaQueries('desktop')`
    padding: 20px 40px;
  `}
`;

export const StyledHeaderFirstListItem = styled.li`
  display: flex;
  flex-grow: 2;
  flex-basis: 0;
  text-align: left;
`;

export const StyledHeaderOtherListItem = styled.li`
  display: block;
  flex-grow: 1;
  flex-basis: 0;
  width: 100%;

  text-align: center;
`;
