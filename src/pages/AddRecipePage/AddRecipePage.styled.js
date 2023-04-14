import styled from 'styled-components';
import { mediaQueries } from 'style/mediaQueries';

export const AddRecipePageStyled = styled.div`
  padding-top: 115px;

  ${mediaQueries('tablet')`padding-top: 135px;`};

  ${mediaQueries('desktop')`padding-top: 165px;`};
`;
