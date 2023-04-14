import { mediaQueries } from 'style/mediaQueries';
import styled from 'styled-components';

export const RecipePreparationStyled = styled.div`
  textarea {
    margin: 24px 0 18px;
    padding: 10px 16px;
    width: 100%;
    height: 154px;
    border-color: transparent;
    background-color: transparent;
    resize: none;
    font-size: 18px;
    line-height: 1.5;
    ${mediaQueries('tablet')`
    width: 505px;
    height: 224px;
    margin: 32px 0;`}
    :focus {
      outline-color: var(--accent);
    }
  }
`;
