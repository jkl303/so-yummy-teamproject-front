import axios from 'axios';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { CategoryItem } from 'components/Categories/CategoryItem';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  TabList,
  TabWrap,
  CategoriesTitle,
  CategoriesWrap,
} from './Categories.styled';

export const fetchCategories = async () => {
  try {
    const response = await axios.get('/recipes/category-list');
    return response.data;
  } catch (e) {
    return e.message;
  }
};

export const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getCategories() {
      try {
        const categories = await fetchCategories();

        if (categories.length > 0) {
          setCategories(categories.map(category => category));
        }
      } catch (error) {
        console.log(error.message);
      }
    }
    getCategories();
  }, []);
  const settings = {
    className: 'slider variable-width',
    variableWidth: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    // autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: 'linear',
  };

  return (
    <CategoriesWrap>
      <CategoriesTitle>Categories</CategoriesTitle>

      <TabWrap>
        <TabList>
          <Slider {...settings}>
            {categories?.map(category => (
              <CategoryItem key={nanoid()} category={category} />
            ))}
          </Slider>
        </TabList>
      </TabWrap>
    </CategoriesWrap>
  );
};
