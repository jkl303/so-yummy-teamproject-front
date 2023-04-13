import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

import {
  TitleH1,
  SectionFavorite,
  ContainerFavorite,
  First,
  Second,
  Third,
  WrapperSectionTitle,
} from './FavoriteRecipesPage.styled';
import { NotSearch } from './NotSearch/NotSearch';
import Paginator from 'components/Paginator/Paginator';
import FavoriteRecipesList from './FavoriteRecipeList/FavoriteRecipeList';

export default function FavoriteRecipesPage() {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  // const [error, setError] = useState('');

  const token = useSelector(state => state.auth.token);

  const favoriteInstance = axios.create({
    baseURL: 'https://soyummy-qk5m.onrender.com/api',
  });
  favoriteInstance.defaults.headers.authorization = `Bearer ${token}`;

  const fetchFavorite = async () => {
    const { data } = await favoriteInstance.get('/users/favorite');
    return data;
  };

  useEffect(() => {
    const getFavorite = async () => {
      try {
        const result = await fetchFavorite();
        setFavoriteRecipes(result);
      } catch ({ response }) {
        console.log(response.data.message);
      }
    };
    getFavorite();
  }, []);

  const deleteFavoriteRecipe = id => {
    async function deleteRecipe() {
      try {
        await favoriteInstance.delete(`/recipes/favorite/${id}`);
        const newData = favoriteRecipes.filter(recipe => recipe._id !== id);
        setFavoriteRecipes(newData);
      } catch (error) {
        console.log(error.message);
      }
    }
    deleteRecipe();
  };

  const itemsPerPage = 4;
  return (
    <>
      <SectionFavorite>
        <ContainerFavorite>
          <WrapperSectionTitle>
            <TitleH1>Favorite</TitleH1>
            <First></First>
            <Second></Second>
            <Third></Third>
          </WrapperSectionTitle>
          {favoriteRecipes.length === 0 ? (
            <NotSearch />
          ) : favoriteRecipes.length > itemsPerPage ? (
            <Paginator
              data={favoriteRecipes}
              itemsPerPage={itemsPerPage}
              noMargin
            >
              {currentItems => {
                return (
                  <FavoriteRecipesList
                    recipe={currentItems}
                    onDeleteRecipe={deleteFavoriteRecipe}
                  />
                );
              }}
            </Paginator>
          ) : (
            <FavoriteRecipesList
              recipe={favoriteRecipes}
              onDeleteRecipe={deleteFavoriteRecipe}
            />
          )}
        </ContainerFavorite>
      </SectionFavorite>
    </>
  );
}
