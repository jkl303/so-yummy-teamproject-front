import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Header from '../components/Header/Header/Header';
// import  Footer  from './Footer/Footer'; //наш footer

export const SharedLayout = () => {
  const location = useLocation();
  const { pathname: path } = location;
  const isRenderedWithoutLayout = path.includes('welcome');
  return isRenderedWithoutLayout ? (
    <Outlet />
  ) : (
    <>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      {/* <Footer /> */}
    </>
  );
};
