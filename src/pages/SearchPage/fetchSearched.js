import { instance } from 'redux/auth/authOperations';

export const fetchSearched = async ({ filter, query }) => {
  try {
    if (filter.toLowerCase() === 'ingredients') {
      return await instance.get(`/recipes/ingredients?query=${query}`);
    }
    if (filter.toLowerCase() === 'title') {
      return await instance.get(`/recipes/search?query=${query}`);
    }
  } catch (e) {
    console.log(e.message);
  }
};
