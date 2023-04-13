import styled from 'styled-components';
import { mediaQueries } from '../../style/mediaQueries';

export const RecipeWrap = styled.div`
 margin-top: -70px;
  margin-left: auto;
  margin-right: auto;
  ${mediaQueries('mobile')`
    width: 375px;
  `}
  ${mediaQueries('tablet')`
    width: 768px;
    margin-top: -65px;
  `}
  ${mediaQueries('desktop')`
    width: 1440px;
    margin-top: -60px;
 `}
`;

export const RecipeHeroWrap = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  ${mediaQueries('mobile')`
  margin-bottom: 32px;
  `}
  ${mediaQueries('tablet')`
    margin-bottom: 50px;
  `}
  ${mediaQueries('desktop')`
    margin-bottom: 50px;
  `}
`;

export const RecipeHeroBlock = styled.div`
  position: absolute;
  padding-left: 36px;
  padding-right: 36px;
  top: 164px;
  left: auto;
  text-align: center;
  ${mediaQueries('tablet')`
     padding-left: 131px;
  padding-right: 131px;
  `}
    ${mediaQueries('desktop')`
        padding-left: 392px;
  padding-right: 392px;
  `}
`;

export const RecipeTitle = styled.h2`
  color: ${({ theme: { colors } }) => colors.accent};
  margin-bottom: 18px;
  font-size: 24px;
  ${mediaQueries('tablet')`
    font-size: 44px;
    margin-bottom: 24px;
  `}
`;

export const RecipeDescription = styled.p`
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: -0.02em;
  margin-bottom: 30px;
  color: #23262A;
  ${mediaQueries('tablet')`
  font-size: 18px;
 
  `}
`;

export const RecipeAddToFavotite = styled.button`
  min-width: 150px;
  background-color: transparent;
  border-radius: 24px 44px;
  border: 1px solid ${({ theme: { colors } }) => colors.accent};
  margin-bottom: 42px;
  padding: 10px 18px;
  font-size: 10px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: ${({ theme: { colors } }) => colors.accent};
    cursor: pointer;
    color: #FAFAFA;
  }
  @media screen and (min-width: 768px) {
    width: 278px;
    padding: 18px 44px;
    margin-bottom: 78px;
    font-size: 16px;
  }
  @media screen and (min-width: 1440px) {
    width: 278px;
    margin-bottom: 48px;
  }
`;

export const RecipeTime =  styled.p`
color: #23262A;
`