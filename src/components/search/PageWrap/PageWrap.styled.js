import { mediaQueries } from 'style/mediaQueries';
import styled, { css } from 'styled-components';

export const Page = styled.div`
  ${({ padT = {}, padB = {} }) =>
    css`
      padding-top: ${padT.mob + 'px' ?? 0};
      padding-bottom: ${padB.mob + 'px' ?? 0};

      ${mediaQueries('tablet')} {
        padding-top: ${padT.tab + 'px' ?? 0};
        padding-bottom: ${padB.tab + 'px' ?? 0};
      }

      ${mediaQueries('desktop')} {
        padding-top: ${padT.desk + 'px' ?? 0};
        padding-bottom: ${padB.desk + 'px' ?? 0};
      }
    `}
`;

//remove after push
export const TitlePage = styled.h1`
  margin: 0;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;
  color: ${({ theme: { colors } }) => colors.title};
  ${mediaQueries('tablet')`
    padding-top: 72px;
    font-size: 32px;`};
  ${mediaQueries('desktop')`
    padding-top: 104px;
    font-size: 44px;`};
`;
