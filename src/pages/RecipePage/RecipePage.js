import {} from './RecipePage.styled';
// import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useWindowDimensions from 'hooks/useWindowDimensions';
import recipeMob from '../../images/mobile/recipe-bg375.jpg';
import recipeMob2x from '../../images/mobile/recipe-bg375-2x.jpg'
import recipeTab from '../../images/tablet/recipe-bg768.jpg';
import recipeTab2x from '../../images/tablet/recipe-bg768-2x.jpg'
import recipeDesk from '../../images/desktop/recipe-bg1440.jpg';
import recipeDesk2x from '../../images/desktop/recipe-bg1440-2x.jpg';
// import {AddToFavoriteBtn} from '../../components/Buttons/AddToFavoriteBtn/AddToFavoriteBtn';
import {AiOutlineClockCircle} from 'react-icons/ai';
import {RecipePreparation} from '../../components/Recipe/RecipePreparation';
import {IngredientsList} from '../../components/Recipe/IngredientsList'
import {RecipeWrap, RecipeHeroWrap, RecipeHeroBlock, RecipeTitle, RecipeDescription, RecipeAddToFavotite} from './RecipePage.styled'
import { instance } from '../../redux/auth/authOperations';

export default function RecipePage() {
  const userId = useSelector(state => state.auth.user.id);
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const { width } = useWindowDimensions();

  
  useEffect(() => {
    instance
      .get(`/recipes/byId/${recipeId}`)
      .then(response => {
        setRecipe(response.data);
        console.log(response.data);
        // console.log(userId)
      })
      .catch(error => {
        console.log(error);
      });
  }, [recipeId]);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      instance
        .delete(`/recipes/favorite/${recipeId}`)
        .then(() => {
          setIsFavorite(false);
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      instance
        .patch(`/recipes/favorite/${recipeId}`)
        .then(() => {
          setIsFavorite(true);
        })
        .catch(error => {
          console.log(error);
        });
    }
  };
  if (!recipe) {
    return <div>Loading...</div>;

  }

  const { title, description, time, ingredients, instructions, thumb, owner, favorites } = recipe.data.recipe;

  return (
  
    <>
    <RecipeWrap>
      <RecipeHeroWrap>
        {width < 768 ? (
          <img src={recipeMob} srcSet={`${recipeMob} 1x, ${recipeMob2x} 2x`} alt="background" width="455" />
        ) : width < 1440 ? (
          <img src={recipeTab}  srcSet={`${recipeTab} 1x, ${recipeTab2x} 2x`} alt="background" width="768" />
        ) : (
          <img src={recipeDesk} srcSet={`${recipeDesk} 1x, ${recipeDesk2x} 2x`} alt="background" width="1440" />
        )}
        <RecipeHeroBlock>
      <RecipeTitle>{title}</RecipeTitle>
      <RecipeDescription>{description}</RecipeDescription>
      {owner?.toString() !== userId && recipe && (favorites.includes(userId) ? (
  <RecipeAddToFavotite onClick={handleFavoriteClick}>Delete from favorites</RecipeAddToFavotite>
) : (
  <RecipeAddToFavotite onClick={handleFavoriteClick}>Add to favorites</RecipeAddToFavotite>
))}
      <p key={recipeId}> <AiOutlineClockCircle/> {time} min</p>
      </RecipeHeroBlock>
      </RecipeHeroWrap>
      <IngredientsList ingredients={ingredients}/>
      <RecipePreparation instructions={instructions} thumb={thumb} title={title} />
      </RecipeWrap>
    </>
  );
}
