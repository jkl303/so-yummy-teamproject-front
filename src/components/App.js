import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
import { useEffect, createContext, useContext } from 'react';

import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Navigate, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from '../style/GlobalStyle';
import { SharedLayout } from './SharedLayout';
// import { RestrictedRoute } from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
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
import WelcomePage from 'pages/WelcomePage/WelcomePage';
import SigninPage from 'pages/SigninPage/SigninPage';
import RegistrationPage from 'pages/RegistrationPage/RegistrationPage';

const AppContext = createContext(null);
export const useToggleTheme = () => useContext(AppContext);

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
      <Toaster />
      <AppContext.Provider value={{ toggleTheme }}>
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
          <GlobalStyle />
          <Routes>
            <Route
              path="/"
              element={
                <PublicRoute
                  component={<WelcomePage />}
                  restricted
                  redirectTo="/main"
                />
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute
                  component={<SigninPage />}
                  restricted
                  redirectTo="/main"
                />
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute
                  component={<RegistrationPage />}
                  restricted
                  redirectTo="/main"
                />
              }
            />

            <Route
              path="/"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<SharedLayout />}
                />
              }
            >
              <Route
                path="main"
                element={
                  <PrivateRoute redirectTo="/login" component={<MainPage />} />
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
                  <PrivateRoute
                    redirectTo="/login"
                    component={<SearchPage />}
                  />
                }
              />

              <Route
                path="recipe/:recipeId"
                element={
                  <PrivateRoute
                    redirectTo="/login"
                    component={<RecipePage />}
                  />
                }
              />
              <Route path="404" element={<NotFoundPage />} />
              <Route path="*" element={<Navigate to="/404" replace />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </AppContext.Provider>
    </>
  );
}
