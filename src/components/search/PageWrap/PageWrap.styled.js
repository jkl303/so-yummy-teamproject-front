import { mediaQueries } from 'style/mediaQueries';
import styled, { css } from 'styled-components';

export const Page = styled.div`
  ${({ padT = {}, padB = {} }) => css`
    padding-top: ${padT.mob ? padT.mob + 'px' : 0};
    padding-bottom: ${padB.mob ? padB.mob + 'px' : 0};

    @media screen and (min-width: 768px) {
      padding-top: ${padT.tab ? padT.tab + 'px' : null};
      padding-bottom: ${padB.tab ? padB.tab + 'px' : null};
    }

    @media screen and (min-width: 1440px) {
      padding-top: ${padT.desk ? padT.desk + 'px' : null};
      padding-bottom: ${padB.desk ? padB.desk + 'px' : null};
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
    font-size: 32px;`};
  ${mediaQueries('desktop')`
    font-size: 44px;`};
`;
