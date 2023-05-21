import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mediaQueries } from 'style/mediaQueries';

export const PopularRecipeStyled = styled.div`
  padding-top: 72px;
  ${mediaQueries('tablet')`
      padding-top: 100px;`}
`;

export const PopularRecipeList = styled.ul`
  display: flex;
  margin-top: 32px;
  flex-direction: column;
  gap: 24px;
  ${mediaQueries('tablet')`
      margin-top: 40px;`}
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    flex-direction: row;
    justify-content: space-between;
  }
  li {
    ${mediaQueries('tablet')`
      width: 335px;`}
    ${mediaQueries('desktop')`
      width: 318px;`}
  }
`;

export const PopularRecipeLink = styled(Link)`
  display: flex;
  gap: 12px;
  padding-bottom: 13px;
  border-bottom: 1px solid #70707033;
  img {
    width: 104px;
    height: 85px;
    border-radius: 8px;
    ${mediaQueries('desktop')`
      width: 97px;`}
  }
`;

export const TextWrapper = styled.div`
  h3 {
    margin-bottom: 3px;
    font-size: 16px;
    line-height: 1.25;
    font-weight: 500;
    letter-spacing: -0.24px;
    color: ${({ theme: { colors } }) => colors.text};
  }
  p {
    font-size: 12px;
    line-height: 1.33;
    letter-spacing: -0.24px;
    color: #7e7e7e;
    color: ${({ theme: { colors } }) => colors.txtArticleMini};
  }
`;
