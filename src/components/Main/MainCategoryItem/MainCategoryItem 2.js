import React from 'react';
import { RecipeCard } from '../RecipeCard/RecipeCard';
import useWindowDimensions from 'hooks/useWindowDimensions';

import {
  CategoryTitle,
  List,
  ButtonStyled,
  ButtonWrap,
} from './MainCategoryItem.styled';

export const MainCategoryItem = ({ category }) => {
  const { width } = useWindowDimensions();

  return (
    <div>
      <CategoryTitle>{category[0].category}</CategoryTitle>
      <List>
        {width > 1439
          ? category
              .slice(0, 4)
              .map(recipe => <RecipeCard key={recipe._id} recipe={recipe} />)
          : width > 767
          ? category
              .slice(0, 2)
              .map(recipe => <RecipeCard key={recipe._id} recipe={recipe} />)
          : category
              .slice(0, 1)
              .map(recipe => <RecipeCard key={recipe._id} recipe={recipe} />)}
      </List>
      <ButtonWrap>
        <ButtonStyled>See all</ButtonStyled>
      </ButtonWrap>
    </div>
  );
};
