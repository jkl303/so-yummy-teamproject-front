import { useEffect, useState } from 'react';
import MainPageTitle from '../../components/MainPageTitle/MainPageTitle';
import MyRecipesList from '../../components/MyRecipeList/MyRecipeList';
import { instance } from 'redux/auth/authOperations';
import Loader from 'components/Loader/Loader';
import Paginator from 'components/Paginator/Paginator';

const MyRecipesPage = () => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const recipes = await instance.get('/users/ownRecipes');
        setRecipes(recipes.data);
      } catch (er) {
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <MainPageTitle text={'My recipes'}></MainPageTitle>
      {isLoading ? <Loader /> : <Paginator data={recipes} />}
    </>
  );
};
export default MyRecipesPage;
