
import axios from 'axios';

import { useState } from 'react';

import {
  Tab,
  CategoryBtn,
  UnderLine,
} from 'components/Categories/CategoryItem.styled';

export const CategoryItem = ({ category }) => {
  const [isActive, setIsActive] = useState(false);
  const onClick = () => {
    setIsActive(!isActive);
  };
  const setUnderLine = () => {
    if (isActive) {
      return 'rgba(139, 170, 54, 1);';
    }
  };
  return (
    <Tab>
      <CategoryBtn type="button" onClick={onClick} underlined={setUnderLine()}>
        {category}
        <UnderLine underlined={setUnderLine()}> </UnderLine>
      </CategoryBtn>
    </Tab>
  );
};
