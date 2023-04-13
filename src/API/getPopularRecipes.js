import { instance } from 'redux/auth/authOperations';

export const getPopularRecipes = async recipeData => {
  try {
    const response = await instance.get('/recipes/popular-recipe?limit=4');
    return response;
  } catch (e) {
    return e.message;
  }
};
