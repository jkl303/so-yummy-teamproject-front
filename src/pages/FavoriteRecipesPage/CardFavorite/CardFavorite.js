import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as TrashLogoSvg } from '../image/trash-01.svg';

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
} from './CardFavorite.styled.js';
import seeRecipe from '../image/see-recipe.svg';

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
            <Link to={`/recipe/${_id}`} state={{ from: location }}>
              <img src={seeRecipe} alt="see-recipe-btn" />
            </Link>
          </WrapperImgBtnRecipe>
          <WrapperImgTrashLogo onClick={() => handleDelete(_id)}>
            <TrashLogoSvg />
          </WrapperImgTrashLogo>
        </WrapperTimeBtn>
      </WrapperContent>
    </Card>
  );
}
