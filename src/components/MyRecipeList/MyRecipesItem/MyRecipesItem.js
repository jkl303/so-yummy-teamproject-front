import {
  BtnDelete,
  IconDelete,
  Img,
  Text,
  TextTime,
  Title,
  WrapperButton,
  WrapperContent,
  WrapperItem,
} from './MyRecipesItem.styled';
import { SeeRecipeBtn } from 'components/Buttons/SeeRecipeBtn/SeeRecipeBtn';
import { useLocation } from 'react-router-dom';

const MyRecipesItem = ({ recipe, handleDelete }) => {
  const { title, description, time, thumb, category, _id } = recipe;
  const location = useLocation();

  return (
    <WrapperItem>
      <Img src={thumb} alt={title} />
      <WrapperContent>
        <div>
          <Title>{title}</Title>
          <Text>{description}</Text>
        </div>
        <TextTime>{time} min</TextTime>
      </WrapperContent>
      <WrapperButton>
        <SeeRecipeBtn
          to={`/recipe/${_id}`}
          state={{ from: location }}
        ></SeeRecipeBtn>
        <BtnDelete onClick={() => handleDelete(_id)}>
          <IconDelete />
        </BtnDelete>
      </WrapperButton>
    </WrapperItem>
  );
};
export default MyRecipesItem;
