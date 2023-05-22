import styled from 'styled-components';
import { mediaQueries } from 'style/mediaQueries';

export const MeasureFieldStyled = styled.div`
  display: flex;
  align-items: center;
  width: 120px;
  border-radius: 8px;
  background-color: ${({ theme: { colors } }) => colors.input};
  border: 1px solid ${({ theme: { colors } }) => colors.bgSec};
  transition: border-color 250ms ease-in-out;
  ${mediaQueries('tablet')`
  width: 123px;
  margin-right: 150px;`}
  ${mediaQueries('desktop')`
  margin-right: 50px;`}
  :hover, :focus {
    border-color: var(--accent);
    outline: none;
  }
  input {
    width: 100%;
    border: none;
    outline: none;
    color: ${({ theme: { colors } }) => colors.txt};
    background-color: transparent;
    text-align: right;
    line-height: 1.5;
  }

  .Select__control {
    background-color: ${({ theme: { colors } }) => colors.input};
    border: none;
    border-radius: 8px;
    padding: 6px 0;
    :hover {
      cursor: pointer;
    }
    &--is-focused {
      box-shadow: none;
    }
  }

  .Select__single-value {
    color: ${({ theme: { colors } }) => colors.txt};
    text-align: center;
  }

  .Select__menu {
    right: 0;
    width: 86px;
    border: 1px solid var(--accent);
    border-radius: 8px;
    box-shadow: none;
    font-size: 14px;
    line-height: 1.5;
    color: ${({ theme: { colors } }) => colors.txtRecipeInner};
    background-color: ${({ theme: { colors } }) => colors.bg};
    &-list {
      padding: 8px 18px 8px 14px;
    }
  }

  .Select__option {
    padding: 0;
    padding-left: 4px;
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
    padding: 8px 8px 8px 0;
    color: var(--accent);
    :hover {
      color: var(--accent);
    }
    &--is-focused {
      color: var(--accent);
    }
  }
`;
