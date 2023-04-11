// import {} from './CategoriesPage.styled';
import { Categories } from 'components/Categories/Categories';
import { CategoryPageWrap } from '../CategoriesPage/CategoriesPage.styled';

export default function CategoriesPage() {
  return (
    <CategoryPageWrap>
      <Categories title={Categories} />
    </CategoryPageWrap>
  );
}
