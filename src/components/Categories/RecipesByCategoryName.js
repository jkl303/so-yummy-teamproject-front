import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { fetchRecipesByCategory } from '../../services/api/httpRequests';
import { RecipeCard } from '../../components/Main/RecipeCard/RecipeCard';
import Loader from '../Loader/Loader';

import { List } from './RecipesByCategoryName.styled.js';

export const RecipesbyCategoryName = () => {
  const { categoryName: category } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getRecipes = async () => {
      try {
        setIsLoading(true);
        const recipes = await fetchRecipesByCategory(category);

        setRecipes(recipes);
      } catch (error) {
        setError({ error });
      } finally {
        setIsLoading(false);
      }
    };

    getRecipes();
  }, [category]);
  return (
    <>
      {isLoading && <Loader />}
      {recipes.length > 0 && !error && !isLoading && (
        <List>
          {recipes.map(recipe => {
            console.log(recipe._id);
            return (
              <RecipeCard
                recipe={(recipe.preview, recipe.title, recipe._id)}
                key={recipe._id}
              />
            );
          })}
        </List>
      )}
      {!isLoading && !error && recipes.length === 0}
    </>
  );
};
