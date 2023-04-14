import styled from 'styled-components';
import { mediaQueries } from 'style/mediaQueries';

export const FileFieldStyled = styled.label`
  cursor: pointer;
  input {
    display: none;
  }
  img {
    width: 279px;
    height: 268px;
    border-radius: 8px;
    object-fit: cover;
    ${mediaQueries('desktop')`
  width: 357px;
  height: 344px;`}
  }
`;
