import { List, Item, Text } from './TextList.styled';

export const TextList = () => {
  return (
    <List>
          <Item>
             <Text>Database of recipes that can be replenished</Text> 
          </Item>
          <Item>
              <Text>Flexible search for desired and unwanted ingredients</Text>
          </Item>
          <Item>
              <Text>Ability to add your own recipes with photos</Text>
          </Item>
          <Item>
              <Text>Convenient and easy to use</Text>
          </Item>
    </List>
  );
};
