import { WrapperList } from './MyRecipeList.styled';
import MyRecipesItem from './MyRecipesItem/MyRecipesItem';

const MyRecipesList = ({ currentItems, onDeleteRecipe }) => {
  return (
    <WrapperList>
      {currentItems.map(recipe => (
        <MyRecipesItem
          recipe={recipe}
          handleDelete={onDeleteRecipe}
          key={recipe._id}
        />
      ))}
    </WrapperList>
  );
};

export default MyRecipesList;
