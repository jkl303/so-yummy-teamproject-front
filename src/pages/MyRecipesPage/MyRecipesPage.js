import { useEffect, useState } from 'react';
// import MainPageTitle from '../../components/MainPageTitle/MainPageTitle';
import MyRecipesList from '../../components/MyRecipeList/MyRecipeList';
import { instance } from 'redux/auth/authOperations';
import Loader from 'components/Loader/Loader';
import Paginator from 'components/Paginator/Paginator';
import MainPageTitle from 'components/MyRecipeList/MainPageTitle/MainPageTitle';
import { Section } from './MyRecipesPage.styled';

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

  const handleDelete = id => {
    async function deleteData(data) {
      try {
        await instance.delete('/users/ownRecipes', {
          data: {
            _id: data,
          },
        });
        const newData = recipes.filter(recipe => recipe._id !== id);
        setRecipes(newData);
      } catch (er) {}
    }

    deleteData(id);
  };

  return (
    <Section>
      <MainPageTitle text={'My recipes'}></MainPageTitle>
      {isLoading ? (
        <Loader />
      ) : (
        <Paginator data={recipes} itemsPerPage={4}>
          {currentItems => (
            <MyRecipesList
              currentItems={currentItems}
              onDeleteRecipe={handleDelete}
            />
          )}
        </Paginator>
      )}
    </Section>
  );
};
export default MyRecipesPage;
