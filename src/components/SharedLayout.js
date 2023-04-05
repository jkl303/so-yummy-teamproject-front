import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import { AppBar } from './AppBar/AppBar'; //наш header

export const SharedLayout = () => {
  return (
    <>
      {/* <AppBar /> */}
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
