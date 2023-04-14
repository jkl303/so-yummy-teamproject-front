import styled from 'styled-components';
import Select from 'react-select';

export const SelectFieldStyled = styled(Select)`
  .Select__control {
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid var(--bdr);
    background-color: transparent;
    :hover {
      cursor: text;
      border-bottom: 1px solid var(--accent);
    }
    &--is-focused {
      border-bottom: 1px solid var(--accent);
      box-shadow: none;
    }
  }

  .Select__input-container {
    margin: 0;
    padding: 0;
    font-size: 18px;
    line-height: 1.5;
  }

  .Select__value-container {
    padding: 0;
  }

  .Select__menu {
    right: 0;
    width: 123px;
    border-radius: 6px;
    font-size: 12px;
    line-height: 18px;
    color: #00000080;
    box-shadow: none;
    &-list {
      max-height: 144px;
      padding: 8px 18px 8px 14px;
    }
  }

  .Select__option {
    padding: 0;
    :not(:last-child) {
      margin-bottom: 4px;
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
    /* &::before {
      content: 'Category ';
    } */
    :hover {
      color: var(--accent);
    }
    &--is-focused {
      color: var(--accent);
    }
  }
`;
