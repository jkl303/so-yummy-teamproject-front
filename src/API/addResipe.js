import { instance } from 'redux/auth/authOperations';

export const addRecipe = async recipeData => {
  try {
    const response = await instance.post('/users/ownRecipes', recipeData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response;
  } catch (e) {
    return e.message;
  }
};
