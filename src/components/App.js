import { lazy } from 'react';
import { Toaster } from 'react-hot-toast';
import { Navigate, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { SharedLayout } from './SharedLayout';
import { RestrictedRoute } from './RestrictedRoute';
// import { PrivateRoute } from './PrivateRoute';

const Welcome = lazy(() => import('../pages/Welcome/Welcome'));
const Registration = lazy(() => import('../pages/Registration/Registration'));
const Signin = lazy(() => import('../pages/Signin/Signin'));

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Toaster />
      <Routes>
        <Route index element={<Welcome />}>
          <Route
            path="/register"
            element={
              <RestrictedRoute redirectTo="/" component={<Registration />} />
            }
          />
        </Route>
        <Route path="/" element={<SharedLayout />}>
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/main-page" component={<Signin />} />
            }
          />
          {/* <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          /> */}
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
}
