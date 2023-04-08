import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  margin-bottom: 32px;
  @media screen and (min-width: 768px) {
    justify-content: flex-start;
    gap: 20px;
    margin-bottom: 0;
  }
`;




  // @media screen and (min-width: 1440px) {
  //   display: flex;
  //   flex-direction: row;
  //   align-items: center;
  //   justify-content: center;
  //   padding-top: 0;
  //   height: 44px;
  //   gap: 30px;
  // }


export const Link = styled(NavLink)`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 1.29;
letter-spacing: -0.02em;
color: #FAFAFA;
  &.active {
    color: #8baa36;
     
  &:focus,
  &:hover {
    color: #8baa36;
   
`;
