import styled from 'styled-components';
import Select from 'react-select';

export const SelectFieldStyled = styled(Select)`
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme: { colors } }) => colors.txt};

  .Select__control {
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${({ theme: { colors } }) => colors.borderRecipe};
    background-color: ${({ theme: { colors } }) => colors.input};
    transition: border-color 250ms ease-in-out;
    :hover {
      cursor: text;
      border-bottom: 1px solid var(--accent);
    }
    &--is-focused {
      border-bottom: 1px solid var(--accent);
      box-shadow: none;
    }
  }

  .Select__input-container,
  .Select__single-value {
    color: ${({ theme: { colors } }) => colors.txt};
  }

  .Select__menu {
    right: 0;
    width: 160px;
    border-radius: 6px;
    font-size: 14px;
    line-height: 1.5;
    color: ${({ theme: { colors } }) => colors.txtRecipeInner};
    background-color: ${({ theme: { colors } }) => colors.bg};

    &-list {
      max-height: 162px;
      padding: 8px 18px 8px 14px;
    }
  }

  .Select__option {
    padding: 0;
    transition: color 250ms ease-in-out;
    :not(:last-child) {
      margin-bottom: 4px;
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
    border: none;
    outline: none;
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
