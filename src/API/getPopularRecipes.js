import { instance } from 'redux/auth/authOperations';

export const getPopularRecipes = async () => {
  try {
    const response = await instance.get('/recipes/popular-recipe');
    return response;
  } catch (e) {
    return e.message;
  }
};
