import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

import CardFavorite from './CardFavorite/CardFavorite';

import {
  TitleH1,
  SectionFavorite,
  CardWrapper,
  ContainerFavorite,
  First,
  Second,
  Third,
  WrapperSectionTitle,
} from './FavoriteRecipesPage.styled';
import { NotSearch } from './NotSearch/NotSearch';

export default function FavoriteRecipesPage() {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [error, setError] = useState('');
  const [deleteId, setDeleteId] = useState('');

  const token = useSelector(state => state.auth.token);

  const favoriteInstance = axios.create({
    baseURL: 'https://soyummy-qk5m.onrender.com/api',
  });
  favoriteInstance.defaults.headers.authorization = `Bearer ${token}`;

  const fetchFavorite = async () => {
    const { data } = await favoriteInstance.get('/users/favorite');
    return data;
  };

  const deleteFavoriteRecipe = async id => {
    const data = await favoriteInstance.delete(`/recipes/favorite/${id}`);
    return data;
  };

  useEffect(() => {
    const getFavorite = async () => {
      try {
        const result = await fetchFavorite();
        setFavoriteRecipes(result);
      } catch ({ response }) {
        setError(response.data.message);
      }
    };
    getFavorite();
  }, [favoriteRecipes]);

  // const deleteFavoriteRecipe = async id => {
  //   await favoriteInstance.delete(`/recipes/favorite/${id}`);
  //   setFavoriteRecipes(
  //     favoriteRecipes.filter(post => {
  //       return post._id !== id;
  //     })
  //   );
  // };
  useEffect(() => {
    if (deleteId === '') {
      return;
    }
    const deleteFavorite = async () => {
      try {
        await deleteFavoriteRecipe(deleteId);
        setFavoriteRecipes(
          favoriteRecipes.filter(item => item._id !== deleteId)
        );
      } catch ({ response }) {
        console.log(response.data.message);
      }
    };
    deleteFavorite();
  }, [deleteId]);

  return (
    <>
      <SectionFavorite>
        {error ? (
          <NotSearch />
        ) : (
          <ContainerFavorite>
            <WrapperSectionTitle>
              <TitleH1>Favorite</TitleH1>
              <First></First>
              <Second></Second>
              <Third></Third>
            </WrapperSectionTitle>
            <CardWrapper>
              {favoriteRecipes.map(item => (
                <CardFavorite
                  key={item._id}
                  item={item}
                  setDeleteId={setDeleteId}
                  // handleDelete={deleteFavoriteRecipe}
                />
              ))}
            </CardWrapper>
          </ContainerFavorite>
        )}
      </SectionFavorite>
    </>
  );
}
