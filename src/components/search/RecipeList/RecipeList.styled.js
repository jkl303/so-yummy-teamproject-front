import styled from 'styled-components';

export const RecipeListStyled = styled.ul`
  @media screen and(max-maxWidth: 767px) {
    li:not(:last-child) {
      margin-bottom: 28px;
    }
  }

  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
  }

  @media screen and (min-width: 1440px) {
    gap: 100px 14px;
  }
`;
