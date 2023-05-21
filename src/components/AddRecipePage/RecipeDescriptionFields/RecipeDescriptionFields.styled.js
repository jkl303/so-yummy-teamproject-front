import styled from 'styled-components';
import { mediaQueries } from 'style/mediaQueries';
import { Field } from 'formik';

export const RecipeDescriptionFieldsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  ${mediaQueries('tablet')`
    flex-direction: row;
  `}
  ${mediaQueries('desktop')`
    gap: 50px;`}
`;

export const DescriptionListStyled = styled.ul`
  width: 100%;
  height: 268px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${mediaQueries('tablet')`
    max-width: 393px;`}
  ${mediaQueries('desktop')`
    height: 344px;`}
`;

export const DescriptionLabelStyled = styled.label`
  font-size: 14px;
  line-height: 1.5;
  color: ${({ theme: { colors } }) => colors.txtRecipeInner};
  ${mediaQueries('tablet')`font-size: 16px;`}
`;

export const DescriptionInputStyled = styled(Field)`
  width: 100%;
  padding: 2px 8px;
  font-size: 16px;
  line-height: 1.5;
  border: none;
  color: ${({ theme: { colors } }) => colors.txt};
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.borderRecipe};
  background-color: ${({ theme: { colors } }) => colors.input};
  transition: border-color 250ms ease-in-out;
  ${mediaQueries('tablet')`
      width: 393px;`};
  :hover,
  :focus {
    border-bottom: 1px solid var(--accent);
    outline: none;
  }
`;
