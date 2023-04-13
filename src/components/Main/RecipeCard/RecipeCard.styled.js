import styled from 'styled-components';
import { mediaQueries } from 'style/mediaQueries';

export const ListItem = styled.li`
  position: relative;
  max-width: 100%;
  width: 343px;
  border-radius: 8px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

  scale: 1;
  transition: scale 500ms cubic-bezier(0.165, 0.84, 0.44, 1),
    box-shadow 500ms cubic-bezier(0.165, 0.84, 0.44, 1);

  &:hover {
    scale: 1.02;
    box-shadow: 0 0 7px 2px #a8a6a5;
  }
  ${mediaQueries('tablet')`width: calc((100% - 32px) / 2)`}

  ${mediaQueries('desktop')`width: calc((100% - 42px) / 4)`}
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
  background-color: ${({ theme: { colors } }) => colors.bgModal};
  color: ${({ theme: { colors } }) => colors.subtitle};
  border-radius: 8px;

  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.24px;

  ${mediaQueries('desktop')`bottom: 23px;`}
`;
