import styled, { css } from 'styled-components';
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
  `} ${mediaQueries('desktop')`
 margin-left: 40px;
    margin-right: 40px;
    gap: 44px;
  `};
`;

export const ListItemStyled = styled.li`
  display: flex;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.shopBorder};
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
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  color: ${({ theme: { colors } }) => colors.subtitle};
  ${mediaQueries('tablet')`
margin-left: 16px;
font-size: 16px;
line-height: 24px;
letter-spacing: 0em;
text-align: left;

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
  height: 100%;
  flex-basis: 0;
  width: 100%;
  text-align: center;
`;
export const NumberPadding = styled.div`
  text-align: center;
  // height: 23px;
  // width: 37px;
  display: inline-block;
  min-width: 68px;
  background-color: ${({ theme: { colors } }) => colors.accent};
  margin-left: auto;
  margin-right: auto;
  border-radius: 4px;
  ${mediaQueries('tablet')`
//  width: 68px;
//  height: 35px;
  `}
`;

export const StyledImg = styled.img`
  width: 48px;
  height: 48px;
  ${mediaQueries('tablet')`
    width: 81px;
    height: 81px;
    border-radius: 8px;
  `}
`;

export const StyledImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme: { colors } }) => colors.shopItemBgr};
  border-radius: 6px;
  width: 60px;
  height: 60px;
  ${mediaQueries('tablet')`
  width: 93px;
    height: 97px;
    border-radius: 8px;
  `}
`;
