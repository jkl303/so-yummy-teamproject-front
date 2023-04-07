import { StyledContainer } from './ShoppingListPage.styled';

import dummyData from './dummyData.json';
import { ListBodyReusable } from 'components/ShoppingList/List/List';
import { ShoppingListHeader } from 'components/ShoppingList/Header/Header';
import { ListHeader } from 'components/ShoppingList/List/ListHeader/ListHeader';

export default function ShoppingListPage() {
  const headerItems = ['Products', 'Number', 'Remove'];

  return (
    <StyledContainer>
      <ShoppingListHeader />
      <ListHeader headerItems={headerItems} />
      <ListBodyReusable data={dummyData} />
    </StyledContainer>
  );
}
