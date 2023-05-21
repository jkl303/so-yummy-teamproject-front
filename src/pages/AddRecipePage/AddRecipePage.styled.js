import styled from 'styled-components';
import { mediaQueries } from 'style/mediaQueries';

export const AddRecipePageStyled = styled.div`
  padding-bottom: 120px;
  h2 {
    font-weight: 600;
    font-size: 24px;
    line-height: 1;
    color: ${({ theme: { colors } }) => colors.title};
  }
  ${mediaQueries('tablet')`
  padding-bottom: 200px;`};
`;

export const RecipePageWrapper = styled.div`
  ${mediaQueries('desktop')`
  {display: flex;
  justify-content: space-between;`}
`;

export const AsideWrapper = styled.div`
  ${mediaQueries('desktop')` 
  {display: flex;
  flex-direction: column;}`}
`;
