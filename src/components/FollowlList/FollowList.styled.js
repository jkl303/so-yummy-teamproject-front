import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { BsFacebook, BsYoutube, BsTwitter, BsInstagram } from 'react-icons/bs';
import { mediaQueries } from 'style/mediaQueries';

export const List = styled.ul`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 13px;
  padding: 0;
  margin-top: 10px;

  ${mediaQueries('tablet')`
    gap: 18px;
    margin-bottom: 24px;`};

  ${mediaQueries('desktop')`
    margin-bottom: 50px;`};
`;

export const Link = styled(NavLink)`
  cursor: pointer;
  color: var(--bg);
  &:focus,
  &:hover {
    color: ${({ theme: { colors } }) => colors.btnFoot};
  }
`;

export const FacebookIcon = styled(BsFacebook)`
  width: 20px;
  height: 20px;
  color: ${({ theme: { colors } }) => colors.txt};

  ${mediaQueries('tablet')`
  width: 30px;
  height: 30px;`};
`;

export const YoutubeIcon = styled(BsYoutube)`
  width: 20px;
  height: 15px;
  color: ${({ theme: { colors } }) => colors.txt};

  ${mediaQueries('tablet')`
  width: 30px;
  height: 30px;`};
`;

export const TwitterIcon = styled(BsTwitter)`
  width: 20px;
  height: 16px;
  color: ${({ theme: { colors } }) => colors.txt};

  ${mediaQueries('tablet')`
  width: 30px;
  height: 30px;`};
`;

export const InstagramIcon = styled(BsInstagram)`
  width: 17px;
  height: 17px;
  color: ${({ theme: { colors } }) => colors.txt};

  ${mediaQueries('tablet')`
  width: 30px;
  height: 30px;`};
`;
