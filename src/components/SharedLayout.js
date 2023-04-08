import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../components/Header/Header/Header';
// import  Footer  from './Footer/Footer'; //наш footer

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      {/* <Footer /> */}
    </>
  );
};
