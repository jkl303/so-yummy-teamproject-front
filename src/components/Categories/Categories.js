import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { fetchCategories } from 'services/api/httpRequests';
import { RecipesbyCategoryName } from './RecipesByCategoryName';
import { useNavigate } from 'react-router-dom';
import Loader from '../Loader/Loader';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import toast from 'react-hot-toast';
import {
  TabList,
  TabWrap,
  CategoriesTitle,
  CategoriesWrap,
  Tab,
  CategoryBtn,
  UnderLine,
} from './Categories.styled';

export const Categories = ({ title }) => {
  const [categories, setCategories] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [_, setValue] = useState(categories[0]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { categoryName } = useParams();

  useEffect(() => {
    async function getCategories() {
      try {
        setIsLoading(true);
        const categories = await fetchCategories();

        if (categories.length > 0) {
          setCategories(categories.map(category => category));
        }
      } catch (error) {
        toast('Something went wrong...');
      } finally {
        setIsLoading(false);
      }
    }

    getCategories();
  }, []);

  const onClick = (e, newCategory) => {
    navigate(`/categories/${e.target.value}`);
    setValue(newCategory);
  };
  const setUnderLine = () => {
    if (isActive) {
      return 'rgba(139, 170, 54, 1);';
    }
  };
  const btnFontColorChange = () => {
    if (isActive) {
      return 'rgba(139, 170, 54, 1);';
    }
    return 'rgba(189, 189, 189, 1);';
  };

  const settings = {
    className: 'slider variable-width',
    variableWidth: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    // autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: 'linear',
  };

  return (
    <>
      <CategoriesWrap>
        <CategoriesTitle>Categories</CategoriesTitle>

        <TabWrap>
          <TabList>
            <Slider {...settings}>
              {isLoading && <Loader />}
              {categories?.map(category => (
                <Tab key={nanoid()}>
                  <CategoryBtn
                    type="button"
                    onClick={onClick}
                    clicked={btnFontColorChange()}
                    value={category}
                  >
                    {category}
                    <UnderLine underlined={setUnderLine()}> </UnderLine>
                  </CategoryBtn>
                </Tab>
              ))}
            </Slider>
          </TabList>
        </TabWrap>
      </CategoriesWrap>

      <RecipesbyCategoryName />
    </>
  );
};
