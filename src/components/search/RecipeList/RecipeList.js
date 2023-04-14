import { RecipeCard } from 'components/Main/RecipeCard/RecipeCard';
import { RecipeListStyled } from './RecipeList.styled';

export const RecipeList = ({ recipes }) => {
  return (
    <RecipeListStyled>
      {recipes.map(({ _id, thumb, title }) => (
        <RecipeCard key={_id} id={_id} img={thumb} title={title} />
      ))}
    </RecipeListStyled>
  );
};
