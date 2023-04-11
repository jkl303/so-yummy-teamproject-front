import styled from 'styled-components';
import { mediaQueries } from 'style/mediaQueries';

export const ListItem = styled.li`
  position: relative;
  max-width: 100%;
  width: 343px;

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
