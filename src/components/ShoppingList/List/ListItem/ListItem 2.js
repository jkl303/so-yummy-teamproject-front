import {
  ListItemStyled,
  PicAndNameWrapper,
  RemoveWrapper,
  StyledName,
  NumberWrapper,
  NumberPadding,
  StyledImg,
  StyledImgWrapper,
} from 'components/ShoppingList/List/List.styled';
import { useDispatch } from 'react-redux';
import { deleteShoppingListItemThunkOperation } from '../../../../redux/shoppingList/shoppingListOperations';
import { StyledSpan } from './ListItem.styled';

import { TfiClose } from 'react-icons/tfi';

export const ListItem = ({ data }) => {
  const dispatch = useDispatch();

  const { _id, ingredientQuantity: number, ingredientId } = data;
  const { ttl: name, thb: img } = ingredientId;
  // console.log(_id, name, number, img);

  // 640c2dd963a319ea671e36ae

  const onDeleteClick = id => {
    dispatch(deleteShoppingListItemThunkOperation(id));
  };

  return (
    <ListItemStyled key={_id}>
      <PicAndNameWrapper>
        <StyledImgWrapper>
          <StyledImg src={img} alt="pic"></StyledImg>
        </StyledImgWrapper>
        <StyledName>{name}</StyledName>
      </PicAndNameWrapper>
      <NumberWrapper>
        <NumberPadding>
          <StyledSpan color={'white'}>{number}</StyledSpan>
        </NumberPadding>
      </NumberWrapper>
      <RemoveWrapper>
        <StyledSpan color={'black'}>
          <TfiClose onClick={() => onDeleteClick(_id)} />
        </StyledSpan>
      </RemoveWrapper>
    </ListItemStyled>
  );
};
