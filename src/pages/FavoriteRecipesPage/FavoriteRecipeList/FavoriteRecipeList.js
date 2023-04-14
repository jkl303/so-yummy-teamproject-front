import CardFavorite from '../CardFavorite/CardFavorite';

import { CardWrapper } from '../FavoriteRecipesPage.styled';

export default function FavoriteRecipesList({ onDeleteRecipe, recipe }) {
  return (
    <>
      <CardWrapper>
        {recipe.map(item => (
          <CardFavorite
            key={item._id}
            item={item}
            handleDelete={onDeleteRecipe}
          />
        ))}
      </CardWrapper>
    </>
  );
}
