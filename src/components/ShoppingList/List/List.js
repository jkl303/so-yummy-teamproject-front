import { useSelector, useDispatch } from 'react-redux';

import { ListBody } from 'components/ShoppingList/List/List.styled';
import { ListItem } from 'components/ShoppingList/List/ListItem/ListItem';
import { deleteShoppingListItemThunkOperation } from 'redux/shoppingList/shoppingListOperations';

export const ListBodyReusable = () => {
  const data = useSelector(state => state.shoppingList.items);
  const ListIsEmpty = data.length === 0;
  const dispatch = useDispatch();

  const onDeleteClick = id => {
    dispatch(deleteShoppingListItemThunkOperation(id));
  };
  return (
    <>
      {ListIsEmpty ? (
        <div style={{ minHeight: '100px' }}>
          Your shooping list is empty. Nothing to worry about!
        </div>
      ) : (
        <ListBody>
          {data.map(item => (
            <ListItem
              data={item}
              key={item._id}
              onDeleteClick={onDeleteClick}
            />
          ))}
        </ListBody>
      )}
    </>
  );
};
