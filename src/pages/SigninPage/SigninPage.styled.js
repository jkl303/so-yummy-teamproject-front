import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

export const PageWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fafafa;
`;

export const Img = styled.img`
  width: 285px;
  height: 250px;
  margin-top: 87px;
`;

export const BottomWrap = styled.div`
  clip-path: polygon(35% 10%, 65% 10%, 100% 0, 100% 100%, 0 100%, 0 0);
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: -15px;
  padding-top: 316px;
  padding-bottom: 98px;
  background-color: #1e1f28;
`;

export const GoogleLink = styled.a`
  margin-right: 24px;
`;

export const IconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  background-color: #fafafa33;
  :hover, :focus {
    background-color: #fafafa11;
  }
`;

export const GoogleIcon = styled(FcGoogle)`
  width: 24px;
  height: 24px;
`;

export const RegLink = styled(NavLink)`
  color: #fafafa;
  font-size: 14px;
  line-height: 21px;
  :hover,
  :focus {
    color: #8baa36;
  }
`;