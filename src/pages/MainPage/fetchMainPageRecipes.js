import { instance } from 'redux/auth/authOperations';

export const getRecipesByCategory = async () => {
  try {
    const response = await instance.get('/recipes/main-page');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
