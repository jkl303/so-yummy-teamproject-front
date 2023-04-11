import styled from 'styled-components';

export const CategoriesWrap = styled.div`
  padding-left: 16px;
  @media screen and (min-width: 768px) {
    padding-left: 32px;
  }
  @media screen and (min-width: 1440px) {
    padding-left: 0px;
  }
`;

export const TabList = styled.ul`
  padding: 10px 0px 0px 10px;
  @media screen and (min-width: 768px) {
  }
`;

export const TabWrap = styled.div`
  width: 100%;
  height: 56px;
  margin-top: 50px;
  padding-left: 19px;
  border-bottom: 1px solid #e0e0e0;

  @media screen and (min-width: 1440px) {
    padding-left: 19px;
    margin-top: 100px;
  }
`;

export const CategoriesTitle = styled.h1`
  margin-bottom: 50px;
  margin-top: 50px;
  padding: 0px;
  font-weight: 600;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.02em;
  @media screen and (min-width: 768px) {
    font-size: 32px;
    margin-top: 72px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 48px;
    margin-bottom: 100px;
    margin-top: 100px;
  }
`;

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
  color: ${props => props.clicked};
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

// export const RecipesWrap = styled.div`
//   padding: 0 16px;
// `;
