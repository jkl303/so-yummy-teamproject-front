import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import { Header } from './Header/Header'; //наш header
// import { Footer } from './Footer/Footer'; //наш header

export const SharedLayout = () => {
  return (
    <>
      {/* <Header /> */}
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      {/* <Footer /> */}
    </>
  );
};
