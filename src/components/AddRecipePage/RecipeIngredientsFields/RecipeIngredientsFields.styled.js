import styled from 'styled-components';
import { FiPlus, FiMinus, FiX } from 'react-icons/fi';
import { mediaQueries } from 'style/mediaQueries';

export const RecipeIngredientsStyled = styled.div`
  padding: 67px 0;
  ${mediaQueries('tablet')`padding: 100px 0;`}
  button {
    width: 16px;
    height: 16px;
    border: none;
    border-radius: 50%;
    padding: 0;
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
  border: 1px solid rgba(51, 51, 51, 0.3);
  border-radius: 18px;
  ${mediaQueries('tablet')`  width: 110px;
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
    ${mediaQueries('desktop')`
    max-width: 610px;}`}
    height: 53px;
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    ${mediaQueries('tablet')`
    justify-content: flex-start;
    button {margin-left: auto;
    }`}
  }
`;

export const MinusIcon = styled(FiMinus)`
  color: #3333334d;
  :hover {
    cursor: pointer;
    color: var(--accent);
  }
`;

export const PlusIcon = styled(FiPlus)`
  color: #3333334d;
  :hover {
    cursor: pointer;
    color: var(--accent);
  }
`;

export const XIcon = styled(FiX)`
  color: #333333;
  width: 18px;
  height: 18px;
  ${mediaQueries('tablet')`
      width: 22px;
      height: 22px;`}
  :hover {
    cursor: pointer;
  }
`;
