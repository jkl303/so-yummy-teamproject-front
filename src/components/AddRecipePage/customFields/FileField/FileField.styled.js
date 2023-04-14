import styled from 'styled-components';
import { mediaQueries } from 'style/mediaQueries';
import { ReactComponent as img } from 'images/svg/recipeImg.svg';

export const FileFieldStyled = styled.label`
  input {
    display: none;
  }
`;

export const RecipeImgStyled = styled(img)`
  width: 279px;
  height: 268px;
  border-radius: 8px;
  ${mediaQueries('desktop')`
  width: 357px;
  height: 344px;`}
`;
