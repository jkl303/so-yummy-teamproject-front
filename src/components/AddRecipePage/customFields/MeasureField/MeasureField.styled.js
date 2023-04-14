import styled from 'styled-components';
import { mediaQueries } from 'style/mediaQueries';

export const MeasureFieldStyled = styled.div`
  display: flex;
  align-items: center;
  width: 84px;
  background-color: transparent;
  ${mediaQueries('tablet')`
  width: 123px;
  margin-left: 32px;`}
  input {
    padding-right: 2px;
    max-width: 28px;
    background-color: transparent;
    border: none;
    text-align: right;
    :focus {
      outline: none;
    }
  }

  .Select__control {
    background-color: transparent;
    border: none;
    :hover {
      cursor: pointer;
    }
    &--is-focused {
      box-shadow: none;
    }
  }

  .Select__value-container {
    padding: 0;
    max-width: 30px;
  }
  .Select__input-container {
    margin: 0;
    font-size: 18px;
    line-height: 1.5;
  }

  .Select__menu {
    right: 0;
    min-width: 84px;
    border-radius: 6px;
    font-size: 12px;
    line-height: 18px;
    color: #00000080;
    box-shadow: none;
    ${mediaQueries('tablet')`width: 123px;`}
    &-list {
      max-height: 154px;
      padding: 8px 18px 8px 14px;
    }
  }

  .Select__option {
    padding: 0;
    text-align: center;
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
    padding: 8px 4px;
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
