import { mediaQueries } from 'style/mediaQueries';
import styled from 'styled-components';

export const RecipePreparationStyled = styled.div`
  textarea {
    width: 100%;
    height: 154px;
    resize: none;
    margin: 24px 0 18px;
    padding: 10px 16px;
    border-color: #fafafa;
    border-radius: 8px;
    font-size: 16px;
    line-height: 1.5;
    outline: none;
    color: ${({ theme: { colors } }) => colors.txt};
    background-color: ${({ theme: { colors } }) => colors.input};
    border: 1px solid ${({ theme: { colors } }) => colors.bgSec};
    transition: border-color 250ms ease-in-out;
    ${mediaQueries('tablet')`
    width: 505px;
    height: 224px;
    margin: 32px 0;`}
    :hover, :focus {
      border-color: var(--accent);
    }
  }
`;
