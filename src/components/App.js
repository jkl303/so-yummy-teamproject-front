import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
import { useState, useEffect, createContext, useContext } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { GlobalStyle } from '../style/GlobalStyle';
import { SharedLayout } from './SharedLayout';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { ThemeProvider } from 'styled-components';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import CategoriesPage from 'pages/CategoriesPage/CategoriesPage';
import AddRecipePage from 'pages/AddRecipePage/AddRecipePage';
import MyRecipesPage from 'pages/MyRecipesPage/MyRecipesPage';
import FavoriteRecipesPage from 'pages/FavoriteRecipesPage/FavoriteRecipesPage';
import ShoppingListPage from 'pages/ShoppingListPage/ShoppingListPage';
import SearchPage from 'pages/SearchPage/SearchPage';
import MainPage from 'pages/MainPage/MainPage';
import RecipePage from 'pages/RecipePage/RecipePage';
import WelcomePage from 'pages/WelcomePage/WelcomePage';
import SigninPage from 'pages/SigninPage/SigninPage';
import { lightTheme } from 'style/lightTheme';
import { darkTheme } from 'style/darkTheme';
import { refreshUser } from 'redux/auth/authOperations';
import RegistrationPage from 'pages/RegistrationPage/RegistrationPage';
import { setUser } from 'redux/auth/authSlice';
import { fetchIngredients } from 'redux/recipes/ingredients/operations';

const AppContext = createContext(null);
export const useToggleTheme = () => useContext(AppContext);

export default function App() {
  const dispatch = useDispatch();
  const location = useLocation();

  const [theme, setTheme] = useState('light');
  const isDarkTheme = theme === 'dark';

  const toggleTheme = () => {
    setTheme(isDarkTheme ? 'light' : 'dark');
  };

  useEffect(() => {
    dispatch(refreshUser());
    dispatch(fetchIngredients());
  }, [dispatch]);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get('token');
    const id = queryParams.get('id');
    const name = queryParams.get('name');
    const email = queryParams.get('email');
    const avatarURL = queryParams.get('avatarURL');

    if (token) {
      dispatch(setUser({ token, id, name, email, avatarURL }));
      dispatch(refreshUser());
    }
  }, [dispatch, location]);

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
                    component={<AddRecipePage />}
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
