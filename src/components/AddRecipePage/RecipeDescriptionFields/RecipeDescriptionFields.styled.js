import styled from 'styled-components';
import { mediaQueries } from 'style/mediaQueries';

export const RecipeDescriptionFieldsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${mediaQueries('tablet')`flex-direction: row;`}
  ul {
    width: 100%;
    height: 268px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 32px;
    ${mediaQueries('tablet')`
    max-width: 393px;
    margin-left: 32px;
    margin-top: 0;`}
    ${mediaQueries('desktop')`
    height: 344px;
    margin-left: 50px;`}
    li {
      display: flex;
      flex-direction: column;
      ${mediaQueries('tablet')`
      width: 393px;`}
    }
    input {
      width: 100%;
      ${mediaQueries('tablet')`
      width: 393px;`}
      border: none;
      border-bottom: 1px solid var(--bdr);
      background-color: transparent;
      font-size: 18px;
      line-height: 1.5;
      :focus {
        border-bottom: 1px solid var(--accent);
        outline: none;
      }
    }

    label {
      font-size: 14px;
      line-height: 1.5;
      color: #00000080;
      ${mediaQueries('tablet')`font-size: 16px;`}
    }
  }
`;
