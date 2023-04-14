import { getPopularRecipes } from 'API/getPopularRecipes';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import useWindowDimensions from 'hooks/useWindowDimensions';
import { Spinner } from 'components/Loader/Spinner';
import {
  PopularRecipeImg,
  PopularRecipeItem,
  PopularRecipeItemDescr,
  PopularRecipeList,
  PopularRecipeStyled,
  PopularRecipeTitle,
} from './PopularRecipe.styled';

export const PopularRecipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const { width } = useWindowDimensions();

  const numberOfRecipes = width > 767 && width < 1440 ? 2 : -1;

  useEffect(() => {
    const getRecipes = async () => {
      try {
        setLoading(true);
        const response = await getPopularRecipes();
        setRecipes(response.data);
      } catch (error) {
        console.log(`${error.name}: ${error.message}`);
        toast.error('Sorry, something went wrong...');
      } finally {
        setLoading(false);
      }
    };
    getRecipes();
  }, []);
  return (
    <PopularRecipeStyled>
      <PopularRecipeTitle>Popular recipe</PopularRecipeTitle>
      {loading && <Spinner />}
      {recipes.length > 0 && (
        <PopularRecipeList>
          {recipes.slice(0, numberOfRecipes).map(recipe => {
            const { _id, title, preview, description } = recipe;
            return (
              <PopularRecipeItem key={_id}>
                <Link to={`/recipe/${_id}`} state={{ from: location }}>
                  <PopularRecipeImg src={preview} alt={title} />
                  <div>
                    <p>{title}</p>
                    <PopularRecipeItemDescr>
                      {description}
                    </PopularRecipeItemDescr>
                  </div>
                </Link>
              </PopularRecipeItem>
            );
          })}
        </PopularRecipeList>
      )}
    </PopularRecipeStyled>
  );
};
