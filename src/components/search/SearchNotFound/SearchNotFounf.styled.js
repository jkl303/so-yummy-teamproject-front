import styled from 'styled-components';

export const SearchNotFoundWrap = styled.div`
  width: fit-content;
  margin: 0 auto;

  img {
    margin-bottom: 32px;
  }

  span {
    font-size: 14px;

    @media screen and (min-width: 768px) {
      font-size: 24px;
    }
  }
`;
