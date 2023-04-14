import { mediaQueries } from 'style/mediaQueries';
import styled from 'styled-components';

export const PopularRecipeStyled = styled.div``;
export const PopularRecipeList = styled.ul`
  ${mediaQueries('tablet')`
  
  display: flex;
  gap: 32px;
  
  `}
 ${mediaQueries('desktop')`
  display: flex;
    flex-direction: column;
    gap: 24px;
    max-width: 319px;
    `}
`;

export const PopularRecipeItem = styled.li`
  height: 98px;
  min-width: 343px;
  border-bottom: 1px solid rgba(112, 112, 112, 0.17);

  &:not(:first-child) {
    margin-top: 24px;

    @media (min-width: 768px) and (max-width: 1439px) {
      margin-top: 0;
    }
  }

  @media (min-width: 768px) and (max-width: 1439px) {
    min-width: 336px;
  }

  & > a {
    display: flex;
    gap: 12px;
  }
`;

export const PopularRecipeItemDescr = styled.p`
  max-width: 213px;
  -ms-text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  overflow: hidden;
  -ms-line-clamp: 3;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  display: -webkit-box;
  display: box;
  word-wrap: break-word;
  -webkit-box-orient: vertical;
  box-orient: vertical;
  overflow: hidden;

  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: -0.24px;
  color: ${({ theme: { colors } }) => colors.txtArticleMini};

  ${mediaQueries('tablet')`
  max-width: 209px;
  
  `}
`;

export const PopularRecipeTitle = styled.h3`
  margin-bottom: 32px;

  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.24px;

  color: ${({ theme: { colors } }) => colors.subtitle};
`;

export const PopularRecipeImg = styled.img`
  width: 104px;
  height: 85px;
  border-radius: 8px;
`;
