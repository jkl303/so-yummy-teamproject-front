import styled from 'styled-components';
import { mediaQueries } from '../../style/mediaQueries';

export const IngridientsWrap = styled.div`
  margin-left: 16px;
  margin-right: 16px;
  ${mediaQueries('tablet')`
    margin-left: 32px;
    margin-right: 32px;
  `}
  ${mediaQueries('desktop')`
    margin-left: 100px;
    margin-right: 100px;
 ` }
`;

export const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #8baa36;
  border-radius: 8px;
  padding: 12px 14px;
  margin-bottom: 24px;
  font-weight: 600;
  font-size: 10px;
  line-height: 1.5;
  letter-spacing: 0.03em;
  color: #fafafa;
  ${mediaQueries('tablet')`
    padding: 21px 32px;
    margin-bottom: 32px;
    font-size: 18px;
 `}
  ${mediaQueries('desktop')`
    padding: 21px 40px;
    margin-bottom: 50px;
  `}
  p:first-child {
    margin-right: auto;
  }
  p:last-child {
    margin-left: 18px;
    ${mediaQueries('tablet')`
      margin-left: 38px;
    `}
  ${mediaQueries('desktop')`
      margin-left: 109px;
   `}
  }
`

export const IngridientsItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 29px 10px 10px;
  background: ${({ theme: { colors } }) => colors.bgRecipe};
  border-radius: 8px;
  &:not(:last-child) {
    margin-bottom: 16px;
  }
  ${mediaQueries('tablet')`
    padding: 16px 58px 16px 24px;
    &:not(:last-child) {
      margin-bottom: 24px;
`}
  ${mediaQueries('desktop')`
      padding: 26px 70px 26px 32px;
`  }
`;

export const IngridientImage = styled.img`
width: 65px;
height: 65px;
object-fit: contain;
${mediaQueries('tablet')`
  width: 144px;
  height: 146px;
`}
`;

export const IngridientInfo = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  margin-left: 8px;
  ${mediaQueries('tablet')`
    margin-left: 24px;
` }
  ${mediaQueries('desktop')`
    margin-left: 40px;
` }
`;


export const IngridientName = styled.p`
  flex-grow: 1;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: -0.24px;
  color: ${({ theme: { colors } }) => colors.txt};
  ${mediaQueries('tablet')`
    font-size: 24px;
 ` }
`;

export const IngridientDetails = styled.div`
  display: flex;
  align-items: center;
`;
export const IngridientQuantity = styled.div`
  margin-right: 28px;
  padding: 4px;
  font-weight: 600;
  font-size: 10px;
  line-height: 1.5;
  color: #fafafa;
  background: #8baa36;
  border-radius: 4px;
  ${mediaQueries('tablet')`
    padding: 4px 8px;
    margin-right: 78px;
    font-size: 18px;
 `}
  ${mediaQueries('desktop')`
    margin-right: 140px;
 ` }
`;

export const IngridientCheck = styled.div`
  display: flex;
  align-items: center;
  label {
    cursor: pointer;
    display: flex;
  }
  input {
    cursor: pointer;
    opacity: 0;
    position: absolute;
  }
  input:checked {
    & + label::before {
      content: '\\2714';
      display: flex;
      justify-content: center;
      align-items: center;
      color: #8baa36;
      font-weight: bold;
      font-size: 20px;
    }
  }
  label::before {
    content: '';
    border: 1px solid rgba(126, 126, 126, 0.5);
    border-radius: 4px;
    width: 18px;
    height: 18px;
    margin-right: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    ${mediaQueries('tablet')`
      width: 35px;
      height: 35px;
      border: 2px solid rgba(126, 126, 126, 0.5);
 `}
  }
`;