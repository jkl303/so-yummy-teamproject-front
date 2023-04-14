import styled from 'styled-components';
import { mediaQueries } from 'style/mediaQueries';

export const AddRecipeFormWrapper = styled.div`
  padding: 72px 0;
  input {
    margin: 0;
    padding: 0;
  }
  ${mediaQueries('tablet')`padding: 100px 0;`};
  h2 {
    line-height: 1;
    font-weight: 600;
  }
`;
