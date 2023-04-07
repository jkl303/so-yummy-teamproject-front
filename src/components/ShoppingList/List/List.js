import * as React from 'react';

import { ListBody } from 'components/ShoppingList/List/List.styled';
import { ListItem } from 'components/ShoppingList/List/ListItem/ListItem';

export const ListBodyReusable = ({ data }) => {
  return (
    <ListBody>
      {data.map(item => (
        <ListItem data={item} key={item.id} />
      ))}
    </ListBody>
  );
};
