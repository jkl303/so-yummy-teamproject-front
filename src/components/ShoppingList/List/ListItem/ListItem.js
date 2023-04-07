import {
  ListItemStyled,
  PicAndNameWrapper,
  RemoveWrapper,
  StyledName,
  NumberWrapper,
  NumberPadding,
  StyledImg,
} from 'components/ShoppingList/List/List.styled';
import { StyledSpan } from './ListItem.styled';
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
          <StyledSpan color={'white'}>{number}</StyledSpan>
        </NumberPadding>
      </NumberWrapper>
      <RemoveWrapper>
        <StyledSpan color={'black'}>
          <TfiClose />
        </StyledSpan>
      </RemoveWrapper>
    </ListItemStyled>
  );
};
