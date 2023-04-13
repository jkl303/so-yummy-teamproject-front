import { Categories } from 'components/Categories/Categories';
import { CategoryPageWrap } from '../CategoriesPage/CategoriesPage.styled';
import Loader from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export default function CategoriesPage() {
  return (
    <CategoryPageWrap>
      <Categories title={Categories} />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </CategoryPageWrap>
  );
}
