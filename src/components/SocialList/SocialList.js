import { List, Link } from './SocialList.styled';
import {
  FacebookIcon,
  YoutubeIcon,
  TwitterIcon,
  InstagramIcon,
} from './SocialList.styled';

export const SocialList = () => {
  return (
    <List>
      <Link to="https://www.facebook.com">
        <FacebookIcon />
      </Link>
      <Link to="https://www.youtube.com">
        <YoutubeIcon />
      </Link>
      <Link to="https://twitter.com">
        <TwitterIcon />
      </Link>
      <Link to="https://www.instagram.com">
        <InstagramIcon />
      </Link>
    </List>
  );
};
