import { FollowList } from 'components/FollowlList/FollowlList';
import { FollowUsStyled } from './FollowUs.styled';

export const FollowUs = () => {
  return (
    <FollowUsStyled>
      <h2>Follow us</h2>
      <FollowList />
    </FollowUsStyled>
  );
};
