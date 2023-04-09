import { instance } from 'redux/auth/authOperations';

export const fetchSearched = async ({ filter, query }) => {
  try {
    const params = `filter=${filter}&query=${query.replace(/\s/g, '%20')}`;
    console.log(params);
    return await (
      await instance.get(`/recipes/search?${params}`)
    ).data;
  } catch (e) {
    console.log(e.message);
  }
};
