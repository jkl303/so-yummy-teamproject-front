import { Nav, Link } from './Navigation.styled';

//Функция для скрола наверх страницы
export const scrollToTop = () => {
  window.scrollTo(0, 0);
};

export const Navigation = () => {
  return (
    <Nav>
      <Link
        to="/search?query=&type=ingredients"
        // to="/search" state={{ ingredients: true }}
        onClick={scrollToTop}
      >
        Ingredients
      </Link>
      <Link to="/add" onClick={scrollToTop}>
        Add recipes
      </Link>
      <Link to="/my" onClick={scrollToTop}>
        My recipes
      </Link>
      <Link to="/favorite" onClick={scrollToTop}>
        Favorite
      </Link>
      <Link to="/shopping-list" onClick={scrollToTop}>
        Shopping list
      </Link>
    </Nav>
  );
};
