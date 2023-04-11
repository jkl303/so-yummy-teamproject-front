import styled from 'styled-components';

export const Tab = styled.li`
  height: 56px;
  margin-right: 28px;
  position: relevant;

  @media screen and (min-width: 768px) {
    margin-right: 55px;
  }
`;

export const CategoryBtn = styled.button`
  display: flex;
  gap: 3px;
  flex-direction: column;
  color: ${props => props.underlined};
  height: 30px;
  /* margin-right: 28px; */
  border-color: transparent;
  background-color: transparent;
  font-weight: 400;
  font-size: 14px;
  line-height: 1;
  padding: 0;
  margin: 0;
  cursor: pointer;

  /* border-bottom: ${props => props.underlined}; */
  @media screen and (min-width: 768px) {
    font-weight: 400;
    font-size: 18px;
    line-height: 1;
    /* margin-right: 55px; */
  }
`;

export const UnderLine = styled.span`
  margin-top: 32px;
  display: block;
  min-width: 100%;
  min-height: 2px;
  background-color: ${props => props.underlined};
`;
