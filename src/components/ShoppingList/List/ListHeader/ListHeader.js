import {
  StyledHeaderList,
  StyledHeaderFirstListItem,
  StyledHeaderOtherListItem,
} from 'components/ShoppingList/List/ListHeader/ListHeader.styled';

export const ListHeader = ({ headerItems }) => {
  return (
    <StyledHeaderList>
      <StyledHeaderFirstListItem>{headerItems[0]}</StyledHeaderFirstListItem>
      <StyledHeaderOtherListItem> {headerItems[1]}</StyledHeaderOtherListItem>
      <StyledHeaderOtherListItem>{headerItems[2]}</StyledHeaderOtherListItem>
    </StyledHeaderList>
  );
};
