import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ListBody } from 'components/ShoppingList/List/List.styled';
import { ListItem } from 'components/ShoppingList/List/ListItem/ListItem';

export const ListBodyReusable = () => {
  const data = useSelector(state => state.shoppingList.items);

  return (
    <ListBody>
      {data.map(item => (
        <ListItem data={item} key={item._id} />
      ))}
    </ListBody>
  );
};
