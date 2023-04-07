import styled from 'styled-components';
import { mediaQueries } from 'style/mediaQueries';

export const ListBody = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: 100%;
  list-style: none;

  margin-left: 8px;
  margin-right: 8px;
  margin-top: 0;
  padding: 0px;
  ${mediaQueries('tablet')`
 margin-left: 0px;
    margin-right: 0px;
    gap: 44px;
  `}
  ${mediaQueries('desktop')`
 margin-left: 40px;
    margin-right: 40px;
    gap: 44px;
  `}
`;

export const ListItemStyled = styled.li`
  display: flex;
  border-bottom: 1px solid #e0e0e0;
  align-items: flex-start;
  height: 70px;
  ${mediaQueries('tablet')`
 height: 140px;
  `}
`;

export const PicAndNameWrapper = styled.div`
  display: flex;
  flex-direction: row;

  flex-grow: 2;
  height: 100%;
  flex-basis: 0;
`;

export const StyledName = styled.span`
  margin-left: 10px;
  ${mediaQueries('tablet')`
margin-left: 16px;
  `}
`;

export const RemoveWrapper = styled.div`
  text-align: center;
  flex-grow: 1;
  flex-basis: 0;
  height: 100%;
`;

export const NumberWrapper = styled.div`
  flex-grow: 1;
  background-color: tomato;
  height: 100%;
  flex-basis: 0;
  width: 100%;
`;
export const NumberPadding = styled.div`
  text-align: center;
  height: 23px;
  width: 37px;
  background-color: #8baa36;
  margin-left: auto;
  margin-right: auto;
  border-radius: 4px;
  ${mediaQueries('tablet')`
 width: 68px;
    height: 35px;
  `}
`;

export const StyledImg = styled.img`
  width: 60px;
  height: 60px;
  ${mediaQueries('tablet')`
  width: 93px;
    height: 97px;
    border-radius: 8px;
  `}
`;
