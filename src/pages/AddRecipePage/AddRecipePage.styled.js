import styled from 'styled-components';
import { mediaQueries } from 'style/mediaQueries';

export const AddRecipePageStyled = styled.div`
  padding-top: 100px;

  ${mediaQueries('tablet')`padding-top: 70px;`};

  ${mediaQueries('desktop')`padding-top: 100px;`};
`;
