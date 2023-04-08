import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from 'components/Header/Header/Header';
import Footer from 'components/Footer/Footer';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <main style={{ flex: '1 1 auto' }}>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};
