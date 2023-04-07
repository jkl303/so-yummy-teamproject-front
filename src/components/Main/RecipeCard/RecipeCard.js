import { Link, useLocation } from 'react-router-dom';
import { ListItem, Image, TitleWrap } from './RecipeCard.styled';

export const RecipeCard = ({ recipe }) => {
  const location = useLocation();

  return (
    <ListItem key={recipe._id}>
      <Link to={`recipe/${recipe._id}`} state={{ from: location }}>
        <Image
          src={recipe.thumb}
          alt={recipe.title}
          width="343"
          loading="lazy"
        />
        <TitleWrap>
          <p>{recipe.title}</p>
        </TitleWrap>
      </Link>
    </ListItem>
  );
};
