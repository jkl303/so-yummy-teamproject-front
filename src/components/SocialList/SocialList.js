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
      <Link>
        <FacebookIcon />
      </Link>
      <Link>
        <YoutubeIcon />
      </Link>
      <Link>
        <TwitterIcon />
      </Link>
      <Link>
        <InstagramIcon />
      </Link>
    </List>
  );
};
