import styled from 'styled-components';

export const ListItem = styled.li`
  position: relative;
  max-width: 100%;
  width: 343px;

  @media screen and (min-width: 768px) {
    width: calc((100% - 32px) / 2);
  }

  @media screen and (min-width: 1440px) {
    width: calc((100% - 42px) / 4);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 323px;
  object-fit: cover;
  border-radius: 8px;
`;

export const TitleWrap = styled.div`
  position: absolute;
  left: 50%;
  bottom: 26px;
  transform: translateX(-50%);
  width: 90%;
  padding: 16px;
  background-color: #fff;
  border-radius: 8px;

  @media screen and (min-width: 1440px) {
    bottom: 23px;
  }
`;
