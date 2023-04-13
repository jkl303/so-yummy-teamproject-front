import styled, { css } from 'styled-components';
import loader from 'images/loader/noodle-loader.png';

export const SearchFormStyled = styled.form`
  display: flex;
  width: fit-content;
  margin: 0 auto;
  justify-content: center;
  position: relative;

  @media screen and (min-width: 768px) {
    ${({ isLoading }) =>
      isLoading &&
      css`
        &::after {
          max-height: 100%;
          content: 'searching...';
          color: var(--accent);
          position: absolute;
          left: 100%;
          height: 80px;
          width: 80px;
          font-size: 14px;
          background-image: url(${loader});
          background-repeat: no-repeat;
          background-size: contain;
          background-color: transparent;
        }
      `}
  }
`;

export const SearchFormInput = styled.input`
  width: 295px;
  height: 53px;
  margin-right: -113px;
  padding: 16px 145px 16px 32px;

  border-radius: ${() => `${53 * 0.35}px ${53 * 0.65}px`};

  font-size: 12px;

  &::placeholder {
    color: #bdbdbd;
  }

  ${({ theme: { colors } }) => css`
    border: 1px solid ${colors.txtInputInactive};
    color: ${colors.subtitle};
    background-color: ${colors.bg};

    &:focus,
    &:hover {
      outline-color: ${colors.accent};
    }
  `}

  @media screen and (min-width: 768px) {
    width: 362px;
    height: 57px;
    margin-right: -161px;
    padding: 19px 200px 16px 38px;

    border-radius: ${() => `${57 * 0.35}px ${57 * 0.65}px`};

    font-size: 14px;
  }

  @media screen and (min-width: 1440px) {
    width: 510px;
    height: 70px;
    margin-right: -161px;
    padding: 23px 210px 23px 48px;

    border-radius: ${() => `${70 * 0.35}px ${70 * 0.65}px`};

    font-size: 16px;
  }
`;
