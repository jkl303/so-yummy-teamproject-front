import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import { lazy, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from '../style/GlobalStyle';
import { SharedLayout } from './SharedLayout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { ThemeProvider } from 'styled-components';

import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import CategoriesPage from 'pages/CategoriesPage/CategoriesPage';
import AddRecipesPage from 'pages/AddRecipesPage/AddRecipesPage';
import MyRecipesPage from 'pages/MyRecipesPage/MyRecipesPage';
import FavoriteRecipesPage from 'pages/FavoriteRecipesPage/FavoriteRecipesPage';
import ShoppingListPage from 'pages/ShoppingListPage/ShoppingListPage';
import SearchPage from 'pages/SearchPage/SearchPage';
import MainPage from 'pages/MainPage/MainPage';
import RecipePage from 'pages/RecipePage/RecipePage';
import { lightTheme } from 'style/lightTheme';
import { darkTheme } from 'style/darkTheme';
// import { selectAuth } from 'redux/auth/authSelectors';
import { refreshUser } from 'redux/auth/authOperations';

const WelcomePage = lazy(() => import('../pages/WelcomePage/WelcomePage'));
const RegistrationPage = lazy(() =>
  import('../pages/RegistrationPage/RegistrationPage')
);
const SigninPage = lazy(() => import('../pages/SigninPage/SigninPage'));

export default function App() {
  const dispatch = useDispatch();
  // const { isRefreshing } = useSelector(selectAuth);

  const [theme, setTheme] = useState('light');
  const isDarkTheme = theme === 'dark';

  const toggleTheme = () => {
    setTheme(isDarkTheme ? 'light' : 'dark');
  };

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <Toaster />
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <Routes>
          <Route index component={<WelcomePage />} />
          <Route
            path="/"
            element={
              <SharedLayout
                toggleTheme={toggleTheme}
                isDarkTheme={isDarkTheme}
              />
            }
          >
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/login"
                  component={<RegistrationPage />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute redirectTo="/" component={<SigninPage />} />
              }
            />
            <Route
              path="categories/:categoryName"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<CategoriesPage />}
                />
              }
            />
            <Route
              path="add"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<AddRecipesPage />}
                />
              }
            />
            <Route
              path="my"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<MyRecipesPage />}
                />
              }
            />
            <Route
              path="favorite"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<FavoriteRecipesPage />}
                />
              }
            />
            <Route
              path="shopping-list"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<ShoppingListPage />}
                />
              }
            />
            <Route
              path="search"
              element={
                <PrivateRoute redirectTo="/login" component={<SearchPage />} />
              }
            />
            <Route
              path="main"
              element={
                <PrivateRoute redirectTo="/login" component={<MainPage />} />
              }
            />
            <Route
              path="recipe/:recipeId"
              element={
                <PrivateRoute redirectTo="/login" component={<RecipePage />} />
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}
