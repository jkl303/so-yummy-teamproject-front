import { RecipeCard } from 'components/Main/RecipeCard/RecipeCard';
import { RecipeListStyled } from './RecipeList.styled';

export const RecipeList = ({ recipes }) => {
  return (
    <RecipeListStyled>
      {recipes.map(recipe => (
        <RecipeCard key={recipe._id} recipe={recipe} />
      ))}
    </RecipeListStyled>
  );
};
