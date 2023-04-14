import { Navigation, Link, LinkBlack, IconWrap, Icon } from './HeaderNavStyled';
import useWindowDimensions from 'hooks/useWindowDimensions';

const HeaderNavigation = ({ toggleMenu }) => {
  const { width } = useWindowDimensions();

  const isRecipePage = window.location.pathname.includes('recipe');

  const linkClose = () => {
    if (width <= 1439) {
      return toggleMenu();
    }
    return null;
  };

  return (
    <Navigation>
      {isRecipePage ? (
        <LinkBlack to="/categories/Beef" onClick={() => linkClose()}>
          Categories
        </LinkBlack>
      ) : (
        <Link to="/categories/Beef" onClick={() => linkClose()}>
          Categories
        </Link>
      )}

      {isRecipePage ? (
        <LinkBlack to="/add" onClick={() => linkClose()}>
          Add recipes
        </LinkBlack>
      ) : (
        <Link to="/add" onClick={() => linkClose()}>
          Add recipes
        </Link>
      )}

      {isRecipePage ? (
        <LinkBlack to="/my" onClick={() => linkClose()}>
          My recipes
        </LinkBlack>
      ) : (
        <Link to="/my" onClick={() => linkClose()}>
          My recipes
        </Link>
      )}

      {isRecipePage ? (
        <LinkBlack to="/favorite" onClick={() => linkClose()}>
          Favorites
        </LinkBlack>
      ) : (
        <Link to="/favorite" onClick={() => linkClose()}>
          Favorites
        </Link>
      )}

      {isRecipePage ? (
        <LinkBlack to="/shopping-list" onClick={() => linkClose()}>
          Shopping list
        </LinkBlack>
      ) : (
        <Link to="/shopping-list" onClick={() => linkClose()}>
          Shopping list
        </Link>
      )}

      {isRecipePage ? (
        <LinkBlack to="/search?query" onClick={() => linkClose()}>
          <IconWrap>
            <Icon />
          </IconWrap>
          {width <= 1439 && <>Search</>}
        </LinkBlack>
      ) : (
        <Link to="/search?query" onClick={() => linkClose()}>
          <IconWrap>
            <Icon />
          </IconWrap>
          {width <= 1439 && <>Search</>}
        </Link>
      )}
    </Navigation>
  );
};

export default HeaderNavigation;
