import { Nav, Link } from './Navigation.styled';

export const Navigation = () => {

  return (
      <Nav>
        <Link to="/search">Ingredients</Link>
        <Link to="/add">Add recipes</Link>
        <Link to="/my">My recipes</Link>
        <Link to="/favorite">Favorite</Link>
        <Link to="/shopping-list">Shopping list</Link>
      </Nav>
  );
};
