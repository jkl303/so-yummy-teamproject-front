import { ListItem, Image, TitleWrap } from './RecipeCard.styled';

export const RecipeCard = ({ recipe }) => {
  return (
    <ListItem key={recipe._id}>
      <Image src={recipe.thumb} alt={recipe.title} width="343" loading="lazy" />
      <TitleWrap>
        <p>{recipe.title}</p>
      </TitleWrap>
    </ListItem>
  );
};
