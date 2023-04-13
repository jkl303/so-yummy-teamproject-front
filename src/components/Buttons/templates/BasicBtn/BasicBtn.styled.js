import styled, { css } from 'styled-components';
/* props:
variant: ["changeTxt", "changeBg"] colors
origin: ["secondary", "footer"] color
size: ["sm", "md", "wide"] w, p, fz
*/
export const BasicBtn = styled.button`
  width: ${({ size }) => size === 'l' && '100%'};
  border-radius: 6px;
  border: 1px solid transparent;

  font-family: 'Poppins';
  font-size: 14px;
  line-height: 1.1;

  cursor: pointer;

  color: ${({ origin, theme: { colors } }) =>
    origin === 'secondary' ? colors.txt : colors.txtBtn};
  background-color: ${({ origin, theme: { colors } }) =>
    origin === 'secondary'
      ? colors.btnSec
      : origin === 'footer'
      ? colors.btnFoot
      : colors.accent};

  transition: background-color 250ms ease-in-out, color 250ms ease-in-out,
    border-color 250ms ease-in-out;

  ${({ size }) =>
    size === 'sm' &&
    css`
      min-width: 94px;
      min-height: 38px;
      padding: 10px;
    `}

  ${({ size }) =>
    size === 'md' &&
    css`
      min-width: 204px;
      min-height: 38px;
      padding: 11px;

      @media (min-width: 768px) {
        min-width: 171px;
        min-height: 50px;
        padding: 16px;
        font-size: 16px;
      }
      @media (min-width: 1200px) {
        min-width: 339px;
        min-height: 60px;
        padding: 21px;
      }
    `}

    ${({ size }) =>
    size === 'wide' &&
    css`
      width: 100%;
      min-width: 137px;
      min-height: 45px;
      padding: 12px;
      font-size: 16px;

      @media (min-width: 768px) {
        min-height: 56px;
        padding: 20px;
      }
    `}

  ${({ variant, origin, theme: { colors } }) => css`
    &:hover:not([disabled]),
    &:focus:not([disabled]) {
      background-color: ${variant === 'changeBg' && origin === 'secondary'
        ? colors.txtBtn
        : variant === 'changeBg'
        ? colors.btnHoverInverted
        : null};
      color: ${variant === 'changeTxt' && colors.btn};
      border-color: ${origin === 'secondary' && colors.txt};
    }
  `}
`;
