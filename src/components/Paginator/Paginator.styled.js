import styled from 'styled-components';

export const PaginatorWrapper = styled.div`
  margin: ${({ noMargin }) => (noMargin ? '50px auto 0' : '50px auto 100px')};
  width: 324px;
  ul {
    height: 55px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #fafafa;
    box-shadow: 0px 4px 4px rgba(135, 135, 135, 0.2);
    background-color: ${({ theme: { colors } }) => colors.bgModal};
    border-radius: 26px;
  }
  li {
    .active {
      background-color: ${({ theme: { colors } }) => colors.bgActivePage};
      :hover {
        transform: scale(1);
        cursor: default;
      }
    }
  }
  a {
    cursor: pointer;
    width: 27.81px;
    height: 27px;
    background-color: ${({ isActive, theme: { colors } }) =>
        isActive ? colors.bgActivePage : colors.bgModal}
      /* #ebf3d4,#fafafa*/;
    border: none;
    border-radius: 15px;
    /* font-family: 'Poppins'; */
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 1.5;
    display: flex;
    align-items: flex-end;
    text-align: center;
    color: ${({ theme: { colors } }) => colors.txt}; /* #656565;*/
    align-items: center;
    justify-content: center;
    :hover {
      transform: scale(1.5);
    }
  }
  .disabled {
    a {
      :hover {
        transform: scale(1);
        cursor: default;
      }
    }
  }
`;
