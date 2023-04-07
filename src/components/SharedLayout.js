import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../components/Header/Header/Header';
// import  Footer  from './Footer/Footer'; //наш footer

export const SharedLayout = ({ toggleTheme, isDarkTheme }) => {
  return (
    <>
      <Header toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      {/* <Footer /> */}
    </>
  );
};
