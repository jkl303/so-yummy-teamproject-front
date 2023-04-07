import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { BsFacebook, BsYoutube, BsTwitter, BsInstagram } from 'react-icons/bs';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 13px;
  padding: 0;
  margin-top: 0;
  margin-bottom: 19.5px;
  @media screen and (min-width: 768px) {
    gap: 18px;
    margin-bottom: 23.5px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 49.5px;
  }
`;

export const Link = styled(NavLink)`
  cursor: pointer;
  color: #8baa36;
  &:focus,
  &:hover {
    color: #fafafa;
  }
`;

export const FacebookIcon = styled(BsFacebook)`
  width: 20px;
  height: 20px;
`;

export const YoutubeIcon = styled(BsYoutube)`
  width: 20px;
  height: 15px;
`;

export const TwitterIcon = styled(BsTwitter)`
  width: 20px;
  height: 16px;
`;

export const InstagramIcon = styled(BsInstagram)`
  width: 17px;
  height: 17px;
  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;
