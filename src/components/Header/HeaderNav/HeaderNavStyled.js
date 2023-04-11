import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 182px;
  gap: 8px;

  @media screen and (min-width: 768px) {
    padding-top: 186px;
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-top: 0;
    height: 44px;
  }
`;
export const Link = styled(NavLink)`
  display: block;
  cursor: "pointer";
  color: #22252a;
  text-decoration: none;
  font-weight: 500;
  font-size: 18px;
  line-height: 1;
  padding: 12px 20px;

  &.active {
    color: #8baa36;
  }

  @media screen and (min-width: 768px) {
    padding: 16px 30px;
    font-size: 24px;
  }
  @media screen and (min-width: 1440px) {
    padding: 11px 24px;
    font-size: 14px;
    line-height: 22px;
  }
`;

export const Icon = styled(FiSearch)`
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const IconWrap = styled.div`
  display: inline-block;
  position: relative;
  top: 3px;
  left: -8px;
  @media screen and (min-width: 768px) {
    top: 4px;
    left: -8px;
  }

  @media screen and (min-width: 1440px) {
    top: 3px;
    left: 3px;
  }
`;
