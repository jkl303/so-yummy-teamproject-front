import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import useWindowDimensions from 'hooks/useWindowDimensions';
import { getPopularRecipes } from 'API/getPopularRecipes';
import { Spinner } from 'components/Loader/Spinner';
import {
  PopularRecipeLink,
  PopularRecipeList,
  PopularRecipeStyled,
  TextWrapper,
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
      <h2>Popular recipe</h2>
      {loading && <Spinner />}
      {recipes.length > 0 && (
        <PopularRecipeList>
          {recipes.slice(0, numberOfRecipes).map(recipe => {
            const { _id, title, preview, description } = recipe;
            return (
              <li key={_id}>
                <PopularRecipeLink
                  to={`/recipe/${_id}`}
                  state={{ from: location }}
                >
                  <img src={preview} alt={title} />
                  <TextWrapper>
                    <h3>{title}</h3>
                    <p>
                      {description.slice(0, width < 1440 ? 112 : 90) + '...'}
                    </p>
                  </TextWrapper>
                </PopularRecipeLink>
              </li>
            );
          })}
        </PopularRecipeList>
      )}
    </PopularRecipeStyled>
  );
};
