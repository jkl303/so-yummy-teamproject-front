import {
  ListItemStyled,
  PicAndNameWrapper,
  RemoveWrapper,
  StyledName,
  NumberWrapper,
  NumberPadding,
  StyledImg,
} from 'components/ShoppingList/List/List.styled';
import { TfiClose } from 'react-icons/tfi';
export const ListItem = ({ data }) => {
  const { id, name, number, img } = data;

  return (
    <ListItemStyled key={id}>
      <PicAndNameWrapper>
        <StyledImg src={img} alt="pic"></StyledImg>
        <StyledName>{name}</StyledName>
      </PicAndNameWrapper>
      <NumberWrapper>
        <NumberPadding>
          <span>{number}</span>
        </NumberPadding>
      </NumberWrapper>
      <RemoveWrapper>
        <span>
          <TfiClose />
        </span>
      </RemoveWrapper>
    </ListItemStyled>
  );
};
