import styled from 'styled-components';
import Select from 'react-select';
import { mediaQueries } from 'style/mediaQueries';

export const IngredientFieldStyled = styled(Select)`
  .Select__control {
    border: none;
    width: 194px;
    height: 53px;
    margin-right: 14px;
    background-color: transparent;
    ${mediaQueries('tablet')`width: 398px;
    height: 59px;`}
    :hover {
      cursor: text;
    }
    &--is-focused {
      box-shadow: none;
    }
  }

  .Select__input-container {
    color: #00000080;
    font-size: 18px;
    line-height: 1.5;
  }

  .Select__value-container {
    padding: 0;
  }

  .Select__menu {
    border-radius: 6px;
    font-size: 12px;
    line-height: 18px;
    color: #00000080;
    box-shadow: none;
    &-list {
      max-height: 154px;
      padding: 8px 18px 8px 14px;
    }
  }

  .Select__option {
    padding: 0;
    :not(:last-child) {
      margin-bottom: 6px;
    }
    :hover {
      cursor: pointer;
      color: var(--accent);
      background-color: transparent;
    }
    &--is-focused {
      background-color: transparent;
    }
    &--is-selected {
      color: var(--accent);
      background-color: transparent;
    }
  }

  .Select__indicator-separator {
    display: none;
  }

  .Select__dropdown-indicator {
    border: none;
    outline: none;
    color: var(--accent);
    :hover {
      color: var(--accent);
    }
    &--is-focused {
      color: var(--accent);
    }
  }
`;
