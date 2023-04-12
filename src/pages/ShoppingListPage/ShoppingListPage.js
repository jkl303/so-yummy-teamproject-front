import { StyledContainer } from './ShoppingListPage.styled';
import { useEffect } from 'react';
import { ListBodyReusable } from 'components/ShoppingList/List/List';
import { ShoppingListHeader } from 'components/ShoppingList/Header/Header';
import { ListHeader } from 'components/ShoppingList/List/ListHeader/ListHeader';
import { useDispatch } from 'react-redux';
import { fetchShoppingListThunkOperation } from '../../redux/shoppingList/shoppingListOperations';

export default function ShoppingListPage() {
  const dispatch = useDispatch();
  const headerItems = ['Products', 'Number', 'Remove'];

  useEffect(() => {
    dispatch(fetchShoppingListThunkOperation());
  }, [dispatch]);

  return (
    <StyledContainer>
      <ShoppingListHeader />
      <ListHeader headerItems={headerItems} />
      <ListBodyReusable />
    </StyledContainer>
  );
}
