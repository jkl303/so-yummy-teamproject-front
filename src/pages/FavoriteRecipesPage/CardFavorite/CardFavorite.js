import { Link, useLocation } from 'react-router-dom';
import { SeeRecipeBtn } from 'components/Buttons/SeeRecipeBtn/SeeRecipeBtn';

import {
  Card,
  ImgWrapper,
  ImgRecipe,
  TextRecipe,
  TitleNameRecipe,
  WrapperImgTrashLogo,
  WrapperTimeBtn,
  WrapperContent,
  TimeP,
  WrapperImgBtnRecipe,
  WrapperTextRecipe,
  TrashLogo,
} from './CardFavorite.styled.js';

export default function CardFavorite({ item, handleDelete }) {
  const { title, time, instructions, thumb, _id } = item;
  const location = useLocation();

  return (
    <Card>
      <ImgWrapper>
        <Link to={`/recipe/${_id}`} state={{ from: location }}>
          <ImgRecipe src={thumb} alt="trash" />
        </Link>
      </ImgWrapper>
      <WrapperContent>
        <TitleNameRecipe>{title}</TitleNameRecipe>
        <WrapperTextRecipe>
          <TextRecipe>{instructions}</TextRecipe>
        </WrapperTextRecipe>

        <WrapperTimeBtn>
          <TimeP>{time} min</TimeP>
          <WrapperImgBtnRecipe>
            <SeeRecipeBtn to={`/recipe/${_id}`} state={{ from: location }} />
          </WrapperImgBtnRecipe>
          <WrapperImgTrashLogo onClick={() => handleDelete(_id)}>
            <TrashLogo />
          </WrapperImgTrashLogo>
        </WrapperTimeBtn>
      </WrapperContent>
    </Card>
  );
}
