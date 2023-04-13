import styled from 'styled-components';
import { mediaQueries } from 'style/mediaQueries';

export const Card = styled.div`
  width: 343px;
  height: 152px;
  background: ${({ theme: { colors } }) => colors.bg};
  border-radius: 8px;
  display: flex;
  padding: 14px;
  margin-bottom: 18px;

  ${mediaQueries('tablet')`
    width: 704px;
    height: 288px;
    padding: 28px 24px;
    margin-bottom: 40px;
  `}
  ${mediaQueries('desktop')`
    width: 1240px;
    height: 404px;
    padding: 40px;
    margin-bottom: 50px;
  `}
`;
export const WrapperContent = styled.div`
  width: 100%;
  padding-left: 14px;

  ${mediaQueries('tablet')`
    padding-left: 24px;
    position: relative;
  `}
  ${mediaQueries('desktop')`
    padding-left: 40px;
    position: relative;
  `}
`;
export const ImgWrapper = styled.div`
  ${mediaQueries('mobile')`
    width: 211px;
   `}

  ${mediaQueries('tablet')`
        width: 356px;
   `}
    ${mediaQueries('desktop')`
   
   width: 444px;
 `}
`;

export const ImgRecipe = styled.img`
  border-radius: 8px;

  ${mediaQueries('tablet')`
   height: 232px
  `}
  ${mediaQueries('desktop')`
   
    height: 324px;
  `}
`;

export const TitleNameRecipe = styled.h3`
  /* font-family: 'Poppins';
  font-style: normal; */
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: -0.24px;
  color: ${({ theme: { colors } }) => colors.subtitle};
  margin-bottom: 14px;

  ${mediaQueries('tablet')`
    font-size: 24px;
    line-height: 24px;
    margin-bottom: 28px;
  `}
  ${mediaQueries('desktop')`
    margin-bottom: 50px;
  `}
`;
export const WrapperTextRecipe = styled.div`
  height: 42px;
  margin-bottom: 15px;

  ${mediaQueries('tablet')`
    height: 73px;
    margin-bottom: 58px;
  `}
  ${mediaQueries('desktop')`
    height: 134px;
    margin-bottom: 62px;
  `}
`;
export const TextRecipe = styled.p`
  /* font-family: 'Poppins';
  font-style: normal; */
  font-weight: 400;
  font-size: 8px;
  line-height: 10px;
  letter-spacing: -0.02em;
  color: ${({ theme: { colors } }) => colors.txt};

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;

  ${mediaQueries('tablet')`
    font-size: 14px;
    line-height: 18px;
    /* margin-bottom: 58px;
    height: 73px; */
    width: 298px;
  `}
  ${mediaQueries('desktop')`
    font-size: 18px;
    line-height: 24px;
    -webkit-line-clamp: 6;
    width: 679px;
  `}
`;

export const WrapperImgTrashLogo = styled.div`
  width: 24px;
  height: 24px;
  background: ${({ theme: { colors } }) => colors.ingr};
  border-radius: 4px;
  padding: 5px;

  ${mediaQueries('tablet')`
    position: absolute;
    width: 38px;
    height: 38px;
    left: 382px;
    top: 0px;
    padding: 8px;
  `}
  ${mediaQueries('desktop')`
    position: absolute;
    width: 44px;
    height: 44px;
    left: 794px;
    top: 0;
    padding: 10px;
  `}
`;
export const TrashLogo = styled.div`
  /* @media (min-width: 375px) {
    width: 14px;
    height: 14px;
  }
  @media (min-width: 768px) {
    width: 22px;
    height: 22px;
  } */
`;

export const WrapperTimeBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const TimeP = styled.p`
  /* font-family: 'Poppins';
  font-style: normal; */
  font-weight: 500;
  font-size: 10px;
  line-height: 14px;
  letter-spacing: -0.24px;
  color: ${({ theme: { colors } }) => colors.subtitle};

  ${mediaQueries('tablet')`
    font-size: 14px;
    line-height: 20px;
  `}
`;

export const WrapperImgBtnRecipe = styled.div`
  display: none;

  ${mediaQueries('tablet')`
    display: block;
    width: 138px;
    height: 45px;
  `}
  ${mediaQueries('desktop')`
    width: 160px;
    height: 54px;
  `}
`;

export const BtnRecipe = styled.div`
  /* @media (min-width: 1440px) {
    width: 100%;
    height: 100%;
  } */
`;
