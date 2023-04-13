import styled from 'styled-components';

export const SearchNotFoundWrap = styled.div`
  width: fit-content;
  margin: 0 auto;

  img {
    margin-bottom: 24px;

    @media screen and (min-width: 768px) {
      margin-bottom: 32px;
    }
  }

  span {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.txtInputInactive};
    @media screen and (min-width: 768px) {
      font-size: 24px;
    }
  }
`;
