import { FollowLink, FollowList } from './FollowUs.styled';
import { BsFacebook, BsYoutube, BsTwitter, BsInstagram } from 'react-icons/bs';

export const FollowUs = () => {
  return (
    <div>
      <h2>Follow us</h2>
      <FollowList>
        <FollowLink to="https://www.facebook.com">
          <BsFacebook />
        </FollowLink>
        <FollowLink to="https://www.youtube.com">
          <BsYoutube />
        </FollowLink>
        <FollowLink to="https://twitter.com">
          <BsTwitter />
        </FollowLink>
        <FollowLink to="https://www.instagram.com">
          <BsInstagram />
        </FollowLink>
      </FollowList>
    </div>
  );
};
