import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

/* props: 
sizes:[m: {w, h, padH, padV, fz}, t, d] 
variant [changeBg, changeBgInvert, changeOutline, changeAll (categories && add to favorite)], */

export const CustomBtn = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: ${({ sizes: { m } }) => m.w + 'px'};
  min-height: ${({ sizes: { m } }) => m.h + 'px'};
  padding: ${({ sizes: { m } }) => `${m.padV}px ${m.padH}px`};
  border-radius: ${({
    sizes: {
      m: { h },
    },
  }) => `${h * 0.35}px ${h * 0.65}px`};

  font-family: 'Poppins';
  font-size: ${({ sizes: { m } }) => (m.fz ? m.fz + 'px' : '14px')};
  text-align: center;
  cursor: pointer;

  color: ${({ variant, theme: { colors } }) =>
    variant === 'changeAll' ? colors.txtBtnSec : colors.txtBtn};

  transition: background-color 250ms ease-in-out, color 250ms ease-in-out,
    border-color 250ms ease-in-out;

  ${({ variant, theme: { colors } }) =>
    variant === 'changeOutline' || variant === 'changeAll'
      ? css`
          border-width: 2px;
          border-style: solid;
          border-color: ${variant === 'changeOutline'
            ? colors.txtBtn
            : colors.accent};
          background-color: transparent;
        `
      : css`
          border: none;
          background-color: ${variant === 'changeBg'
            ? colors.btn
            : colors.btnInverted};
        `}

  ${({ sizes: { t } }) =>
    t &&
    css`
      @media (min-width: 768px) {
        min-width: ${t.w && t.w + 'px'};
        min-height: ${t.h && t.h + 'px'};
        padding-top: ${t.padV && t.padV + 'px'};
        padding-right: ${t.padh && t.padh + 'px'};
        padding-left: ${t.padh && t.padh + 'px'};
        padding-bottom: ${t.padV && t.padV + 'px'};
        font-size: ${t.fz ? t.fz + 'px' : '16px'};
        border-radius: ${({
          sizes: {
            t: { h },
          },
        }) => `${h * 0.35}px ${h * 0.65}px`};
      }
    `}

    ${({ sizes: { d } }) =>
    d &&
    css`
      @media (min-width: 1440px) {
        min-width: ${d.w && d.w + 'px'};
        min-height: ${d.h && d.h + 'px'};
        padding-top: ${d.padV && d.padV + 'px'};
        padding-right: ${d.padh && d.padh + 'px'};
        padding-left: ${d.padh && d.padh + 'px'};
        padding-bottom: ${d.padV && d.padV + 'px'};
        font-size: ${d.fz ? d.fx + 'px' : '16px'};
        border-radius: ${({
          sizes: {
            d: { h },
          },
        }) => `${h * 0.35}px ${h * 0.65}px`};
      }
    `}
    ${({ variant, theme: { colors } }) => css`
    &:hover:not([disabled]) {
      background-color: ${variant === 'changeBg' || variant === 'changeAll'
        ? colors.btnHover
        : variant === 'changeBgInvert'
        ? colors.btnHoverInverted
        : null};
      color: ${variant === 'changeOutline'
        ? colors.accent
        : variant === 'changeAll'
        ? colors.txtBtn
        : colors.textBtn};
      border-color: ${variant === 'changeOutline' && colors.accent};
    }
  `}
`;
