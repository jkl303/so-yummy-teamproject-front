import styled, { css } from 'styled-components';

export const Margins = styled.div`
  ${({ mT = {}, mR = {}, mB = {}, mL = {} }) =>
    css`
      margin-top: ${mT.mob + 'px' ?? 0};
      margin-right: ${mR.mob + 'px' ?? 0};
      margin-bottom: ${mB.mob + 'px' ?? 0};
      margin-left: ${mL.mob + 'px' ?? 0};

      @media screen and (min-width: 768px) {
        margin-top: ${mT.tab + 'px' ?? 0};
        margin-right: ${mR.tab + 'px' ?? 0};
        margin-bottom: ${mB.tab + 'px' ?? 0};
        margin-left: ${mL.tab + 'px' ?? 0};
      }

      @media screen and (min-width: 1200px) {
        margin-top: ${mT.desk + 'px' ?? 0};
        margin-right: ${mR.desk + 'px' ?? 0};
        margin-bottom: ${mB.desk + 'px' ?? 0};
        margin-left: ${mL.desk + 'px' ?? 0};
      }
    `}
`;
