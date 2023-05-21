import styled, { css } from 'styled-components';
import { FiPlus, FiMinus, FiX } from 'react-icons/fi';
import { mediaQueries } from 'style/mediaQueries';

const iconsStyle = css`
  color: ${({ theme: { colors } }) => colors.txtRecipeInner};
  transition: color 250ms ease-in-out, transform 250ms ease-in-out;
  :hover {
    cursor: pointer;
    transform: scale(1.2);
    color: var(--accent);
  }
`;

export const RecipeIngredientsStyled = styled.div`
  padding: 67px 0;
  ${mediaQueries('tablet')`padding: 100px 0;`}
  button {
    width: 16px;
    height: 16px;
    padding: 0;
    border: none;
    border-radius: 50%;
    background-color: transparent;
  }
`;

export const TtlAndBtns = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 28px;
  ${mediaQueries('tablet')`
  margin-bottom: 36px;`}
  ${mediaQueries('desktop')`
    max-width: 610px;}`}
`;

export const AddBtns = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 92px;
  height: 28px;
  border: 1px solid ${({ theme: { colors } }) => colors.txtRecipeInner};
  border-radius: 18px;
  ${mediaQueries('tablet')`width: 110px;
  height: 32px;`}
  span {
    font-size: 14px;
    line-height: 1;
    ${mediaQueries('tablet')`font-size: 16px;`}
  }
`;

export const IngredientsStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;
  ${mediaQueries('tablet')`gap: 24px;`}
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    ${mediaQueries('desktop')`
    max-width: 610px;`}
  }
`;

export const MinusIcon = styled(FiMinus)`
  ${iconsStyle}
`;

export const PlusIcon = styled(FiPlus)`
  ${iconsStyle}
`;

export const XIcon = styled(FiX)`
  color: ${({ theme: { colors } }) => colors.txt};
  width: 18px;
  height: 18px;
  ${mediaQueries('tablet')`
      width: 22px;
      height: 22px;`}
  :hover {
    cursor: pointer;
  }
`;
