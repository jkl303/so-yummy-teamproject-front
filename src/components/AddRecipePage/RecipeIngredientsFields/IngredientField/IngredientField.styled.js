import styled from 'styled-components';
import Select from 'react-select';
import { mediaQueries } from 'style/mediaQueries';

export const IngredientFieldStyled = styled(Select)`
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme: { colors } }) => colors.txt};

  .Select__control {
    width: 194px;
    padding: 6px 0;
    border-radius: 8px;
    background-color: ${({ theme: { colors } }) => colors.input};
    border-color: ${({ theme: { colors } }) => colors.bgSec};
    transition: border-color 250ms ease-in-out;
    ${mediaQueries('tablet')`width: 398px;`}
    :hover {
      cursor: text;
      border-color: var(--accent);
    }
    &--is-focused {
      box-shadow: none;
      border-color: var(--accent);
    }
  }

  .Select__input-container,
  .Select__single-value {
    color: ${({ theme: { colors } }) => colors.txt};
  }

  .Select__menu {
    border-left: 1px solid var(--accent);
    border-radius: 6px;
    box-shadow: none;
    font-size: 14px;
    line-height: 1.5;
    color: ${({ theme: { colors } }) => colors.txtRecipeInner};
    background-color: ${({ theme: { colors } }) => colors.bg};
    ${mediaQueries('tablet')`width: 398px;`}
    &-list {
      max-height: 172px;
      padding: 8px 18px 8px 14px;
    }
  }

  .Select__option {
    padding: 0;
    transition: color 250ms ease-in-out;
    :not(:last-child) {
      margin-bottom: 6px;
    }
    :hover {
      cursor: pointer;
      color: var(--accent);
    }
    &--is-focused {
      background-color: transparent;
    }
    &--is-selected {
      color: ${({ theme: { colors } }) => colors.txtRecipeInner};
      background-color: transparent;
    }
  }

  .Select__indicator-separator {
    display: none;
  }

  .Select__dropdown-indicator {
    color: var(--accent);
    :hover {
      cursor: pointer;
      color: var(--accent);
    }
    &--is-focused {
      color: var(--accent);
    }
  }
`;
