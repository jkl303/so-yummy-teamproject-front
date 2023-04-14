import styled from 'styled-components';
import { mediaQueries } from 'style/mediaQueries';

export const AddRecipePageStyled = styled.div`
  padding-top: 115px;
  padding-bottom: 120px;
  ${mediaQueries('tablet')`
  padding-top: 135px;
  padding-bottom: 200px;`};

  ${mediaQueries('desktop')`
  .wrapper {display: flex;
    justify-content: space-between;
  }
  .asideWrapper {display: flex;
  flex-direction: column;}
  padding-top: 165px;`};
`;
