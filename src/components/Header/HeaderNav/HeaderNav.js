import { Navigation, Link, IconWrap, Icon } from './HeaderNavStyled';
import useWindowDimensions from 'hooks/useWindowDimensions';

const HeaderNavigation = () => {
  const { width } = useWindowDimensions();

  return (
    <Navigation>
      <Link to="/categories/Beef">Categories</Link>
      <Link to="/add">Add recipes</Link>
      <Link to="/my">My recipes</Link>
      <Link to="/favorite">Favorites</Link>
      <Link to="/shopping-list">Shopping list</Link>
      <Link to="/search?query">
        <IconWrap>
          <Icon />
        </IconWrap>
        {width <= 1439 && <>Search</>}
      </Link>
    </Navigation>
  );
};

export default HeaderNavigation;
