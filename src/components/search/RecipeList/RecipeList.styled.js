import { mediaQueries } from 'style/mediaQueries';
import styled from 'styled-components';

export const RecipeList = styled.ul`
  @media screen and(max-maxWidth: 767px) {
    li:not(:last-child) {
      margin-bottom: 28px;
    }
  }

  ${mediaQueries('tablet')} {
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
  }

  ${mediaQueries('desktop')} {
    gap: 100px 14px;
  }
`;
