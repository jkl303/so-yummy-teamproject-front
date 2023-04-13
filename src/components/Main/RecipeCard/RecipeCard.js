import { Link, useLocation } from 'react-router-dom';
import { ListItem, Image, TitleWrap } from './RecipeCard.styled';

export const RecipeCard = ({ id, img, title }) => {
  const location = useLocation();

  return (
    <ListItem key={id}>
      <Link to={`/recipe/${id}`} state={{ from: location }}>
        <Image src={img} alt={title} width="343" loading="lazy" />
        <TitleWrap>
          <p>{title}</p>
        </TitleWrap>
      </Link>
    </ListItem>
  );
};
