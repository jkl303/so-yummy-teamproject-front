import React from 'react';
import { useLocation } from 'react-router-dom';
import { RecipeCard } from '../RecipeCard/RecipeCard';
import useWindowDimensions from 'hooks/useWindowDimensions';
// import { SeeAllBtn } from 'components/Buttons/SeeAllBtn/SeeAllBtn';

import {
  CategoryTitle,
  List,
  LinkStyled,
  ButtonWrap,
} from './MainCategoryItem.styled';

export const MainCategoryItem = ({ category }) => {
  const location = useLocation();
  const { width } = useWindowDimensions();

  return (
    <div>
      <CategoryTitle>{category[0].category}</CategoryTitle>
      <List>
        {width > 1439
          ? category
              .slice(0, 4)
              .map(({ _id, thumb, title }) => (
                <RecipeCard key={_id} id={_id} img={thumb} title={title} />
              ))
          : width > 767
          ? category
              .slice(0, 2)
              .map(({ _id, thumb, title }) => (
                <RecipeCard key={_id} id={_id} img={thumb} title={title} />
              ))
          : category
              .slice(0, 1)
              .map(({ _id, thumb, title }) => (
                <RecipeCard key={_id} id={_id} img={thumb} title={title} />
              ))}
      </List>
      <ButtonWrap>
        <LinkStyled
          to={`/categories/${category[0].category}`}
          state={{ from: location }}
        >
          See all
        </LinkStyled>
        {/* <SeeAllBtn/> */}
      </ButtonWrap>
    </div>
  );
};
