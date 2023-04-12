import { Navigation, Link, IconWrap, Icon } from './HeaderNavStyled';
import useWindowDimensions from 'hooks/useWindowDimensions';

const HeaderNavigation = ({ toggleMenu }) => {
  const { width } = useWindowDimensions();

  const linkClose = () => {
    if (width <= 1439) {
      return toggleMenu();
    }
    return null;
  };

  return (
    <Navigation>

      <Link to="/categories/Beef" onClick={() => linkClose()}>
        Categories
      </Link>
      <Link to="/add" onClick={() => linkClose()}>
        Add recipes
      </Link>
      <Link to="/my" onClick={() => linkClose()}>
        My recipes
      </Link>
      <Link to="/favorite" onClick={() => linkClose()}>
        Favorites
      </Link>
      <Link to="/shopping-list" onClick={() => linkClose()}>
        Shopping list
      </Link>
      <Link to="/search?query" onClick={() => linkClose()}>

        <IconWrap>
          <Icon />
        </IconWrap>
        {width <= 1439 && <>Search</>}
      </Link>
    </Navigation>
  );
};

export default HeaderNavigation;
