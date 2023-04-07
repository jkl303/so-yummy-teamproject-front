import styled from 'styled-components';

export const CategoryTitle = styled.h2`
  font-size: 28px;
  line-height: 28px;
  letter-spacing: -0.02em;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    font-size: 44px;
    line-height: 44px;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 50px;
  }
`;

export const List = styled.ul`
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 32px;
  }

  @media screen and (min-width: 1440px) {
    gap: 14px;
  } ;
`;

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export const ButtonStyled = styled.button`
  width: 94px;
  height: 38px;
  border: transparent;
  background: #8aa936;
  border-radius: 6px;
  color: #fafafa;
  margin-top: 24px;

  @media screen and (min-width: 768px) {
    margin-top: 40px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 50px;
  }
`;
