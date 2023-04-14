import { List, Link } from './FollowList.styled';
import {
  FacebookIcon,
  YoutubeIcon,
  TwitterIcon,
  InstagramIcon,
} from './FollowList.styled';

export const FollowList = () => {
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
