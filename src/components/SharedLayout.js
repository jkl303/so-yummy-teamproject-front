import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Container from '../components/Container/Container';
import Header from '../components/Header/Header/Header';
import Footer from '../components/Footer/Footer';

export const SharedLayout = () => {
  return (
    <>
      <Container>
        <Header />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
      <Footer />
    </>
  );
};
