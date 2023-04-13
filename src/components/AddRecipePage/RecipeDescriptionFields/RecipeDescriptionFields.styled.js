import styled from 'styled-components';
import { mediaQueries } from 'style/mediaQueries';

export const RecipeDescriptionFieldsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    width: 100%;
    border: none;
    border-bottom: 1px solid var(--bdr);
    background-color: var(--bg);
    :focus {
      border-bottom: 1px solid var(--accent);
      outline: none;
    }
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-top: 32px;
    label {
      color: #000;
      opacity: 0.5;
    }
  }
`;
