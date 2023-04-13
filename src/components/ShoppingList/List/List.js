import { useSelector } from 'react-redux';

import { ListBody } from 'components/ShoppingList/List/List.styled';
import { ListItem } from 'components/ShoppingList/List/ListItem/ListItem';

export const ListBodyReusable = () => {
  const data = useSelector(state => state.shoppingList.items);
  const ListIsEmpty = data.length === 0;
  return (
    <>
      {ListIsEmpty ? (
        <div style={{ minHeight: '100px' }}>
          Your shooping list is empty. Nothing to worry about!
        </div>
      ) : (
        <ListBody>
          {data.map(item => (
            <ListItem data={item} key={item._id} />
          ))}
        </ListBody>
      )}
    </>
  );
};
