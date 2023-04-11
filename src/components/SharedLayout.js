import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from 'components/Header/Header/Header';
import Container from 'components/Container/Container';
import Footer from 'components/Footer/Footer';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Container>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
      <Footer />
    </>
  );
};
